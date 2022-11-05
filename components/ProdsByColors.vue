<template>
    <div class="sales-by-color-bg">
        <div class="slider container">
            <h1 class="title">سیسمونی بر اساس رنگ</h1>
            <template v-if="pending">
                <div class="scrolling-wrapper">
                    <div class="loading">
                        <template v-for="(category, i) in 12">
                            <prod-card-loading />
                        </template>
                    </div>
                </div>
            </template>
            <div v-if="!pending && error">
                error !
                <button @click.prevent="load">Load post</button>
            </div>
            <div class="scrolling-wrapper" v-if="!pending && !error">
                <div class="flex gap-2">
                    <!-- <pre>{{ data.availableColors }}</pre> -->
                    <template v-for="(color, i) in data.availableColors">
                        <div class="color-icon" :style="{ background: `#${color.hex_code}` }"></div>
                    </template>
                </div>
                <div id="scroll-prod-color">
                    <template v-for="(prod, i) in data.picture3ds">
                        <prod-card :prod="prod" />
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { getColors } from '@/API.js'
const runtimeConfig = useRuntimeConfig()
const { data, pending, error } = await useLazyFetch(getColors, {
    baseURL: runtimeConfig.public.apiBase,
})

onMounted(() => {
    // const scrollContainer = document.getElementById("scroll");

    // scrollContainer.addEventListener("wheel", (evt) => {
    //     evt.preventDefault();
    //     scrollContainer.scrollLeft += evt.deltaY;
    // });


    const slider = document.getElementById('scroll-prod-color');
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
            @apply flex gap-4 overflow-x-hidden overflow-y-hidden transition-all duration-300;
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