<template>
    <div class="prod-card">
        <img class="prod-image" :src="`${baseURL}/${props.prod.picture}`" alt="">
        <div class="prod-info">
            <h1 class="prod-title">{{ props.prod.finalName }}</h1>
            <div class="flex flex-row-reverse items-center justify-between">
                <div class="flex flex-col items-end">
                    <div v-if="props.prod.product.isOnSale" class="prod-old-price">{{finalOldPriceSeparators}}</div>
                    <div class="prod-price">{{finalPriceSeparators}}</div>
                </div>
                
                <div v-if="props.prod.product.isOnSale" class="off-percent">20%</div>
            </div>
        </div>

        <!-- <div class="price"></div>
        <div class="off-percent"></div> -->
    </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['prod'])
const runtimeConfig = useRuntimeConfig()
const baseURL = runtimeConfig.public.apiBase;
const finalPriceSeparators = computed(() => props.prod.finalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + ' تومان ')
const finalOldPriceSeparators = computed(() => props.prod.finalOldPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + ' تومان ')
</script>

<style lang="scss">
.prod-card {
    min-width: 288px;
    min-height: 400px;
    @apply flex flex-col border border-gray-200 rounded-md cursor-pointer overflow-hidden;

    .prod-image {
        @apply w-auto h-72 object-cover object-center;
    }

    .prod-info {
        @apply flex flex-col justify-between flex-grow p-4;

        .prod-title{
            @apply text-sm;
            font-family: IRANYekanMedium;
        }
        .prod-price{
            font-family: IRANYekanExtraBoldFaNum;
            @apply text-lg text-gray-600;
        }
        .prod-old-price{
            @apply line-through text-gray-500;
            font-family: IRANYekanMedium;
        }
        .off-percent{
            font-family: IRANYekanMedium;
            @apply flex justify-center items-center text-sm text-elaa-violet w-10 h-10 bg-elaa-light-violet border border-elaa-violet rounded-full
        }
    }

}
</style>