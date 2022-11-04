<template>
    <div class="category-card">
        <img :src="`${baseURL}/${props.category.picture}`" alt="">
        <h1 class="category-title">{{props.category.name}}</h1>
    </div>
</template>

<script setup>
//import { computed } from 'vue'
const props = defineProps(['category'])
const runtimeConfig = useRuntimeConfig()
const baseURL = runtimeConfig.public.apiBase;
const limitChar = 34

// const shortenName = computed(() => {
//     if (props.category.name) {
//         if (props.category.name.length > limitChar) {
//           return props.category.name.substr(0, limitChar) + " ...";
//         } else {
//           return props.category.name;
//         }
//       }else{
//         if (props.category.name > limitChar) {
//           return props.category.name.substr(0, limitChar) + " ...";
//         } else {
//           return props.category.name;
//         }
//       }
//     }
// )
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
        font-family: IRANYekanBold;
    }
}
</style>