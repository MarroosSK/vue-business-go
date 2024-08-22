<script setup lang="ts">
import { useFavoritesStore } from '@/stores/useFavoriteStore'
import { Heart, X } from 'lucide-vue-next'
import { computed } from 'vue'
import { toast } from 'vue-sonner'

const props = defineProps({
  businessData: {
    type: Object,
    required: true
  }
})
const favoritesStore = useFavoritesStore()

const isFavorite = computed(() => {
  if (!props.businessData || !props.businessData.id) return false
  return favoritesStore.favorites.some((business) => business.id === props.businessData.id)
})

function addBusinessToFavorites() {
  if (props.businessData) {
    favoritesStore.addFavorite(props.businessData)
    toast.success('Place got added')
  }
}

function removeBusinessFromFavorites() {
  if (props.businessData && props.businessData.id) {
    favoritesStore.removeFavorite(props.businessData.id)
    toast.success('Place got removed')
  }
}
</script>

<template>
  <div>
    <Heart
      v-if="!isFavorite"
      fill="#15256b"
      @click="addBusinessToFavorites"
      class="text-[#15256b]"
    />
    <X v-else @click="removeBusinessFromFavorites" class="text-[#15256b]" />
  </div>
</template>
