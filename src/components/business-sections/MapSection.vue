<script setup lang="ts">
import OpenMap from '../OpenMap.vue'

defineProps<{
  longitude: number
  latitude: number
  name: string
}>()
</script>

<template>
  <div className="z-20 p-8 border bg-white rounded-md h-[400px]">
    <OpenMap :lon="longitude" :lat="latitude" :name="name" />
  </div>
</template>
