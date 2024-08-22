<script setup lang="ts">
import FavoriteItemCard from '@/components/FavoriteItemCard.vue'
import { useFavoritesStore } from '@/stores/useFavoriteStore'
import { computed } from 'vue'

const favoritesStore = useFavoritesStore()
const favorites = computed(() => favoritesStore.favorites)
</script>

<template>
  <div class="relative container flex flex-col items-center gap-y-3">
    <div
      v-if="favorites.length === 0"
      class="flex items-center justify-center py-10 text-muted-foreground text-sm"
    >
      No places added to favorites yet.
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <FavoriteItemCard v-for="place in favorites" :key="place.id" :business="place" />
    </div>
  </div>
</template>
