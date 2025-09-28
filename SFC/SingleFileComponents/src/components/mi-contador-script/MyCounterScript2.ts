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
        };
    },
});