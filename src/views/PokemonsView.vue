<script setup>
import { useFetchData } from '@/composables/fetchData'

const { data, fetchData } = useFetchData()

fetchData('https://pokeapi.co/api/v2/pokemon');

</script>
<template>
    <div class="my-5 container">
      <div class="d-flex flex-wrap">
      <div class="card m-3 p-2" v-for="(pokemon, index) in data.results" :key="index">
        <router-link :to="`/pokemons/${pokemon.name}`" class="text-danger text-decoration-none">
        <div class="card-body text-capitalize">
          <h4>{{pokemon.name}}</h4>
        </div>
      </router-link>
      </div>
    </div>
  </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>