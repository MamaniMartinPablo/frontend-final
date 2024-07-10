// Crear elemento link para cargar los estilos de FontAwesome
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';

// Agregar el elemento link al head del documento
document.head.appendChild(link);

// Escribir el contenido HTML después de cargar los estilos de FontAwesome
document.write('<h1><i class="fas fa-car"></i>&nbsp;&nbsp;&nbsp;BLOG DE AUTOS ANTIGUOS</h1>');
document.write('<nav> <input type="checkbox" id="check"> </input> <label for="check" class="checkbtn"> <i class="fas fa-bars"></i> </label> <ul> <li><a class="active" href="index.html">Home</a></li>    <li><a href="mas_buscados.html">Más buscados</a></li> <li class="nav-item dropdown" id="crud"   ><a class="dropdown-item" href="informacion.html">CRUD autos</a></li><li class="nav-item"><a class="nav-link" href="registro.html">Registro</a></li><li class="nav-item"><a class="nav-link" href="login.html">Login</a></li> <button onclick="logout()" type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-log-out"></span>Logout</button>  </ul>    </nav>  ')
// document.write
// ('<nav><a href="index.html">Home</a>  <a href="informacion.html">Información de Autos</a> <a href="mas_buscados.html">Los Autos más buscados</a> <a href="registro.html">Registrate</a></nav>');

{/* <li><a href="informacion.html">CRUD Autos</a></li> */}


{/* <button onclick="logout()" type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-log-out"></span>Logout</button> */}



if (sessionStorage.getItem("adm")!="1"){
    document.querySelector("#crud").setAttribute('style', 'display:none')
}else{
    document.querySelector("#crud").setAttribute('style', 'display:on')
}