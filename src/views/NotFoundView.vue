<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import image from '@/assets/404.jpg'

const route = useRouter();
const placeholder = computed(() => {
    return image
})

</script>

<template>
<img class="d-block mx-auto" :src="placeholder"/>
<h3 class="text-center">Página no encontrada</h3>
<div class="text-center">
    <button class="btn btn-primary" @click="route.push('/')">Quiero Volver</button>
</div>
</template>

<style scoped>
</style>