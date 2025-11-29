<template>
    <div class="relative">
        <div class="flex flex-wrap items-center lg:items-end justify-between gap-5 py-4">
            <div class="flex flex-col justify-center gap-2">
                <span class="font-mono font-medium text-xl leading-none">Libraries & Components</span>
                <div class="flex items-center gap-2 text-sm font-normal text-secondary-foreground">
                    Overview of all team members and roles.
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
                v-for="item in Array.from({ length: 20 }, (_, i) => i+1)"
                :key="item"
                :class="cn(
                    'relative hover:bg-secondary rounded-lg',
                    'grow flex items-start',
                    'border border-secondary',
                    'p-2 gap-2',
                )"
                class="cursor-pointer transition-colors"
            >
                <Avatar class="items-center justify-center border rounded-full size-[30px] bg-background">
                    <AvatarImage
                        alt="@shadcn"
                        src="/logos/magic-ui.svg"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div class="flex-1 space-y-0.5">
                    <div class="flex items-center gap-2">
                        <span class="font-medium text-sm text-foreground hover:text-primary">Magic UI</span>
                        <Badge
                            class="p-0 border-transparent bg-transparent text-destructive [&_svg]:size-3.5"
                            variant="destructive"
                        >
                            <div class="rounded-full bg-[currentColor] opacity-75 size-2" />
                        </Badge>
                    </div>
                    <p class="truncate text-xs text-muted-foreground font-normal">
                        UI library for Design Engineers
                    </p>
                </div>
                <div class="flex justify-start items-center gap-1.5 mb-5">
                    <Icon
                        class="size-4 text-amber-300"
                        name="line-md:star-filled"
                    />
                    <span class="font-medium text-xs xt-muted-foreground">323094</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import { Badge } from '~/components/ui/badge'
</script>
