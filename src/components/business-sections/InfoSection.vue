<script setup lang="ts">
import { MapPin, Phone } from 'lucide-vue-next'
import Badge from '../ui/badge/Badge.vue'

defineProps<{
  location: String
  city: String
  phoneNumber: String
}>()
</script>

<template>
  <div class="flex flex-col gap-y-4 p-8 border bg-white rounded-md">
    <div class="flex flex-col">
      <Badge variant="default" class="w-[150px] bg-[#15256b]"> <MapPin /> Address </Badge>
      <p class="mt-[5px] text-slate-500">{{ location }}, {{ city }}</p>
    </div>

    <div class="flex flex-col">
      <Badge variant="default" class="w-[150px] bg-[#15256b]"> <Phone /> Phone </Badge>
      <p class="mt-[5px] text-slate-500">
        {{ phoneNumber || 'No phone number available' }}
      </p>
    </div>
  </div>
</template>
