<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps({
  termValue: String,
  locationValue: String
})

const emit = defineEmits(['update:termValue', 'update:locationValue', 'submit'])

const updateTerm = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:termValue', target.value)
}

const updateLocation = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:locationValue', target.value)
}

const handleSubmit = () => {
  emit('submit')
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="py-[10px] flex flex-col items-center">
    <div class="flex flex-col sm:flex-row items-center gap-3 py-4">
      <input
        type="text"
        :value="termValue"
        @input="updateTerm"
        placeholder="e.g: food, cars"
        class="outline-none p-2 text-[#15256b] font-bold border border-[#15256b] rounded-md"
        required
      />
      <input
        type="text"
        :value="locationValue"
        @input="updateLocation"
        placeholder="Location"
        class="outline-none p-2 text-[#15256b] font-bold border border-[#15256b] rounded-md"
        required
      />
      <button
        type="submit"
        class="p-2 bg-[#15256b] hover:bg-[#15256b]/75 text-[#31e4ff] rounded-md"
      >
        Search
      </button>
    </div>
  </form>
</template>
