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

console.log("Boas vindas ao jogo de BlackJack!");

const newGame21 = confirm(`"Quer iniciar uma nova rodada?"`)


function jogoDeCartas() {
    
   if(newGame21){
      let cartasUsuario1 = comprarCarta()
      let cartasUsuario2 = comprarCarta()
      let cartasComputador1 = comprarCarta()
      let cartasComputador2 = comprarCarta()
      
      let pontosUsuario = cartasUsuario1.valor + cartasUsuario2.valor 
      let pontosComputador = cartasComputador1.valor + cartasComputador2.valor

      console.log(`Usuário - cartas: ${cartasUsuario1.texto} ${cartasUsuario2.texto} - pontuação ${pontosUsuario}`);
      console.log(`Computador - cartas: ${cartasComputador1.texto} ${cartasComputador2.texto} - pontuação ${pontosComputador}`);

   if (pontosUsuario > pontosComputador && pontosUsuario <= 21){
      console.log(`O usuário venceu!`);
   }else if (pontosComputador > pontosUsuario && pontosComputador <= 21){
      console.log(`O computador venceu!`);
   }else if (pontosUsuario === pontosComputador){
      console.log(`Empate!`);
   }
   }else{
      console.log('O jogo acabou, caso queira jogar novamente recarregue a página!'); 
   }
}


jogoDeCartas()


