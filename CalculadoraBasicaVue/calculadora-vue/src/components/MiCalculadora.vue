
<template>
  <div class="container my-5">
    <div class="card shadow-lg p-4 rounded-4">
      <h1 class="text-center text-primary mb-4">🧮 Calculadora Básica</h1>
      
      <form @submit.prevent>
        <!-- Número 1 -->
        <div class="mb-3 row">
          <label for="numero1" class="col-sm-3 col-form-label fw-bold">Número uno:</label>
          <div class="col-sm-9">
            <input type="number" class="form-control form-control-lg" id="numero1" v-model="numero1">
          </div>
        </div>

        <!-- Número 2 -->
        <div class="mb-3 row">
          <label for="numero2" class="col-sm-3 col-form-label fw-bold">Número dos:</label>
          <div class="col-sm-9">
            <input type="number" class="form-control form-control-lg" id="numero2" v-model="numero2">
          </div>
        </div>

        <!-- Operadores -->
        <fieldset class="mb-4">
          <legend class="fw-bold">Operador aritmético</legend>
          <div class="d-flex flex-wrap gap-3">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="operador" id="sumar" value="opcionSumar" v-model="operador">
              <label class="form-check-label" for="sumar">➕ Sumar</label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="radio" name="operador" id="restar" value="opcionRestar" v-model="operador">
              <label class="form-check-label" for="restar">➖ Restar</label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="radio" name="operador" id="multiplicar" value="opcionMultiplicar" v-model="operador">
              <label class="form-check-label" for="multiplicar">✖️ Multiplicar</label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="radio" name="operador" id="dividir" value="opcionDividir" v-model="operador">
              <label class="form-check-label" for="dividir">➗ Dividir</label>
            </div>
          </div>
        </fieldset>

        <!-- Resultado -->
        <div class="mb-3 row">
          <label for="resultado" class="col-sm-3 col-form-label fw-bold">Resultado:</label>
          <div class="col-sm-9">
            <input 
              type="text" 
              class="form-control form-control-lg text-center fw-bold"
              :class="{ 'text-danger': resultado === 'Error' }"
              id="resultado" 
              :value="resultado" 
              readonly
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts" >

import {ref, computed} from 'vue';
console.log("hola ")

// const props= defineProps({
//   value:{type: Number, required: true},
// });


interface Props{
  value?: number;
}
 
const props= defineProps<Props>();



const numero1=ref(props.value ?? 10);
const numero2=ref(0);
const operador=ref('');

const sumar=computed(()=> numero1.value + numero2.value)
const restar=computed(()=> numero1.value - numero2.value)
const multiplicar=computed(()=> numero1.value * numero2.value)
const dividir=computed(()=>numero2.value !== 0 ? (numero1.value / numero2.value).toString() : 'Error')

const resultado= computed(()=>{
  switch (operador.value){
    case 'opcionSumar':
      return sumar.value;
    case 'opcionRestar':
      return restar.value;
    case 'opcionMultiplicar':
      return multiplicar.value;
    case 'opcionDividir':
      return dividir.value; 

    default:
      return '';
  }
});

</script>
<style scoped>
h1{
  color: blueviolet;
}
</style>
