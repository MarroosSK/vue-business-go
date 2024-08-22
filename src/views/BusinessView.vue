<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { getBusiness } from '@/actions/get-business'
import { getReviews } from '@/actions/get-reviews'
import FavoriteSection from '@/components/business-sections/FavoriteSection.vue'
import GallerySection from '@/components/business-sections/GallerySection.vue'
import OpenHoursSection from '@/components/business-sections/OpenHoursSection.vue'
import InfoSection from '@/components/business-sections/InfoSection.vue'
import MapSection from '@/components/business-sections/MapSection.vue'
import RatingSection from '@/components/business-sections/RatingSection.vue'
import ReviewsSection from '@/components/business-sections/ReviewsSection.vue'
import type { ReviewsDataI } from '@/types'
import { Loader2 } from 'lucide-vue-next'

const businessData = ref<any | null>(null)
const reviewsData = ref<ReviewsDataI>()

const route = useRoute()

onMounted(async () => {
  const id = route.params.id
  const [businessResponse, reviewsResponse] = await Promise.all([
    getBusiness(id as string),
    getReviews(id as string)
  ])

  businessData.value = businessResponse
  reviewsData.value = reviewsResponse
  console.log(businessData.value)
})
</script>

<template>
  <div v-if="businessData" class="relative container flex flex-col space-y-4 py-2 pb-4">
    <div class="flex items-center gap-x-2">
      <h5 class="text-2xl font-bold text-[#15256b]">{{ businessData.name }}</h5>
      <!-- FAVORITE -->
      <FavoriteSection :businessData="businessData" />
    </div>
    <!-- GALLERY -->
    <GallerySection :photos="businessData.photos" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <!-- OPEN HOURS -->
      <OpenHoursSection :openHours="businessData?.hours" />
      <div class="flex flex-col gap-2">
        <!-- INFO -->
        <InfoSection
          :location="businessData?.location.address1"
          :city="businessData?.location.city"
          :phoneNumber="businessData?.display_phone"
        />
        <RatingSection :rating="businessData?.rating" />
      </div>
    </div>
    <!-- MAP -->
    <MapSection
      :longitude="businessData?.coordinates?.longitude"
      :latitude="businessData?.coordinates?.latitude"
      :name="businessData?.name"
    />
    <div v-if="reviewsData">
      <!-- REVIEWS -->
      <ReviewsSection :reviewsData="reviewsData" />
    </div>
  </div>
  <div v-else class="flex items-center justify-center h-screen mx-auto">
    <Loader2 class="animate-spin" />
  </div>
</template>
