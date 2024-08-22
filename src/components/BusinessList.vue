<script setup lang="ts">
import placeholderImg from '@/assets/placeholder.jpg'

defineProps({
  businesses: Object
})
</script>

<template>
  <div class="relative container flex flex-col items-center gap-y-3 min-h-screen">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <div v-for="(business, index) in businesses" :key="index">
        <a :href="`/business/${business?.id}`" target="_blank" rel="noopener noreferrer">
          <div className="relative h-[230px] sm:h-[280px]  w-full overflow-hidden">
            <img
              :src="business?.image_url || placeholderImg"
              alt="Business Image"
              className="h-[230px] sm:h-[280px]  w-full transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
            />
            <div
              className="flex flex-col  gap-[10px] absolute top-2 right-2 text-sm bg-white text-[#15256b] border border-[#15256b] p-2 rounded-md z-[30px]"
            >
              {{ business.name }}
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
