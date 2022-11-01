<template>
    <div class="category-card">
        <img src="" alt="">
        <h1 class="card-title">بالش شیردهی کاور شیردهی</h1>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.category-card {
    min-width: 136px;
    min-height: 180px;
    @apply flex flex-col items-center bg-gray-100 p-5 rounded-md cursor-pointer;
    img {
        @apply w-16 h-16 bg-red-400 mb-4 rounded-full;
    }
    .card-title{
        @apply text-center text-sm;
        font-family: IRANYekanMedium;
    }
}
</style>