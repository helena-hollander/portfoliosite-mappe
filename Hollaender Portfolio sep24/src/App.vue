<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
     <nav class="grid fixed font-display text-3xl h-screen grid-rows-12 p-4">
        <RouterLink to="/" class="hover:underline row-start-3 row-end-4 self-end">work</RouterLink>
        <RouterLink to="/about" class="hover:underline row-start-4 row-end-5 self-center">about</RouterLink>
        <RouterLink to="/contact" class="hover:underline row-start-5 row-end-6">contact</RouterLink>
      </nav>

  </header>

  <RouterView />
</template>

