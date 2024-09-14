<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
     <nav>
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/about">about</RouterLink>
      </nav>

  </header>

  <RouterView />
</template>

