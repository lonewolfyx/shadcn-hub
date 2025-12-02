<template>
    <div class="flex flex-col">
        <div class="flex flex-wrap items-center lg:items-end justify-between gap-5 py-4">
            <AppHeader
                :description="registryShadcnDirectory?.category.description"
                :title="registryShadcnDirectory?.category.name ?? ''"
            />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <RegisterApp
                :registries="registryShadcnDirectory?.registries ?? []"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { categories } from '~/constant/categories'
import type { ICategories } from '~/types/categories'
import virtualShadcnHub from 'virtual:shadcn-hub'
import type { IRegistryChannel } from '~/types/registry'

const route = useRoute()

const registryCategory = Object.fromEntries(
    categories.map((item: ICategories) => [`/${item.url}`, { ...item }]),
)

const registryShadcnDirectory = computed(() => {
    const registryItem = registryCategory[route.path] as ICategories

    if (!registryItem) {
        return null
    }

    return {
        category: { ...registryItem },
        registries: virtualShadcnHub[registryItem.name] as IRegistryChannel[],
    }
})

if (!registryShadcnDirectory.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found',
        fatal: true,
    })
}
</script>
