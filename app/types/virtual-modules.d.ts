declare module 'virtual:shadcn-hub' {
    import type { CategoryType, IRegistryChannel } from './registry'

    const registry: Record<CategoryType, IRegistryChannel[]>
    export default registry
}
