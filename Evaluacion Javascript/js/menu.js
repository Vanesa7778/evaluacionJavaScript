//se define una funcion que devuelve el precio del equipo segun el tipo de equipo seleccionado 
function obtenerPrecioEquipo(tipoEquipo) {
    switch (tipoEquipo) { //utilizamos el switch para comparar el tipo de equipo 
        case "pc"://si la opcion es pc devuelve el precio 500
            return 500;
        case "laptop"://si la opcion es lapto devuelve el precio 800
            return 800;
        case "ninguno"://si la opcion es ninguno devuelve el 0
            return 0;
        default:
            alert("Tipo de equipo no valido");// si no cumple ninguna opcion mostrara una alerta y devolvera 0
            return 0;
    }
  }
//se define una funcion que devuelve el precio de la consola  segun el tipo de consola seleccionado 
  function obtenerPrecioConsola(tipoConsola) {
    switch (tipoConsola) {//utilizamos el switch para comparar el tipo de consola
        case "ps5"://si la opcion es ps5 devuelve 300
            return 300;
        case "xbox"://si la opcion es xbox devuelve 350
            return 350;
        case "ninguno"://si la opcion es ninguno devuelve el 0
            return 0;
        default:
            alert("Tipo de consola no valido");// si no cumple ninguna opcion mostrara una alerta y devolvera 0
            return 0;
    }
  }
//se define una funcion que devuelve el precio del celular  segun el tipo de celular seleccionado 
  function obtenerPrecioCelular(tipoCelular) {
    switch (tipoCelular) {//utilizamos el switch para comparar el tipo de celular
        case "android":// si la opcion es android se devuelve 600
            return 600;
        case "iphone"://si la opcion es iphone se devuelve 1000
            return 1000;
        case "ninguno"://si la opcion es ninguno devuelve el 0
            return 0;
        default:
            alert("Tipo de celular no valido");// si no cumple ninguna opcion mostrara una alerta y devolvera 0
            return 0;
    }
  }
//se define una funcion que devuelve el precio del mouse segun el tipo de mouse  seleccionado 
  function obtenerPrecioMouse(tipoMouse) {
    switch (tipoMouse) {//utilizamos el switch para comparar el tipo de mouse
        case "optico"://si la opcion es optico se devuelve 20
            return 20;
        case "inalambrico"://si la opcion es inalambrico se devuelve 30
            return 30;
        case "ninguno"://si la opcion es ninguno devuelve el 0
            return 0;
        default:
            alert("Tipo de mouse no valido");// si no cumple ninguna opcion mostrara una alerta y devolvera 0
            return 0;
    }
  }
// se define la funcion realizarPedido()
  function realizarPedido() {
// obtiene el tipo de computadora seleccionado por el usuario
    var tipoEquipo = document.getElementById("tipoEquipo").value;
// obtiene el tiene el tipo de consola seleccionado por el usuario
    var tipoConsola = document.getElementById("tipoConsola").value;
//obtene el tipo de celular seleccionado por el usuario
    var tipoCelular = document.getElementById("tipoCelular").value;
//obtiene el tipo de mouse seleccionado por el usuario
    var tipoMouse = document.getElementById("tipoMouse").value;
//se establece la cantidad inicial para cada categoria desde 1
    var cantidadEquipo = 1;  
    var cantidadConsola = 1;
    var cantidadCelular = 1;
    var cantidadMouse = 1;
//se calcula el costo total de cada categoria
    var precioEquipo = obtenerPrecioEquipo(tipoEquipo) * cantidadEquipo;
    var precioConsola = obtenerPrecioConsola(tipoConsola) * cantidadConsola;
    var precioCelular = obtenerPrecioCelular(tipoCelular) * cantidadCelular;
    var precioMouse = obtenerPrecioMouse(tipoMouse) * cantidadMouse;
//se calcula el total a pagar sumando los precios de todas los losp productos
    var totalPagar = precioEquipo + precioConsola + precioCelular + precioMouse;
//se llama  al elemento que va a  mostrar el resultado del pedido
    var mensajeResultado = document.getElementById("mensajeResultado");
// se muestra el total a pagar en el elemento "mensajeResultado"
//La funcion toFixed se utiliza para formatear un numero con una cantidad especifica de decimales
//esto va a realizar que el numero tenga dos decimales y devuelve una cadena que representa ese numero formateado
    mensajeResultado.textContent = "Total a Pagar: $" + totalPagar.toFixed(2);
  }
//se define una funcion para ocultar los productos
  function ocultarProductos() {
//se llama  al elemento que va a  ocultar productos 
    var infoProductosDiv = document.getElementById('infoProductos');
//se pone el estilo del contenedor para ocultarlo con style.display = 'none';
    infoProductosDiv.style.display = 'none';
  }
//se define una funcion para mostrar informacion detallada(nombre y precio) de productos seleccionados
  function mostrarProductos() {
//obtiene el tipo de computadora seleccionado por el usuario
    var tipoEquipo = document.getElementById("tipoEquipo").value;
//obtiene el tiene el tipo de consola seleccionado por el usuario
    var tipoConsola = document.getElementById("tipoConsola").value;
//obtene el tipo de celular seleccionado por el usuario
    var tipoCelular = document.getElementById("tipoCelular").value;
//obtiene el tipo de mouse seleccionado por el usuario
    var tipoMouse = document.getElementById("tipoMouse").value;
//se establece la cantidad inicial para cada categoria desde 1 de nuevo para que no permta numeros negativos
    var cantidadEquipo = 1;  
    var cantidadConsola = 1;
    var cantidadCelular = 1;
    var cantidadMouse = 1;
  
//se define una variable que va a mostrar la informacion de los productos y se concatena con la informacion de los productos 
    var infoProductos = document.getElementById("infoProductos");
//se va a llamar a la variable con un estilo de display="block" para que este sea visible en la pagina 
    infoProductos.style.display = "block";
//se llama la variable con una propiedad innerHtml se utiliza para establecer el contenido en el html y este apostrofe ` sirve  para inicializar toda la parte informacion
    infoProductos.innerHTML = `  
    <!-- se va a mostrar el precio del Computador de escritorio(nombre:precio) --> 
        <p>Computador de escritorio : $${obtenerPrecioEquipo("pc").toFixed(2)}</p> 
    
    <!-- se va a mostrar el precio del Computador de escritorio(nombre:precio) --> 
        <p>Computador laptop : $${obtenerPrecioEquipo("laptop").toFixed(2)}</p>

    <!-- se va a mostrar el precio de la consola PlayStation 5 (nombre:precio)  --> 
        <p>Consola PlayStation 5 : $${(obtenerPrecioConsola("ps5")).toFixed(2)}</p>
    <!--se va a mostrar el precio de la consola xbox 360 (nombre:precio) -->
        <p>Consola xbox 360 : $${(obtenerPrecioConsola("xbox")).toFixed(2)}</p>
    <!--se va a mostrar el precio del celular android (nombre:precio) -->
        <p>Celular Android: $${(obtenerPrecioCelular("android")).toFixed(2)}</p>
    <!--se va a mostrar el precio del celular Iphone (nombre:precio) -->
        <p>Celular Iphone: $${(obtenerPrecioCelular("iphone")).toFixed(2)}</p>
    <!--se va a mostrar el precio del mouse optico (nombre:precio) -->
        <p>Mouse optico :$${(obtenerPrecioMouse("optico")).toFixed(2)}</p>
    <!--se va a mostrar el precio del mouse inalambrico (nombre:precio) -->
        <p>Mouse inalambrico :$${(obtenerPrecioMouse("inalambrico")).toFixed(2)}</p>
    `; 
  }