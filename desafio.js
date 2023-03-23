/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


function desafioJogo21() {

let usuario = []
let computador = []

let iniciarRodada = confirm(`Bem vindo(a) ao jogo de BlackJack!
Quer iniciar uma nova rodada?`)


if(iniciarRodada){
   let cartasParaJogar = false
   while (!cartasParaJogar) {
      usuario.push(comprarCarta())
      usuario.push(comprarCarta())
      computador.push(comprarCarta())
      computador.push(comprarCarta())
      
      //Condição caso ultrapasse os 21
      if((usuario[0].valor === 11 && usuario[1].valor === 11 || 
         computador[0].valor === 11 && computador[1].valor === 11)){

         usuario = []
         computador = []

      }else {
          cartasParaJogar = true
     }
     }
     let cartaTextoJogador = `jogador: `
     let cartaTextoComputador = `computador: `
     let pontuacaoJogador = 0
     let pontuacaoComputador = 0
     
     //Para mostrar a pontuação de ambos 
     for(let i = 0; i < usuario.length; i++){
         cartaTextoJogador += usuario[i].texto + ` `
         pontuacaoJogador += usuario[i].valor      
     }

     for(let j = 0; j < computador.length; j++){
      cartaTextoComputador += computador[j].texto + ` `
      pontuacaoComputador += computador[j].valor      
     }

     let comprarCarta2 = true

     while(comprarCarta2){
      if(pontuacaoJogador > 21){
         break

      }
      let resposta = confirm(
         `Suas cartas são ${cartaTextoJogador}. A carta revelada do computador é ${computador[0].texto}.
         \nDeseja comprar mais uma carta?`
        
      )
      if(resposta){
         let compraCarta3 = comprarCarta()
         usuario.push(compraCarta3)
         pontuacaoJogador += compraCarta3.valor
         cartaTextoJogador += `${compraCarta3.texto}`
      }else{
      comprarCarta2 = false
      }
      }
      while(pontuacaoComputador <= pontuacaoJogador && pontuacaoJogador <= 21){
         let compraCarta3 = comprarCarta()
         computador.push(compraCarta3)
         pontuacaoComputador += compraCarta3.valor
         cartaTextoComputador += `${compraCarta3.texto}`
      }

    //Definindo o vencedor
      let pontuacaoFinal = ``

      if(pontuacaoJogador > 21){
         pontuacaoFinal = `O computador venceu!`
      }else if(pontuacaoComputador > 21){
         pontuacaoFinal = `O usuário venceu!`
      }else if(pontuacaoJogador > pontuacaoComputador){
         pontuacaoFinal = `O usuário venceu`
      }else if(pontuacaoComputador > pontuacaoJogador){
         pontuacaoFinal = `O computador venceu`
      }else{
         pontuacaoFinal = `EMPATE!`
      }

      alert(`${cartaTextoJogador} \nPontuação do usuário: ${pontuacaoJogador} \n${cartaTextoComputador} \nPontuação do computador: ${pontuacaoComputador} \n${pontuacaoFinal}`)

      }else{
      alert(`Fim de jogo!`)
      }
      }


desafioJogo21()