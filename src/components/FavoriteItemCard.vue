<script setup lang="ts">
import { X } from 'lucide-vue-next'
import { defineProps } from 'vue'
import { useFavoritesStore } from '@/stores/useFavoriteStore'
import { toast } from 'vue-sonner'

defineProps<{
  business: {
    id: number
    image_url?: string
    name: string
  }
}>()

const favoritesStore = useFavoritesStore()

const removeFavorite = (id: number) => {
  favoritesStore.removeFavorite(id as number)
  toast.success('Place got removed')
}
</script>
<template>
  <div class="relative h-[250px] sm:h-[320px] overflow-hidden">
    <a :href="`/business/${business?.id}`" target="_blank">
      <img
        :src="business?.image_url || '/placeholder.jpg'"
        alt="Business Image"
        className="h-[250px] sm:h-[320px]  w-full transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
      />
    </a>
    <div
      className="flex flex-col  gap-[10px] absolute top-2 right-2 text-sm bg-white text-[#15256b] border border-[#15256b] p-2 rounded-md z-[30px]"
    >
      {{ business.name }}
    </div>
    <div class="flex flex-col items-center gap-y-2 absolute top-14 right-2 z-[30px]">
      <a :href="`/business/${business?.id}`" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 29 29"
          fill="none"
          class="flex items-center justify-center gap-[8px] text-[15px] -rotate-[90deg] w-[33px] h-[33px] p-[7px] bg-[#15256b] rounded-full"
        >
          <path
            d="M22.6379 1.68188C23.2552 1.68226 23.8472 1.92766 24.2837 2.36418C24.7202 2.80069 24.9656 3.39262 24.966 4.00994L24.966 22.6784C24.9656 23.2957 24.7202 23.8877 24.2837 24.3242C23.8472 24.7607 23.2552 25.0061 22.6379 25.0065L3.96944 25.0065C3.36618 24.9848 2.7948 24.7302 2.3754 24.296C1.956 23.8619 1.72123 23.2821 1.72043 22.6784C1.72123 22.0748 1.956 21.4949 2.3754 21.0608C2.79481 20.6266 3.36618 20.372 3.96943 20.3503L17.0154 20.3503L0.675002 4.00994C0.238132 3.57307 -0.00729571 2.98055 -0.00729703 2.36273C-0.00729566 1.7449 0.238133 1.15238 0.675002 0.715508C1.11187 0.278639 1.7044 0.0332108 2.32222 0.0332088C2.94005 0.0332095 3.53257 0.278639 3.96944 0.715508L20.3098 17.0559L20.3098 4.00994C20.3102 3.39262 20.5556 2.80069 20.9921 2.36418C21.4286 1.92766 22.0206 1.68226 22.6379 1.68188Z"
            fill="white"
          />
        </svg>
      </a>
      <X
        class="cursor-pointer flex items-center justify-center gap-[8px] text-[15px] -rotate-[90deg] w-[33px] h-[33px] p-[7px] bg-red-500 text-white rounded-full"
        @click="removeFavorite(business?.id)"
      />
    </div>
  </div>
</template>
