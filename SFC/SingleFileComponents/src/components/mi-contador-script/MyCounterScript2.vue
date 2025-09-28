<template>
    <div>
        <section>
            <h1>Contador : {{ contador }}</h1>
            <h2> Número al cuadrado: {{ cuadrado }}</h2>

            <div>
                <button v-on:click="contador--">-1</button>
                <button v-on:click="contador++">+1</button>
            </div>

        </section>
    </div>
</template>

<script lang="ts" src="./MyCounterScript2.ts">

</script>