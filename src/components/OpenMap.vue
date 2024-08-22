<script setup lang="ts">
import { defineProps, ref, watch } from 'vue'
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
import L from 'leaflet'
import icon from '@/assets/icon.png'

const props = defineProps<{
  lon: number
  lat: number
  name: string
}>()

const zoom = 12
const center = ref<L.PointExpression>([props.lat, props.lon])
const position = ref<L.LatLngExpression>([props.lat, props.lon])

const customIcon = new L.Icon({
  iconUrl: icon,
  iconSize: [25, 35],
  iconAnchor: [5, 30]
})

watch(
  () => [props.lat, props.lon],
  ([lat, lon]) => {
    center.value = [lat, lon] as L.PointExpression
    position.value = [lat, lon] as L.LatLngExpression
  }
)
</script>

<template>
  <div class="w-full">
    <l-map :zoom="zoom" :center="center" style="height: 325px; width: 100%">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <l-marker :lat-lng="position" :icon="customIcon">
        <l-popup>{{ name }}</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}

main {
  height: 100vh;
  width: 100vw;
}
</style>
