<template>
    <div class="flex flex-col justify-center gap-2">
        <span class="font-mono font-medium text-xl leading-none">{{ title }}</span>
        <div class="flex items-center gap-2 text-sm font-normal text-secondary-foreground">
            {{ description }}
        </div>
    </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
    title: string
    description?: string
}>(), {
    description: '',
})
</script>
