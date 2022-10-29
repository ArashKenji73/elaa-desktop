<template>
  <div>

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

</style>