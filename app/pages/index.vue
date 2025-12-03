<template>
    <div class="relative space-y-8">
        <div
            v-for="(items, category) in virtualShadcnHub"
            :key="category"
            class="flex flex-col"
        >
            <div class="flex flex-wrap items-center lg:items-end justify-between gap-5 py-4">
                <AppHeader
                    :title="category"
                    :description="registryCategory[category]"
                />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <RegisterApp
                    :registries="items.splice(0, 20)"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import shadcnHubData from 'virtual:shadcn-hub'
import { categories } from '~/constant/categories'

const virtualShadcnHub = structuredClone(shadcnHubData)

const registryCategory = Object.fromEntries(
    categories.map(item => [item.name, item.description]),
)
</script>
