<script setup lang="ts">
import { computed } from 'vue'
import Badge from '../ui/badge/Badge.vue'
import { Loader, Star } from 'lucide-vue-next'

const props = defineProps<{
  rating: number | null
}>()

const maxStars = 5
const filledStars = computed(() => {
  if (props.rating === null) return 0
  return Math.floor(props.rating)
})
</script>
<template>
  <div class="flex flex-col p-8 border bg-white rounded-md">
    <Badge variant="default" class="w-[150px] bg-[#15256b]"> <Star /> Rating </Badge>
    <div v-if="rating === null">
      <Loader class="animate-spin" />
    </div>
    <div v-else class="flex items-center">
      <template v-for="star in maxStars" :key="star">
        <Star
          :class="{ 'text-[#15256b]': star <= filledStars, 'text-slate-300': star > filledStars }"
          class="w-5 h-5"
        />
      </template>
      <span class="ml-2 text-slate-500">{{ rating.toFixed(1) }}</span>
    </div>
  </div>
</template>
