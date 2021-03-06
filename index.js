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

/////////////////////////////////////////////// Formulario Imagen ////////////////////////////////////////////////

// ingresar foto - URL
const inputImagen = document.querySelector(".url-imagen")
const verImagen = document.getElementById("meme")

inputImagen.oninput = () => {
    verImagen.src = inputImagen.value
}

// Color de Fondo Imagen
const fondoImagen = document.getElementById("colorFondo")
const textoColorFondo = document.querySelector(".texto-colorFondo")
const divImagen = document.querySelector(".imagen-entretexto")

fondoImagen.oninput = () => {
    divImagen.style.backgroundColor = fondoImagen.value // div que contiene al meme - input color imagen
    textoColorFondo.textContent = fondoImagen.value
    textoColorFondo.textContent = fondoImagen.value.toUpperCase();
}

// Apariencia del fondo
const tipoDeFondo = document.getElementById("mezclaDeFondo")

tipoDeFondo.onchange = () => {
    if (tipoDeFondo.value === "aclarar"){
        verImagen.style.mixBlendMode = "lighten"
    }
    else if(tipoDeFondo.value === "oscurecer"){
    verImagen.style.mixBlendMode = "darken"
    }       
    else if(tipoDeFondo.value === "diferencia"){
    verImagen.style.mixBlendMode = "difference"
    }       
    else if(tipoDeFondo.value === "luminosidad"){
    verImagen.style.mixBlendMode = "luminosity"
    }       
    else if(tipoDeFondo.value === "multiplicar"){
    verImagen.style.mixBlendMode = "multiply"
    }       
    else {
    verImagen.style.mixBlendMode = "normal"
    }
}

// Filtos del fondo
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

// Boton Restablecer filtros 
const restablecerFiltros = document.getElementById("restablecerFiltros")

restablecerFiltros.onclick = () => {
    inputFiltroBrillo.value = 1
    inputFiltroOpacidad.value = 1
    inputFiltroContraste.value = 0
    inputFiltroDesenfoque.value = 0
    inputFiltroEscalaDeGrises.value = 0
    inputFiltroSepia.value = 0
    inputFiltroHue.value = 0
    inputFiltroSaturado.value = 100
    inputFiltroNegativo.value = 0
    verImagen.style.filter = "none"
}


/////////////////////////////////////////////////// Formulario Texto//////////////////////////////////////////////7
// Ingresar texto Superior e Inferior

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
//Sin texto superior y sin texto inferior
const sinTextoSuperior = document.getElementById("input-sin-texto-superior")
const sinTextoInferior = document.getElementById("input-sin-texto-inferior")

sinTextoSuperior.oninput = () => {
    if(sinTextoSuperior.checked) {
        verTextoSuperior.style.display = "none"
    }
    else {
        verTextoSuperior.style.display = "flex"
    }
}
sinTextoInferior.oninput = () => {
    if(sinTextoInferior.checked) {
        verTextoInferior.style.display = "none"
    }
    else {
        verTextoInferior.style.display = "flex"
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

// Alineado - (no se porque no simpre funciona, de entrada si, pero cuando le pones colores no funciona)
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

// Color y Fondo de texto
const inputColorTexto = document.getElementById("input-color-texto")
const inputColorFondo = document.getElementById("input-color-fondo")
const spanNumeroColor = document.getElementById("numero-texto-color")
const spanNumeroFondo = document.getElementById("numero-texto-fondo")

inputColorTexto.oninput = () => {
    verTextoSuperior.style.color = inputColorTexto.value
    verTextoInferior.style.color = inputColorTexto.value
    spanNumeroColor.textContent = inputColorTexto.value
    spanNumeroColor.textContent = inputColorTexto.value.toUpperCase();
}
inputColorFondo.oninput = () => {
    verTextoSuperior.style.backgroundColor = inputColorFondo.value
    verTextoInferior.style.backgroundColor = inputColorFondo.value
    spanNumeroFondo.textContent = inputColorFondo.value
    spanNumeroFondo.textContent = inputColorFondo.value.toUpperCase();
}

// Fondo transparente - No logre que el texto me quede en el medio
const fondoTransparente = document.getElementById("fondo-transparente")

fondoTransparente.onclick = () => {
    if(fondoTransparente.checked){
       verTextoSuperior.style.backgroundColor = "transparent"
       verTextoInferior.style.backgroundColor = "transparent"
       verTextoSuperior.style.position = "absolute" 
       verTextoInferior.style.position = "absolute"
       verTextoSuperior.style.top = "0" 
       verTextoInferior.style.bottom = "0"
    }
    else{
        verTextoSuperior.style.position = "static" 
        verTextoInferior.style.position = "static"
        verTextoSuperior.style.backgroundColor = inputColorFondo.value
        verTextoInferior.style.backgroundColor = inputColorFondo.value
    }   
}

// Contorno de tesxto
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

// Espaciado de texto
const espaciado = document.getElementById("input-espaciado")

const hacerEspacio = () => {
    verTextoSuperior.style.paddingTop = espaciado.value + "px"
    verTextoSuperior.style.paddingBottom = espaciado.value + "px"
    verTextoInferior.style.paddingTop = espaciado.value + "px"
    verTextoInferior.style.paddingBottom = espaciado.value + "px"
}
espaciado.onclick = hacerEspacio

// Interlineado de texto
const interlineado = document.getElementById("select-interlineado")

interlineado.onclick = () => {
    verTextoSuperior.style.lineHeight = interlineado.value
    verTextoInferior.style.lineHeight = interlineado.value
}

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
const pModoOscuro = document.querySelector(".modoO")


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
        
    if(pModoOscuro.textContent === "Modo Claro"){
        pModoOscuro.textContent = "Modo Oscuro"
    }
    else{
        pModoOscuro.textContent = "Modo Claro"
    }
}
   
botonModoOscuro.onclick = activarModoOscuro


// Descargar Meme - No funciona

const contenedorMeme = document.querySelector(".contendor-meme")
botonDescargar.onclick = () => {
  domtoimage.toBlob(contenedorMeme).then(function (blob) {
    window.saveAs(blob, "elmeme.png")
  })
}