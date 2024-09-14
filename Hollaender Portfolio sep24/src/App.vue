<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
     <nav>
        <RouterLink to="/" class="hover:underline">home</RouterLink>
        <RouterLink to="/about" class="hover:underline">about</RouterLink>
      </nav>

  </header>

  <RouterView />
</template>

