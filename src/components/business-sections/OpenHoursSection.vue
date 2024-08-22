<script setup lang="ts">
import { defineProps } from 'vue'
import { Clock4 } from 'lucide-vue-next'

import { formatTime, getDayName } from '../../lib/formatDayTime'
import type { BusinessHoursI } from '@/types'
import Badge from '../ui/badge/Badge.vue'

defineProps<{
  openHours: BusinessHoursI[]
}>()

const formatT = (time: any) => formatTime(time)
const getDay = (day: any) => getDayName(day)
</script>

<template>
  <div class="flex flex-col w-full p-8 border bg-white rounded-md h-[400px]">
    <Badge variant="default" class="w-[150px] bg-[#15256b]"> <Clock4 /> Open Hours </Badge>
    <p v-if="!openHours" class="mt-[5px] text-slate-500">No open hours available</p>
    <table v-else class="w-full text-left border-collapse">
      <thead>
        <tr>
          <th class="text-slate-500 px-4 py-2 border-b">Days</th>
          <th class="text-slate-500 px-4 py-2 border-b">Open Hours</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(day, index) in openHours[0].open" :key="index">
          <td class="font-medium text-slate-500 px-4 py-2 border-b">
            {{ getDay(day.day) }}
          </td>
          <td class="text-slate-500 px-4 py-2 border-b">
            {{ formatT(day.start) }} - {{ formatT(day.end) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
