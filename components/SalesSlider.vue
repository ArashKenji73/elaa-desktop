<template>
    <div>
        <div class="slider container">
            <h1 class="title">حراجستون</h1>
            <template v-if="pending">
                <div class="scrolling-wrapper">
                    <div class="loading">
                        <template v-for="(category,i) in 12">
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
                <div id="scroll-sales">
                    <template v-for="(prod,i) in data.picture3ds">
                        <prod-card :prod="prod"/>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import {getSales} from '@/API.js'
const runtimeConfig = useRuntimeConfig()
const { data, pending, error } = await useLazyFetch(getSales,{
    baseURL: runtimeConfig.public.apiBase,
})

onMounted(() => {
    // const scrollContainer = document.getElementById("scroll");

    // scrollContainer.addEventListener("wheel", (evt) => {
    //     evt.preventDefault();
    //     scrollContainer.scrollLeft += evt.deltaY;
    // });


    const slider = document.getElementById('scroll-sales');
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

<style lang="scss">
.slider {
    @apply flex flex-col gap-4 mb-32;

    .title {
        font-family: IRANYekanExtraBoldFaNum;
        @apply text-xl;
    }

    .scrolling-wrapper {
        @apply p-4 bg-white rounded-lg border-2 border-elaa-light-violet;
        #scroll-sales{
            @apply flex gap-4 overflow-x-hidden overflow-y-hidden transition-all duration-300;
        }
    }
}
</style>