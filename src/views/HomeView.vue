<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import image from '@/assets/pokeapi.png'

const route = useRouter();
const placeholder = computed(() => {
    return image
})
</script>

<template>
  <main class="bg-danger py-5">
    <div class="my-5 py-5">
      <h1 class="text-center text-white">Jugando con Vue3 y con la...</h1>
      <img class="d-block mx-auto mt-3" :src="placeholder"/>
      <div class="text-center mt-4">
    <button class="btn btn-warning" @click="route.push('pokemons')">Descúbre los Pokémon</button>
    </div>
    </div>
  </main>
</template>
