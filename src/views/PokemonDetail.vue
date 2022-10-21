<script setup>
import { useRoute, useRouter} from 'vue-router'
import { useFetchData } from '@/composables/fetchData'


const ruta = useRouter();

const pokemonName = useRoute();

const { data, error, loading, fetchData } = useFetchData()
fetchData(`https://pokeapi.co/api/v2/pokemon/${pokemonName.params.id}`);


let getMovementName = (move) => {
  return move.replace('-', ' ')
}
</script>

<template>
  <div v-if="loading" class="spinner-border text-warning" role="status">
</div>
<div v-else-if="error">
  <h3 class="text-center mt-5">Ese Pokémon no existe...</h3>
  <div class="text-center">
      <button class="btn btn-primary" @click="ruta.push('/pokemons')">Volver</button>
    </div>
</div>
<div v-else>
    <img :src="data.sprites.front_default" class="d-block mx-auto"/>
    <h3 class="text-capitalize text-center">{{pokemonName.params.id}}</h3>
    <div>
    <div class="text-center">
      <button class="btn btn-primary" @click="ruta.push('/pokemons')">Volver</button>
    </div>
    <div class="card bg-light w-50 d-block mx-auto mt-3 p-4">
      <h4>Apariencia</h4>
      <small>Altura</small> {{ data.height }}
      <small>Peso</small> {{ data.weight }}
      <small>Experiencia</small> {{ data.base_experience }}
    </div>
    <div class="card bg-light w-50 d-block mx-auto mt-3 mb-5 p-4">
      <h4>Movimientos</h4>
      <span v-for="(move, index) in data.moves" class="text-capitalize" :key="index">{{getMovementName(move.move.name)}}, </span>
    </div>
  </div>
</div>
</template>

<style scoped>
</style>
