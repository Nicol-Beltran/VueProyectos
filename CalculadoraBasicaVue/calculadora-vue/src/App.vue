<template>
  <div>
  <h1>Mini herramientas</h1>
  <hr/>

  <MiCalculadora :value=5 />
  <MiCalculadora :value=4 />

  <MiCalculadoraTradicional :numero1=8 :numero2=6 />

</div>
</template>
<script setup lang="ts">
import MiCalculadora from './components/MiCalculadora.vue';
import MiCalculadoraTradicional from './components/MiCalculadoraTradicional.vue';

</script>