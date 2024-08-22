<script setup lang="ts">
import '@splidejs/vue-splide/css'

const props = defineProps(['photos'])
const photos = props.photos

console.log(props.photos)
console.log(photos)
</script>
<template>
  <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
    <SplideSlide v-for="(photo, index) in photos" :key="index">
      <img
        :src="photo"
        alt="business-photo"
        width="850"
        height="450"
        priority
        class="w-full h-[450px] rounded-lg object-cover"
      />
    </SplideSlide>
  </Splide>
</template>
