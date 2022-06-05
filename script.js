
const btnCocina = document.querySelector("#btnCocina")
const btnLavadero = document.querySelector("#btnLavadero")
const btnBano = document.querySelector("#btnBano")

btnBano.addEventListener("click", () => mostrarConFiltro(btnBano.value))
btnLavadero.addEventListener("click", () => mostrarConFiltro(btnLavadero.value))
btnCocina.addEventListener("click", () => mostrarConFiltro(btnCocina.value))


class Canilla {
    constructor(nombre, ubicacion, caudal, imagen) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.caudal = caudal;
        this.goteo = 0.1
        this.imagen = imagen
    }
    detalle() {
        alert(`la canilla es ${this.nombre}`)
    }
}

//Instanciamos los objetos canilla con los que trabajaremos
const bachaCocina = new Canilla("Bacha cocina", "Cocina", 100, "bachaCocina.png");
const bachaLavadero = new Canilla("Bacha lavadero", "Lavadero", 80, "bachaLavadero.png");
const lavarropas = new Canilla("Conexión lavarropas", "Lavadero", 90, "lavarropas.png");
const bachaBano = new Canilla("Bacha baño", "Baño", 60, "bachaBano.png");
const duchaBano = new Canilla("Ducha baño", "Baño", 100, "ducha.png");

//Agrupamos los objetos de nuestro proyecto en un array
const arrayCanillas = [bachaCocina, bachaLavadero, lavarropas, bachaBano, duchaBano]
const infoUsuario = [];

//Capturamos los botones de elementos  
const btnCanilla = document.getElementById("canilla")

//Asignamos escuchadores de eventos a los botones capturados
btnCanilla.addEventListener("click", canillasUsuario)


//function para consultar las canillas que tenga el usuario en su casa
function canillasUsuario() {
 
 //Primera alternativa, usando prompt y alert
    /*
    alert("Hola, te voy a hacer unas preguntas para calcular el consumo de agua en tu casa")

    //recorremos el arrayCanillas preguntando, por cada elemento, si el usuario lo tiene en su casa
    //  convertimos la respuesta a minúscula y evaluamos las dos posibles respuestas positivas, en caso 
    //  coincidencia, sumamos el objeto canilla al array de información de usuario
    for (elem of arrayCanillas) {
        let respuesta = prompt(`En tu casa hay ${elem.nombre}?`).toLowerCase()
        if (respuesta == "sí" || respuesta == "si") {
            infoUsuario.push(elem)
        }
    }
    alert(`Gracias por la información, continuamos!`)
    mostrarCanillas(infoUsuario, "La casa del usuario")

   */

    //Rellenar el div con las opciones que el usuario puede elegir
    const contenedorInfo = document.querySelector(".canillasUsuario")

    let contenedorInsertar = "Selecciona las canillas que tengas en tu casa:"
    //Recorro el array para mostrar todas las opciones en pantalla 
    for (elem of arrayCanillas) {
    
        contenedorInfo.innerHTML = `<input type="checkbox" id=${elem.nombre} value="${elem.nombre}> `
    }
    //contenedorInfo.innerHTML = contenedorInsertar

    //mostrarCanillas(infoUsuario, "La casa del usuario")

}
/* 
const mostrarCanillas = (info) => {
    for (let i = 0; i < info.lenght; i++){
        //Mostrar una card por cada elemento que tenga el array recibido
    }
} */

//Muestra todas las canillas en pantalla
function mostrarCanillas(mostrarArray, ubicacion) {
    
    let contenedor = document.querySelector("#cardCanilla")
    //Qué pasa si en el array hay más de un tipo de canillas? muestra sólo el primer nombre
    contenedor.innerHTML = `<p class="inline">Estas son las canillas de ${ubicacion}</p>`
    for (elem of mostrarArray) {
        
        let nuevaCard = document.createElement("div")
        nuevaCard.innerHTML = `
            <div class="card onBlock" style="width: 18rem;">
            <img src="./Iconos/${elem.imagen}" class="card-img-top" alt="Icono de ${elem.nombre}">
            <div class="card-body">
                <h5 class="card-title">${elem.nombre}</h5>
                <p class="card-text">Canilla que pertenece a ${elem.ubicacion}</p>
                <a href="#" class="btn btn-primary">Calcular consumo</a>
            </div>
            </div>
        `

        contenedor.append(nuevaCard)
    }
}
mostrarCanillas(arrayCanillas, "Toda la casa")






//Filtra las canillas en pantalla según el botón elegido
function mostrarConFiltro(tipo){
    let canillasElegidas = arrayCanillas.filter(e => e.ubicacion == tipo)
    mostrarCanillas(canillasElegidas, tipo)

}





//Calcular consumo de agua (según param canilla) por tiempo de uso
function calcularConsumo(canilla){

}

