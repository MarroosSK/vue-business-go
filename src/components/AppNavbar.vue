<script setup lang="ts">
import { Menu } from 'lucide-vue-next'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const isActiveLink = (routePath: string) => {
  return route.path === routePath
}
</script>
<template>
  <nav class="relative w-[100%] container p-5 h-[80px] flex items-center justify-between px-5">
    <RouterLink to="/" class="hidden sm:flex">
      <h2 class="text-lg md:text-2xl font-semibold md:text-[25px] text-[#31e4ff] tracking-widest">
        Business<span class="text-[#15256b] font-bold">GO</span>
      </h2>
    </RouterLink>
    <RouterLink to="/" class="flex sm:hidden">
      <h2 class="text-lg md:text-2xl md:text-[25px] text-[#15256b] font-bold tracking-widest">
        GO
      </h2>
    </RouterLink>
    <div class="flex items-center gap-x-2 md:gap-x-4">
      <RouterLink
        :class="[
          isActiveLink('/business') ? 'text-[#31e4ff]' : 'text-[#15256b] hover:text-[#15256bbd]',
          'text-sm md:text-lg font-bold  md:ml-2'
        ]"
        to="/business"
      >
        Business
      </RouterLink>
      <RouterLink
        :class="[
          isActiveLink('/my-places') ? 'text-[#31e4ff]' : 'text-[#15256b] hover:text-[#15256bbd]',
          'text-sm md:text-lg font-bold  md:ml-2'
        ]"
        to="/my-places"
      >
        My Places
      </RouterLink>
    </div>
  </nav>
</template>
