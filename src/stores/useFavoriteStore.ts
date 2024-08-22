import { defineStore } from 'pinia'

// get localData
function getFromLocalStorage(key: string) {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : []
}

interface FavoriteState {
  favorites: any[]
}

export const useFavoritesStore = defineStore('favorites', {
  state: (): FavoriteState => ({
    favorites: getFromLocalStorage('favorites')
  }),

  actions: {
    addFavorite(business: any) {
      this.favorites.push(business)
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },

    removeFavorite(id: number) {
      this.favorites = this.favorites.filter((business) => business.id !== id)
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    }
  }
})
