export type CategoryType
    = | 'Libraries & Components'
        | 'Templates & Starters'
        | 'Plugins & Tools'
        | 'Design & Style Resources'
        | 'IconFont'
        | 'Shadcn Blocks'

export interface IRegistryChannel {
    name: string
    slug: string
    description: string
    categories: CategoryType[]
    links: {
        homepage: string
        repository: string
    }
    status: 'active' | 'deprecated'
    author: {
        name: string
        github: string
    }
    github: {
        star: number
    }
    added_at: string
    updated_at: string
}

export interface IShadcnHubRegistryMap {
    registries: IRegistryChannel[]

    [key: string]: any
}
