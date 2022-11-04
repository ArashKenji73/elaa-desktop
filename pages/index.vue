<template>
  <div>
    <the-banner />
    <Upv />
    <the-category-slider />
    <top-sales-slider />

    <div class="sales-section">
      <h2>تخفیف ویژه آخر فصل</h2>
      <h2>تا %۴۰ تخفیف</h2>
    </div>

    <top-sales-slider />
    <top-sales-slider />
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "custom",
});
</script>

<style lang="scss" scoped>
.sales-section{
  @apply flex flex-col gap-2 items-center justify-center w-full h-44 container mb-32 rounded-lg text-3xl text-white;
  background: url("@/assets/images/hobbby.svg");
  background-size: cover;
  background-position: center; 
  font-family: IRANYekanBold;
}
</style>