const { createApp } = Vue
  createApp({
    data() {
      return {
        usuarios:[],
        // url:'http://127.0.0.1:5000/usuarios', 
        url:'https://pablomartin.pythonanywhere.com/usuarios',// si ya lo subieron a pythonanywhere
        error:false,
        cargando:true,
        /*atributos para el guardar los valores del formulario */
        id:0,
        usuario:"", 
        clave:"",
        rol:0,
    }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        eliminar(id) {
            const url = this.url+'/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
			 alert('Usuario Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        grabar(){
            let usuario = {
                nombre:this.nombre,
                clave: this.clave,
                rol: this.rol,
            }
            var options = {
                body:JSON.stringify(usuario),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Usuario grabado")
                    window.location.href = "./informacion_usuarios.html";  // recarga productos.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')