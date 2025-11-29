<template>
    <SiteBody>
        <SidebarProvider>
            <SiteSidebar />
            <SidebarInset class="bg-muted flex flex-col grow pt-(--header-height) lg:pt-0">
                <div
                    :class="cn(
                        'flex flex-col grow items-stretch',
                        'rounded-xl',
                        'bg-background',
                        'border border-input',
                        'mt-0 lg:mt-4 m-4',
                        'overflow-y-scroll',
                        'no-scrollbar',
                    )"
                >
                    <div class="flex flex-col grow p-2.5 break-all">
                        <main
                            class="grow"
                            role="content"
                        >
                            <div class="w-full grow">
                                <NuxtPage />
                            </div>
                        </main>
                    </div>
                </div>
                <div class="mx-4 mb-8">
                    <div class="flex justify-between items-center">
                        <span class="text-xs font-medium text-muted-foreground">Create by <NuxtLink
                            target="_blank"
                            to="https://github.com/lonewolfyx"
                        >lonewolfyx</NuxtLink></span>
                        <div class="flex items-center gap-4">
                            <span
                                class="text-xs font-medium text-muted-foreground"
                            >Build with NuxtJs & shadcn/ui vue</span>
                            <span class="text-xs font-medium text-muted-foreground">·</span>
                            <span class="text-xs font-medium text-muted-foreground">Powered by GitHub & Vercel</span>
                        </div>
                    </div>
                </div>
            </sidebarinset>
        </SidebarProvider>
    </SiteBody>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import { SidebarInset, SidebarProvider } from '~/components/ui/sidebar'
import SiteSidebar from '~/components/SiteSidebar.vue'

useSeoMeta({
    title: 'shadcn awesome hub',
})
</script>
