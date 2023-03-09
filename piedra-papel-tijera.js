
const btnPiedra = document.querySelector(".boton-piedra")
const btnPapel = document.querySelector(".boton-papel")
const btnTijera = document.querySelector(".boton-tijera")
const resultado = document.querySelector(".resultado")
const resultadoJugador = document.querySelector(".res-jugador")
const resultadoPc = document.querySelector(".res-pc")
const botonReinicio = document.querySelector(".btn-reiniciar")

btnPiedra.addEventListener("click", eleccionPiedra)
btnPapel.addEventListener("click", eleccionPapel)
btnTijera.addEventListener("click", eleccionTijera)
botonReinicio.addEventListener("click",reiniciarJuego)

let piedra = "piedra"
let papel = "papel"
let tijera = "tijera"
let eleccionJugador = ""
let eleccionMaquina = ""

botonReinicio.style.display = "none"

function inicioJuego(){
    eleccionPc()
}

function eleccionPiedra(){
    eleccionJugador = "piedra"
    resultado.innerHTML = "elegiste piedra"
    setTimeout(inicioJuego,800)
    
}
function eleccionPapel(){
    eleccionJugador = "papel"
    resultado.innerHTML = "elegiste papel"
    setTimeout(inicioJuego,800)
    
}
function eleccionTijera(){
    eleccionJugador = "tijera"
    resultado.innerHTML = "elegiste tijera"
    setTimeout(inicioJuego,800)

}
function eleccionPc(){
    eleccionMaquina = aleatoria(0,2)
    if(eleccionMaquina == 1){
        eleccionMaquina = "piedra"
        resultado.innerHTML = "pc elijio piedra"
    }
    else if(eleccionMaquina == 2){
        eleccionMaquina = "papel"
        resultado.innerHTML = "pc elijio papel"
    }
    else{
        eleccionMaquina = "tijera"
        resultado.innerHTML = "pc elijio tijera"
    }
    setTimeout(logicaJuego,1000)
}
function logicaJuego(){
    if (eleccionJugador == "piedra" && eleccionMaquina == "piedra") {
        resultado.innerHTML = "empataste"
    }
    else if(eleccionJugador == "piedra" && eleccionMaquina == "papel"){
        resultado.innerHTML = "perdiste 👎"
        resultadoPc.innerHTML++
    }
    else if(eleccionJugador == "piedra" && eleccionMaquina == "tijera"){
        resultado.innerHTML = "ganaste 👍"
        resultadoJugador.innerHTML++
    }
    else if (eleccionJugador == "papel" && eleccionMaquina == "piedra"){
        resultado.innerHTML = "ganaste 👍"
        resultadoJugador.innerHTML++
    }
    else if (eleccionJugador == "papel" && eleccionMaquina == "papel"){
        resultado.innerHTML = "empataste"
    }
    else if(eleccionJugador == "papel" && eleccionMaquina == "tijera"){
        resultado.innerHTML = "perdiste 👎"
        resultadoPc.innerHTML++
    }
    else if(eleccionJugador == "tijera" && eleccionMaquina == "piedra"){
        resultado.innerHTML = "perdiste 👎"
        resultadoPc.innerHTML++
    }
    else if(eleccionJugador == "tijera" && eleccionMaquina == "papel"){
        resultado.innerHTML = "ganaste 👍"
        resultadoJugador.innerHTML++
    }
    else{
        resultado.innerHTML = "empataste"
    }
    mejorDeTres()
}
function mejorDeTres(){
    if(resultadoJugador.innerHTML == 3){
        resultado.innerHTML = "FELICITACIONES GANASTE 😁 👍"
        botonReinicio.style.display = "block"
    }
    else if(resultadoPc.innerHTML == 3){
        resultado.innerHTML = "LO SIENTO, PERDISTE 🥴 👎"
        botonReinicio.style.display = "block"
    }
}
function reiniciarJuego(){
    window.location.reload()

}
function aleatoria(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
    }
    console.log(eleccionMaquina)