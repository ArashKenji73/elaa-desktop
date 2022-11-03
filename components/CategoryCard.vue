<template>
    <div class="category-card">
        <img :src="`${baseURL}/${props.category.picture}`" alt="">
        <h1 class="category-title">{{props.category.name}}</h1>
    </div>
</template>

<script setup>
const props = defineProps(['category'])
const runtimeConfig = useRuntimeConfig()
const baseURL = runtimeConfig.public.apiBase;
</script>

<style lang="scss">
.category-card {
    min-width: 136px;
    min-height: 180px;
    @apply flex flex-col items-center bg-gray-50 py-5 px-2 rounded-md cursor-pointer;

    img {
        @apply w-16 h-16 bg-red-400 mb-4 rounded-full;
    }

    .category-title {
        @apply text-center text-sm leading-6;
        font-family: IRANYekanMedium;
    }
}
</style>