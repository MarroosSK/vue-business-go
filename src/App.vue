<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
import { RouterView } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue'
</script>

<template>
  <Toaster />
  <AppNavbar />
  <RouterView />
</template>
