<script setup lang="ts">
import { defineProps } from 'vue'
import Badge from '../ui/badge/Badge.vue'
import Avatar from '../ui/avatar/Avatar.vue'
import AvatarImage from '../ui/avatar/AvatarImage.vue'
import AvatarFallback from '../ui/avatar/AvatarFallback.vue'

import { GanttChartSquare } from 'lucide-vue-next'
import type { ReviewsDataI } from '@/types'
import StarRating from '../StarRating.vue'

defineProps<{
  reviewsData: ReviewsDataI
}>()
</script>

<template>
  <div class="w-full p-8 border bg-white rounded-md">
    <Badge variant="default" class="w-[150px] bg-[#15256b]"> <GanttChartSquare /> Reviews </Badge>
    <div>
      <div v-if="!reviewsData" class="text-slate-500 mt-[8px]">No reviews for this business</div>
      <div v-else>
        <div v-for="(review, index) in reviewsData.reviews" :key="index" class="p-4">
          <div class="flex items-center gap-x-2">
            <Avatar>
              <AvatarImage :src="review.user?.image_url" />
              <AvatarFallback class="text-slate-500">
                {{ review.user?.name }}
              </AvatarFallback>
            </Avatar>
            <p class="text-slate-500">{{ review.time_created }}</p>
          </div>
          <div class="flex items-center">
            <StarRating :rating="review.rating" />
          </div>
          <p class="text-slate-500">{{ review.text }}</p>
          <a :href="review.url" class="text-slate-500 mt-[7px] hover:text-slate-700 cursor-pointer">
            See full review
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
