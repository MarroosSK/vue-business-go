<script setup lang="ts">
import { computed } from 'vue'
import { Star } from 'lucide-vue-next'

const props = defineProps<{
  rating: number
}>()

const maxStars = 5

const filledStars = computed(() => {
  return Math.floor(props.rating)
})
</script>
<template>
  <div class="flex items-center">
    <template v-for="star in maxStars" :key="star">
      <Star
        :class="{ 'text-[#15256b]': star <= filledStars, 'text-slate-300': star > filledStars }"
        class="w-5 h-5"
      />
    </template>
  </div>
</template>
