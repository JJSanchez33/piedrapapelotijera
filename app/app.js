/*Jugarás contra la computadora. Escribirás una función que devuelva aleatoriamente 
“piedra”, “papel” o “tijeras”.*/

// 2.Crea una nueva función llamada getComputerChoice.

/*2.1. Escriba el código para que getComputerChoiceaparezca aleatoriamente returnuno de los 
iguientes valores de cadena: “piedra”, “papel” o “tijeras”*/
const  getComputerChoiceaparezca=()=>{
const piedra="piedra",  papel= "papel", tijera ="tijera";
    let numeroAleatorio= Math.floor(Math.random()*3)
    if(numeroAleatorio===1){
        return piedra
    } else if(numeroAleatorio===2){
        return  papel
    }else{
        return tijera
    }

}
const nuevaRespueta=getComputerChoiceaparezca()

/*3.Paso 3: Escribe la lógica para obtener la elección humana.

Tu juego será jugado por un jugador humano. Escribirás una función que
 tome la elección del usuario y la devuelva.*/

 /*1.1 Crea una nueva función llamada getHumanChoice.*/
  const getHumanChoice=()=>{
    let  ingreseUsuario=prompt()
    return ingreseUsuario.toLocaleLowerCase()
}
let  valorUsuario = getHumanChoice()


 /*1.2 Escriba el código para que getHumanChoicedevuelva una de las
  opciones válidas dependiendo de lo que ingrese el usuario.*/
  

  //Paso 4: Declarar las variables de puntuación de los jugadores

  /*4.1 Tu juego llevará un registro de la puntuación de los jugadores. Escribirás variables 
  para llevar un registro de la puntuación de los jugadores.*/

  /*4.2 Crea dos nuevas variables llamadas humanScorey computerScoreen el ámbito global.*/
  /*4.3 Inicialice esas variables con el valor de 0*/
  let  humanScorey=0
  let  computerScoreen=0

  //Paso 5: Escribe la lógica para jugar una sola ronda

  /* 5.1 Tu juego se jugará ronda por ronda. Escribirás una función que 
  tome las elecciones de los jugadores humanos y de la computadora como argumentos,
   juegue una sola ronda, incremente el puntaje del ganador 
  de la ronda y registre un anuncio del ganador.*/

  //5.2 Crea una nueva función llamada playRound.
  const  playRound=(humanChoice ,computerChoice)=>{
     if(computerChoice=== humanChoice){
        console.log("hay un empate")
    } 
    else if(humanChoice=== "piedra"&& computerChoice!=="papel"){
        console.log(`GANASTE ${humanChoice} le gana  ${computerChoice}`)
        humanScorey++
    }else if(humanChoice=== "papel" && computerChoice!=="tijera"){
        console.log(`GANASTE ${humanChoice} le gana  ${computerChoice}`)
        humanScorey++

    }else if(humanChoice==="tijera" && computerChoice!=="piedra"){
        console.log(`GANASTE ${humanChoice} le gana  ${computerChoice}`)
        humanScorey++

}else{
    console.log(`PERDISTE :${humanChoice} no le gana  al${computerChoice}`)
    computerScoreen++
}
  }
  
  


  /*5.3Defina dos parámetros para playRound: humanChoicey computerChoice. 
  Utilice estos dos parámetros para tomar las opciones de 
  la persona y la computadora como argumentos.*/

  /*5.4Haga que el parámetro de su función humanChoiceno distinga entre
   mayúsculas y minúsculas para que los jugadores 
  puedan ingresar "rock", "ROCK", "RocK" u otras variaciones*/

  /*5.4 Escribe el código de tu playRoundfunción en console.logun valor de 
  cadena que represente al ganador de la ronda, 
  como por ejemplo: “¡Pierdes! El papel le gana a la piedra”.*/

  //Incrementa la variable humanScoreo computerScoreen función del ganador de la ronda.

  /*6 Paso 6: Escribe la lógica para jugar todo el juego.
Tu juego se jugará en 5 rondas. Escribirás una función llamada 
playGameque llame playRoundpara jugar 5 rondas, lleve un registro de 
los puntajes y declare un ganador al final.*/

const playGameque=()=>{
    for(let i =0; i< 5 ; i++){
    valorUsuario=prompt()

    playRound(valorUsuario,nuevaRespueta)
}
    console.log(`tu puntuacion es de :${humanScorey}  y Computadorea: ${computerScoreen}`);
        }

playGameque()





// 8.1 Crea una nueva función llamada playGame.

/*6.2 Mueva sus playRoundvariables de función y puntuación para que
 se declaren dentro de la nueva playGamefunción*/

 /*6.3Juega 5 rondas llamando playRound5 veces*/
