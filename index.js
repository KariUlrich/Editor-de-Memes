// Cambiar de formulario - imagen/texto

const formularioImagen = document.querySelector(".formulario-imagen")
const botonImagen = document.querySelector(".div-imagen")
const formularioTexto = document.querySelector(".formulario-texto")
const botonTexto = document.querySelector(".div-texto")

const mostrarDivImagen = () =>{
    formularioTexto.style.display = "none"
    formularioImagen.style.display = "flex"
}
const mostrarDivTexto = () =>{
    formularioImagen.style.display = "none"
    formularioTexto.style.display = "flex"
}
botonImagen.onclick = mostrarDivImagen
botonTexto.onclick = mostrarDivTexto
// ---------------------------------------------------------------------------------------------
/////////////////////////////////////////////// Formulario Imagen
// URL
const inputImagen = document.querySelector(".url-imagen")
const verImagen = document.getElementById("meme")

inputImagen.oninput = () => {
    verImagen.src = inputImagen.value
}

// Fondo
const fondoImagen = document.getElementById("colorFondo")
const textoColorFondo = document.querySelector(".texto-colorFondo")
const divImagen = document.querySelector(".imagen-entretexto")

fondoImagen.oninput = () => {
    divImagen.style.backgroundColor = fondoImagen.value // div que contiene al meme - input color imagen
    textoColorFondo.textContent = fondoImagen.value
}
// Apariencia del fondo - No funciona

const tipoDeFondo = document.getElementById("mezclaDeFondo")

const cambiarFondo = () => {
    if (tipoDeFondo.value === "Aclarar"){
        verImagen.style.backgroundBlendMode = "lighten"
}
        else if(tipoDeFondo.value === "Oscurecer"){
            verImagen.style.backgroundBlendMode = "darken"
}       
        else if(tipoDeFondo.value === "Diferencia"){
    verImagen.style.backgroundBlendMode = "difference"
}       
        else if(tipoDeFondo.value === "Luminosidad"){
    verImagen.style.backgroundBlendMode = "luminisity"
}       
        else if(tipoDeFondo.value === "Multiplicar"){
    verImagen.style.backgroundBlendMode = "multiply"
}       
    else {
        verImagen.style.backgroundBlendMode = "none"
    }
}

// tipoDeFondo.onclick = cambiarFondo

tipoDeFondo.onchange = () => {
    if (tipoDeFondo.value === "Aclarar"){
        verImagen.style.backgroundBlendMode = "lighten"
    }
    else {
        verImagen.style.backgroundBlendMode = "none"
    }
}

// Filtos
const inputFiltroBrillo = document.getElementById("input-brillo")
const inputFiltroOpacidad = document.getElementById("input-opacidad")
const inputFiltroContraste = document.getElementById("input-contraste")
const inputFiltroDesenfoque = document.getElementById("input-desenfoque")
const inputFiltroEscalaDeGrises = document.getElementById("input-escalaDeGrises")
const inputFiltroSepia = document.getElementById("input-sepia")
const inputFiltroHue = document.getElementById("input-hue")
const inputFiltroSaturado = document.getElementById("input-saturado")
const inputFiltroNegativo = document.getElementById("input-negativo")

const cambiarFiltros = () => {
    const brightness = inputFiltroBrillo.value
    const opacity = inputFiltroOpacidad.value
    const blur = inputFiltroDesenfoque.value
    const contrast = inputFiltroContraste.value
    const grayscale = inputFiltroEscalaDeGrises.value
    const hue = inputFiltroHue.value
    const sepia = inputFiltroSepia.value
    const saturate = inputFiltroSaturado.value
    const invert = inputFiltroNegativo.value
    verImagen.style.filter = `brightness(${brightness}) opacity(${opacity}) blur(${blur}px) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hue}deg) sepia(${sepia}%) saturate(${saturate}%) invert(${invert})`
}
inputFiltroBrillo.onchange = cambiarFiltros
inputFiltroOpacidad.onchange = cambiarFiltros
inputFiltroContraste.onchange = cambiarFiltros
inputFiltroDesenfoque.onchange = cambiarFiltros
inputFiltroEscalaDeGrises.onchange = cambiarFiltros
inputFiltroHue.onchange = cambiarFiltros
inputFiltroSepia.onchange = cambiarFiltros
inputFiltroSaturado.onchange = cambiarFiltros
inputFiltroNegativo.onchange = cambiarFiltros


// Boton Restablecer filtros - No funciona
const restablecerFiltros = document.querySelector(".reestablecerFiltros")

restablecerFiltros.onclick = () => {
    inputBrillo.value = 1
    inputOpacidad.value = 1
    inputContraste.value = 0
    inputDesenfoque.value = 0
    inputEscalaDeGrises.value = 0
    inputSepia.value = 0
    inputHue.value = 0
    inputSaturado.value = 100
    inputNegativo.value = 0
}

/////////////////////////////////////////////////// Formulario Texto
// Superior e Inferior

const inputTextoSuperior = document.getElementById("superior")
const inputTextoInferior = document.getElementById("inferior")
const verTextoSuperior = document.getElementById("texto-superior")
const verTextoInferior = document.getElementById("texto-inferior")

inputTextoSuperior.oninput = () => {
    verTextoSuperior.textContent = inputTextoSuperior.value
}

inputTextoInferior.oninput = () => {
    verTextoInferior.textContent = inputTextoInferior.value
}
//Sin texto superior y sin texto inferior - falta si clequeo los dos

const sinTextoSuperior = document.getElementById("input-sin-texto-superior")
const sinTextoInferior = document.getElementById("input-sin-texto-inferior")

sinTextoSuperior.oninput = () => {
    if(sinTextoSuperior.checked) {
        verTextoSuperior.style.display = "none";
        divImagen.classList.add("imagen-sin-texto-superior");
    }
    else {
        verTextoSuperior.style.display = "flex";
        divImagen.classList.remove("imagen-sin-texto-superior");
    }
}
sinTextoInferior.oninput = () => {
    if(sinTextoInferior.checked) {
        verTextoInferior.style.display = "none";
        divImagen.classList.add("imagen-sin-texto-superior");
    }
    // else if (sinTextoSuperior.checked && sinTextoInferior.cheked) {
    //     verTextoSuperior.style.display = "none";
    //     verTextoInferior.style.display = "none";
    //     divImagen.classList.add("imagen-sin-texto-superior-inferior");
    // }
    else {
        verTextoInferior.style.display = "flex";
        divImagen.classList.remove("imagen-sin-texto-superior");
    }
}

//Sintexto - NO FUNCIONA
 const sinTextoSuperiorEInferior = document.querySelectorAll(".sin-ningun-texto")

 sinTextoSuperiorEInferior.oninput = () => {
    if(inTextoSuperiorEInferior.checked) {
        verTextoSuperior.style.display = "none";
        verTextoInferior.style.display = "none";
        divImagen.classList.add("imagen-sin-texto-superior-inferior");
    }
    
}

// Tipo Fuente
const tipoDeFuente = document.getElementById("elegir-fuente")
tipoDeFuente.oninput = () => {
    verTextoSuperior.style.fontFamily = tipoDeFuente.value 
    verTextoInferior.style.fontFamily = tipoDeFuente.value 
}

// Tamanio de fuente
const tamanioDeFuente = document.getElementById("size")
tamanioDeFuente.oninput = () => {
    verTextoSuperior.style.fontSize = tamanioDeFuente.value + "px"
    verTextoInferior.style.fontSize = tamanioDeFuente.value + "px"
}

// Alineado - NO FUNCIONA
const botonIzquierda = document.getElementById("b-izquierda")
const botonCentro = document.getElementById("b-centro")
const botonDerecha = document.getElementById("b-derecha")

botonIzquierda.onclick = () => {
    verTextoSuperior.style.textAlign = "left"
    verTextoInferior.style.textAlign = "left"
}

botonCentro.onclick = () => {
    verTextoSuperior.style.textAlign = "center"
    verTextoInferior.style.textAlign = "center"
}

botonDerecha.onclick = () => {
    verTextoSuperior.style.textAlign = "right"
    verTextoInferior.style.textAlign = "right"
}

// Color y Fondo - debe ser igual que color de fondo

const inputColorTexto = document.getElementById("input-color-texto")
const inputColorFondo = document.getElementById("input-color-fondo")
const spanNumeroColor = document.getElementById("numero-texto-color")
const spanNumeroFondo = document.getElementById("numero-texto-fondo")

inputColorTexto.oninput = () => {
    verTextoSuperior.style.color = inputColorTexto.value
    verTextoInferior.style.color = inputColorTexto.value
    spanNumeroColor.textContent = inputColorTexto.value
}
inputColorFondo.oninput = () => {
    verTextoSuperior.style.backgroundColor = inputColorFondo.value
    verTextoInferior.style.backgroundColor = inputColorFondo.value
    spanNumeroFondo.textContent = inputColorFondo.value
}

// Fondo transparente

const fondoTransparente = document.getElementById("fondo-transparente")

fondoTransparente.oninput = () => {
    if(fondoTransparente.checked){
        verTextoSuperior.style.backgroundColor = "transparent"
        verTextoInferior.style.backgroundColor = "transparent"
    }
    else{
        verTextoSuperior.style.backgroundColor = inputColorFondo.value
        verTextoInferior.style.backgroundColor = inputColorFondo.value
    }
}

// Contorno - NO FUNCIONA
const botonContornoClaro = document.getElementById("claro")
const botonContornoOscuro = document.getElementById("oscuro")
const botonSinContorno = document.getElementById("ninguno")

botonContornoClaro.onclick = () => {
    verTextoSuperior.style.textShadow = "2px 2px 2px grey"
    verTextoInferior.style.textShadow = "2px 2px 2px grey"
}
    
botonContornoOscuro.onclick = () => {
    verTextoSuperior.style.textShadow = "2px 2px 2px black"
    verTextoInferior.style.textShadow = "2px 2px 2px black"
}    

botonSinContorno.onclick = () => {
    verTextoSuperior.style.textShadow = "none"
    verTextoInferior.style.textShadow = "none"
} 

// Espaciado
const espaciado = document.getElementById("input-espaciado")

const hacerEspacio = () => {
    verTextoSuperior.style.paddingTop = espaciado.value + "px"
    verTextoSuperior.style.paddingBottom = espaciado.value + "px"
    verTextoInferior.style.paddingTop = espaciado.value + "px"
    verTextoInferior.style.paddingBottom = espaciado.value + "px"
}
espaciado.onclick = hacerEspacio

// Interlineado - NO FUNCIONA
const interlineado = document.getElementById("select-interlineado")

interlineado.onclick = () => {
    verTextoSuperior.style.lineHeight = interlineado.value
    verTextoInferior.style.lineHeight = interlineado.value
}

// const hacerInterlineado = () => {
//     verTextoSuperior.style.lineHeight = interlineado.value
//     verTextoInferior.style.lineHeight = interlineado.value
// }
// interlineado.onclick = hacerInterlineado

//----------------------------------------------------------------------------------------------------
// Modo Oscuro
const botonModoOscuro = document.getElementById("boton-modo-oscuro") // boton

const generadorDeMeme = document.querySelector("h1") // Titulo - gris oscuro
const header = document.querySelector(".section1") // header - gris mas claro
const body = document.querySelector("body") // body
const formImagen = document.querySelector(".formulario-imagen") // form imagen - gris muy blanco
const formTexto = document.querySelector(".formulario-texto") // form texto - gris muy blanco
const tituloImagen = document.querySelector(".formulario-imagen") //Titulo imagen - gris oscuro
const tituloTexto = document.querySelector(".formulario-texto") //Titulo imagen - gris oscuro
const inputFondo = document.querySelector(".div-solo-input") // input - gris 
const textareaS = document.getElementById("superior") // input y texto - gris mas claro y letra muy oscura
const textareaI = document.getElementById("inferior") 
const elegirFuente = document.getElementById("elegir-fuente") // input y texto - gris mas claro y letra muy oscura
const size = document.querySelector(".size")
const colorColor = document.querySelector(".div-div-color")  // input y texto - gris mas claro y letra muy oscura
const colorFondo = document.querySelector(".div-div-fondo")  // input y texto - gris mas claro y letra muy oscura
const contornoN = document.querySelector(".ninguno")
const contornoC = document.querySelector(".claro")
const contornoO = document.querySelector(".oscuro")
const botonDescargar = document.getElementById("boton-descargar")


const activarModoOscuro = () => {
    generadorDeMeme.classList.toggle("modo-oscuro-gris-oscuro")
    botonImagen.classList.toggle("modo-oscuro-gris")
    botonTexto.classList.toggle("modo-oscuro-gris")
    botonModoOscuro.classList.toggle("modo-oscuro-gris")
    restablecerFiltros.classList.toggle("modo-oscuro-gris")
    header.classList.toggle("modo-oscuro-gris")
    formImagen.classList.toggle("modo-oscuro-gris-muy-claro")
    body.classList.toggle("modo-oscuro-gris-claro")
    formTexto.classList.toggle("modo-oscuro-gris-muy-claro")
    tituloImagen.classList.toggle("modo-oscuro-gris-oscuro")
    tituloTexto.classList.toggle("modo-oscuro-gris-oscuro")
    inputImagen.classList.toggle("modo-oscuro-gris")
    inputFondo.classList.toggle("modo-oscuro-gris")
    tipoDeFondo.classList.toggle("modo-oscuro-gris")
    textareaS.classList.toggle("modo-oscuro-gris")
    textareaI.classList.toggle("modo-oscuro-gris")
    elegirFuente.classList.toggle("modo-oscuro-gris")
    size.classList.toggle("modo-oscuro-gris")
    botonIzquierda.classList.toggle("modo-oscuro-gris")
    botonCentro.classList.toggle("modo-oscuro-gris")
    botonDerecha.classList.toggle("modo-oscuro-gris")
    colorColor.classList.toggle("modo-oscuro-gris")
    colorFondo.classList.toggle("modo-oscuro-gris")
    contornoN.classList.toggle("modo-oscuro-gris")
    contornoC.classList.toggle("modo-oscuro-gris")
    contornoO.classList.toggle("modo-oscuro-gris")
    espaciado.classList.toggle("modo-oscuro-gris")
    interlineado.classList.toggle("modo-oscuro-gris")
    botonImagen.classList.toggle("estilBoton")
    botonTexto.classList.toggle("estilBoton")
    botonModoOscuro.classList.toggle("estilBoton")
    botonDescargar.classList.toggle("desBoton")
    inputImagen.classList.toggle("estilBoton")
    tipoDeFondo.classList.toggle("estilBoton")
    restablecerFiltros.classList.toggle("estilBoton")

    // botonModoOscuro.textContent = "Modo Claro" - No funciona
    //     if(botonModoOscuro.classList.contains("oscuro")){
    //     botonModoOscuro.textContent = "Modo Claro"
    // }
    //     else{
    //     botonModoOscuro.textContent = "Modo Oscuro"
    // }
    }
   
botonModoOscuro.onclick = activarModoOscuro


// Descargar Meme