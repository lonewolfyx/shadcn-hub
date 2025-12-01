<template>
    <div class="relative">
        <div class="flex flex-wrap items-center lg:items-end justify-between gap-5 py-4">
            <AppHeader
                description="Overview of all team members and roles."
                title="Libraries & Components"
            />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <RegisterApp
                v-for="item in Array.from({ length: 20 }, (_, i) => i+1)"
                :key="item"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>
