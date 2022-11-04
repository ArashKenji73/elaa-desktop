<template>
    <div>
        <div class="category-pattern"></div>
        <div class="slider container">
            <h1 class="title">دسته بندی ها</h1>
            <template v-if="pending">
                <div class="scrolling-wrapper">
                    <div class="loading">
                        <template v-for="(category,i) in 12">
                            <category-card-loading />
                        </template>
                    </div>
                </div>
            </template>
            <div v-if="!pending && error">
                error !
                <button @click.prevent="load">Load post</button>
            </div>
            <div class="scrolling-wrapper" v-if="!pending && !error">
                <div id="scroll">
                    <template v-for="(category,i) in data.categories">
                        <category-card :category="category"/>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import {getCategories} from '@/API.js'
const runtimeConfig = useRuntimeConfig()
const { data, pending, error, refresh } = await useLazyFetch(getCategories,{
    baseURL: runtimeConfig.public.apiBase,
})

const load = () => {
  refresh()
}

onMounted(() => {
    // const scrollContainer = document.getElementById("scroll");

    // scrollContainer.addEventListener("wheel", (evt) => {
    //     evt.preventDefault();
    //     scrollContainer.scrollLeft += evt.deltaY;
    // });


    const slider = document.getElementById('scroll');
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
.category-pattern {
    @apply w-full h-56 -mb-36;
    background-image: url('~/assets/images/saw-pattern.svg');
}

.slider {
    @apply flex flex-col gap-4 mb-20;

    .title {
        font-family: IRANYekanExtraBoldFaNum;
        @apply text-xl;
    }

    .scrolling-wrapper {
        @apply p-4 bg-white rounded-lg border-2 border-elaa-light-violet;
        #scroll,.loading{
            @apply flex gap-4 overflow-x-hidden overflow-y-hidden transition-all duration-300;
        }
    }
}


</style>