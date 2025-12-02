<template>
    <NuxtLink
        v-for="items in registries"
        :key="items.slug"
        :class="cn(
            'relative hover:bg-secondary rounded-lg',
            'grow flex items-start',
            'border border-secondary',
            'p-2 gap-2',
            'cursor-pointer transition-colors',
        )"
        :to="items.links.homepage"
        target="_blank"
    >
        <Avatar class="items-center justify-center border rounded-full size-[30px] bg-background">
            <AvatarImage
                :alt="items.slug"
                :src="`/logos/${items.slug}.svg`"
            />
            <AvatarFallback>{{ items.name.charAt(0).toUpperCase() }}</AvatarFallback>
        </Avatar>
        <div class="flex-1 space-y-0.5 min-w-0">
            <div class="flex items-center gap-2">
                <span class="font-medium text-sm text-foreground hover:text-primary">{{ items.name }}</span>
                <Badge
                    :class="cn(
                        items.status === 'deprecated' ? 'text-destructive' : 'text-blue-600',
                    )"
                    class="p-0 border-transparent bg-transparent [&_svg]:size-3.5"
                    variant="destructive"
                >
                    <div class="rounded-full bg-[currentColor] opacity-75 size-2" />
                </Badge>
            </div>
            <p class="truncate text-xs text-muted-foreground font-normal block">
                {{ items.description }}
            </p>
        </div>
        <div class="flex justify-start items-center gap-1.5 mb-5">
            <Icon
                class="size-4 text-amber-300"
                name="line-md:star-filled"
            />
            <span class="font-medium text-xs xt-muted-foreground">{{ items.github.star }}</span>
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>
import { Badge } from '~/components/ui/badge'
import { cn } from '~/lib/utils'
import type { IRegistryChannel } from '~/types/registry'

defineOptions({
    name: 'RegisterApp',
})

defineProps<{
    registries: IRegistryChannel[]
}>()
</script>
