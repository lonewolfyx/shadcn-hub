import type { Plugin } from 'vite'
import { debounce } from 'radash'
import { resolve } from 'node:path'
import { readFile } from 'node:fs/promises'
import type { CategoryType, IRegistryChannel, IShadcnHubRegistryMap } from '../app/types/registry'

const ID = 'virtual:shadcn-hub'
const VIRTUAL_ID = '\0' + ID
const ROOT_PATH = resolve(process.cwd(), 'public')
const SHADCN_HUB_REGISTRY_PATH = resolve(process.cwd(), 'public/shadcn-hub.json')

const groupByCategories = async () => {
    const registries = JSON.parse(await readFile(SHADCN_HUB_REGISTRY_PATH, 'utf-8')) as IShadcnHubRegistryMap

    const result: Record<CategoryType, IRegistryChannel[]> = {
        'Libraries & Components': [],
        'Templates & Starters': [],
        'Plugins & Tools': [],
        'Design & Style Resources': [],
        'IconFont': [],
        'Shadcn Blocks': [],
    }

    for (const item of registries.registries) {
        for (const category of item.categories) {
            result[category].push(item)
        }
    }

    return result
}

export const virtualShadcnHub = (): Plugin => {
    let serverInstance: any

    return {
        name: 'vite-plugin-virtual-shadcn-hub',
        resolveId(id) {
            return id === ID ? VIRTUAL_ID : null
        },
        async load(id) {
            if (id !== VIRTUAL_ID) return

            return `export default ${JSON.stringify(await groupByCategories())}`
        },
        configureServer(server) {
            serverInstance = server

            const onFileChange = debounce({ delay: 100 }, async (eventName: string, file: string) => {
                if (!file.includes(SHADCN_HUB_REGISTRY_PATH)) return

                console.log(`shadcn hub update`, file)

                const mod = serverInstance.moduleGraph.getModuleById(VIRTUAL_ID)
                if (mod) {
                    serverInstance.moduleGraph.invalidateModule(mod)
                    serverInstance.ws.send({ type: 'full-reload' })
                }
            })

            serverInstance.watcher.add(ROOT_PATH)
            serverInstance.watcher.on('all', onFileChange)
        },
    }
}
