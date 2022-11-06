<template>
    <div class="sales-by-color-bg">
        <div class="slider container">
            <h1 class="title">سیسمونی بر اساس رنگ</h1>
            <div class="flex gap-2 mb-4">
                <!-- <pre>{{ data.availableColors }}</pre> -->
                <template v-for="(color, i) in data.availableColors">
                    <div class="color-icon" :style="{ background: `#${color.hex_code}` }"
                        @click="changeColor(color.id)"></div>
                </template>
            </div>
            <div class="scrolling-wrapper">
                <div id="scroll-prod-color">
                    <template v-if="loading">
                        <prod-card-loading v-for="(prod,i) in 12" />
                    </template>
                    <template v-else>
                        <template v-for="(prod,i) in prods.picture3ds">
                            <prod-card :prod="prod"/>
                        </template>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getColors, getProdsByColorID } from '@/API.js'
const runtimeConfig = useRuntimeConfig()
const { data, pending, error } = await useLazyFetch(getColors, {
    baseURL: runtimeConfig.public.apiBase,
})

let defaultColorID = ref(null)
let loading = ref(false)
defaultColorID = data.value.availableColors[0].id
//console.log(defaultColorID);

const { data: prods } = await useLazyFetch(getProdsByColorID(defaultColorID), {
    baseURL: runtimeConfig.public.apiBase,
})

function scroll() {
    const slider = document.getElementById('scroll-prod-color');
    slider.scrollLeft = slider.scrollWidth;
    let isDown = false;
    let startX;
    let scrollLeft;


    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        //slider.style.transform = "scale(1.015)";
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
        //slider.style.transform = "scale(1)";
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
}

async function changeColor(colorID) {
    resetScroll();
    this.loading = true
    const data = await $fetch(runtimeConfig.public.apiBase + getProdsByColorID(colorID), { method: 'GET', })
    this.loading = false;
    this.prods = data;
}

function resetScroll() {
    const slider = document.getElementById('scroll-prod-color');
    slider.scrollLeft = slider.scrollWidth;
}

onMounted(() => {
    scroll()
})
</script>

<style lang="scss" scoped>
.sales-by-color-bg {
    @apply py-16;
    background-image: url('~/assets/images/ProdByColor.svg');
    background-size: cover;
    background-position: center;
}

.slider {
    @apply flex flex-col gap-4 bg-white mb-0 p-8 rounded-md;

    .title {
        font-family: IRANYekanExtraBoldFaNum;
        @apply text-xl;
    }

    .scrolling-wrapper {
        @apply p-0 bg-white rounded-lg border-0 border-elaa-light-violet;
        #scroll-prod-color {
            direction: rtl;
            @apply flex flex-row gap-4 overflow-x-hidden overflow-y-hidden transition-all duration-300;
        }
    }
}


.color-icon {
    position: relative;
    width: 32px;
    height: 32px;
    border: 2px solid rgb(243, 243, 243);
    border-radius: 100%;
}
</style>