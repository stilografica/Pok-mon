<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <RouterLink class="navbar-brand mx-3" to="/">    <img alt="Pokemon logo" class="pl-2 mt-4" src="@/assets/logo.png" width="200"  />
  </RouterLink>
  <div class="collapse navbar-collapse mt-4" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <RouterLink to="/" class="btn">Inicio</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/pokemons" class="btn">Pokemons</RouterLink>
      </li>
    </ul>
  </div>
</nav>
  <RouterView />
</template>

<style scoped>
</style>
