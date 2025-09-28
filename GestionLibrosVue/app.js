const {createApp, ref, computed} = Vue;
const app= createApp({
    setup(){
        // DATOS
        const libros = ref([
          { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
          { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
          { titulo: "1984", autor: "George Orwell" },
          { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
          { titulo: "Fahrenheit 451", autor: "Ray Bradbury" },
          { titulo: "La Odisea", autor: "Homero" },
          { titulo: "Orgullo y prejuicio", autor: "Jane Austen" },
          { titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski" },
          { titulo: "Pedro Páramo", autor: "Juan Rulfo" },
          { titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón" }
        ]);
        const prueba=ref('');
        const mostrar=ref('');
        const estadoBoton=ref(true);
        const nuevoLibro=ref('');
        const nuevoAutor=ref('');

        //metodos
        const crearLibro=()=>{
            if(!nuevoLibro.value || !nuevoAutor.value) return;

            libros.value.push({
                titulo: nuevoLibro.value,
                autor: nuevoAutor.value
            });

            nuevoLibro.value="";
            nuevoAutor.value="";
        }

        const eliminarLibro=(index)=>{
            libros.value.splice(index,1);
        }
        


        //eventos computados

        prueba.value="hola";


        return{
            libros, 
            estadoBoton,nuevoLibro,nuevoAutor, crearLibro, eliminarLibro,
        
            prueba
        }
    }
});

app.mount('#miApp');


