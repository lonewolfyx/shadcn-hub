<template>
    <Sidebar
        :class="cn(
            'fixed z-20',
            'hidden lg:flex flex-col grow flex-1 py-4 px-2',
            'border-none',
        )"
    >
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg">
                        <div
                            :class="cn(
                                'text-sidebar-primary-foreground',
                                'bg-awesome',
                            )"
                            class="flex aspect-square size-8 items-center justify-center rounded-lg"
                        >
                            <Icon
                                class="text-white"
                                name="simple-icons:shadcnui"
                            />
                        </div>
                        <div class="grid flex-1 text-left text-sm leading-tight">
                            <span class="truncate font-semibold">Shadcn/ui Hub</span>
                            <span class="truncate text-xs">Component & Resource Collection</span>
                        </div>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>Categories</SidebarGroupLabel>
                <SidebarMenu>
                    <SidebarMenuItem
                        v-for="item in categories"
                        :key="item.name"
                    >
                        <SidebarMenuButton as-child>
                            <NuxtLink
                                :href="item.url"
                                :title="item.name"
                            >
                                <Icon :name="item.icon" />
                                <span>{{ item.name }}</span>
                            </NuxtLink>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>
            <SidebarGroup>
                <SidebarGroupLabel>Platform</SidebarGroupLabel>
                <SidebarMenu>
                    <SidebarMenuItem
                        v-for="item in platform"
                        :key="item.name"
                    >
                        <SidebarMenuButton as-child>
                            <NuxtLink
                                :href="item.link"
                                target="_blank"
                            >
                                <Icon
                                    :class="cn(
                                        `text-${item.color}`,
                                    )"
                                    name="simple-icons:shadcnui"
                                />
                                <span>{{ item.name }}</span>
                            </NuxtLink>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
            <div class="flex justify-between items-center">
                <Icon name="line-md:github-loop" />
                <Button>
                    <Icon name="line-md:github-loop" />
                    Submit
                </Button>
            </div>
        </SidebarFooter>
    </Sidebar>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import { categories } from '~/constant/categories'

const platform = [
    {
        name: 'shadcn/ui',
        link: 'https://ui.shadcn.com',
        color: 'react',
    },
    {
        name: 'shadcn/ui vue',
        link: 'https://shadcn-vue.com',
        color: 'vue',
    },
]
</script>
