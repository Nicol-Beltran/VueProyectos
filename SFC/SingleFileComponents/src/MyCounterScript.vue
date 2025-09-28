
<template>
    <div>
        <section>
            <h1>Contador : {{ contador }}</h1>
            <h2> Número al cuadrado: {{ cuadrado }}</h2>

        </section>
    </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent} from 'vue';

export default defineComponent({
    props:{
        valor:{
            type:Number,
            required: true
        }
    },
    setup(props){
        const contador= ref(props.valor)
        const cuadrado= computed(()=> contador.value * contador.value)


        return{
            contador, 
            cuadrado
        }
    }
})

</script>