console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // producto_update.html?id=1
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        id:0,
        nombre:"",
        imagen:"",
        anio:0,
        origen:"",
        // url:'http://127.0.0.1:5000/vehiculos/'+id,
        url:'https://pablomartin.pythonanywhere.com/vehiculos/'+id,
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id=data.id
                    this.nombre = data.nombre;
                    this.imagen=data.imagen
                    this.anio=data.anio
                    this.origen=data.origen                    
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            let producto = {
                nombre:this.nombre,
                anio: this.anio,
                origen: this.origen,
                imagen: this.imagen
            }
            var options = {
                body: JSON.stringify(producto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./informacion.html"; // navega a productos.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')