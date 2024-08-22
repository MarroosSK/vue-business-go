<script setup lang="ts">
import { reactive, ref } from 'vue'
import { getBusinesses } from '@/actions/get-businesses'
import SearchBusiness from '@/components/SearchBusiness.vue'
import BusinessList from '@/components/BusinessList.vue'

const searchData = reactive({ term: '', location: '' })

const businesses = ref([])
const isLoading = ref(false)
const hasSearched = ref(false)

const handleSubmit = async () => {
  try {
    isLoading.value = true
    hasSearched.value = true

    if (searchData.term) {
      const data = await getBusinesses({ term: searchData.term, location: searchData.location })
      businesses.value = data || []
    } else {
      businesses.value = []
    }
  } catch (error) {
    console.error('error', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="relative">
    <SearchBusiness
      v-model:termValue="searchData.term"
      v-model:locationValue="searchData.location"
      @submit="handleSubmit"
    />

    <div v-if="isLoading" class="flex items-center justify-center py-10 text-[#15256b] text-lg">
      Loading...
    </div>

    <div v-if="!isLoading && businesses.length">
      <BusinessList :businesses="businesses" />
    </div>
    <div
      v-if="!isLoading && hasSearched && businesses.length === 0"
      class="flex items-center justify-center py-10 text-[#15256b] text-lg"
    >
      No data found
    </div>
    <div
      v-if="!isLoading && !hasSearched"
      class="flex items-center justify-center py-10 text-[#15256b] text-lg"
    >
      Make sure to type in both fields...
    </div>
  </div>
</template>
