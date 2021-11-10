/*1 ͦ Checkpoint de Programação Imperativa!
Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".*/

/* FUNÇÃO TEMPO PADRÃO */
let tempoPipoca = 0.10;
let tempoMacarrão = 0.08;
let tempoCarne = 0.15;
let tempoFeijão = 0.12;
let tempoBrigadeiro = 0.08;

//SELECIONE A FUNÇÃO E O TEMPO

let prato = null
let tempo = 0.20

function microondas(prato, tempo){

//"A comida queimou"
if (prato == 'pipoca' && tempo >= 2*tempoPipoca && tempo < 3*tempoPipoca 
|| prato == 'macarrão' && tempo >= 2*tempoMacarrão && tempo < 3*tempoMacarrão
|| prato == 'carne' && tempo >= 2*tempoCarne && tempo < 3*tempoCarne
|| prato == 'feijão' && tempo >= 2*tempoFeijão && tempo < 3*tempoFeijão
|| prato == 'brigadeiro' && tempo >= 2*tempoBrigadeiro && tempo < 3*tempoBrigadeiro){
    return "A comida queimou"

//"tempo insuficiente"; 
}else if (prato == 'pipoca' && tempo < tempoPipoca
|| prato == 'macarrão' && tempo < tempoMacarrão
|| prato == 'carne' && tempo < tempoCarne
|| prato == 'feijão' && tempo < tempoFeijão
|| prato == 'brigadeiro' && tempo < tempoBrigadeiro){
    return "tempo insuficiente"

//"Prato pronto, bom apetite!!!"
}else if (prato == 'pipoca' && tempo >= tempoPipoca && tempo <= 2*tempoPipoca 
|| prato == 'macarrão' && tempo >= tempoMacarrão && tempo <= 2*tempoMacarrão
|| prato == 'carne' && tempo >= tempoCarne && tempo <= 2*tempoCarne
|| prato == 'feijão' && tempo >= tempoFeijão && tempo <= 2*tempoFeijão
|| prato == 'brigadeiro' && tempo >= tempoBrigadeiro && tempo <= 2*tempoBrigadeiro){
    return "Prato pronto, bom apetite!!!"

//"kabumm"; 
}else if (prato == 'pipoca' && tempo >= 3*tempoPipoca
|| prato == 'macarrão' && tempo >= 3*tempoMacarrão
|| prato == 'carne' && tempo >= 3*tempoCarne
|| prato == 'feijão' && tempo >= 3*tempoFeijão
|| prato == 'brigadeiro' && tempo >= 3*tempoBrigadeiro){
    return "kabumm"
    
//Prato inexistente";
}else {null}
    return 'Prato inexistente'}

console.log(microondas(prato,tempo))
