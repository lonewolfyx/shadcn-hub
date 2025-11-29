<template>
    <Body
        :class="cn(
            'antialiased flex h-full text-base text-foreground lg:overflow-hidden bg-zinc-100',
            '[--sidebar-width:15rem]',
            '[--header-height:3.75rem]',
            'no-scrollbar',
        )"
    >
        <slot />
    </Body>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
</script>
