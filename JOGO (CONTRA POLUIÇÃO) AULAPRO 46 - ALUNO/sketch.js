var bg, bgImg;

//AULA 46 - criação de varáveis
var playerP, playerImgP, playerImgA, playerA;

function preload(){

  bgImg = loadImage("assets/bg.png");

  //AULA 46 - INSERÇÃO DO PLAYER
  

  //AULA 46 - INSERÇÃO DA ANIMAÇÃO
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2,displayHeight/2,20,20)
  bg.addImage(bgImg)
  bg.scale = 2.9
  
  //AULA 46 - ADICIONANDO PLAYER COM IMAGEM ESTÁTICA
  

  //AULA 46 - ADICIONANDO PLAYER COM ANIMAÇÃO ANIMAÇÃO
  

  //AULA 46 - INVISIBILIDADE DA ANIMAÇÃO, POIS SÓ APARECE SE O PERSONAGEM ANDA.
  

  //AULA 46 - BLOQUEANDO AS PAREDES
  
  
}

function draw() {
  background(0); 

  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
  //AULA 46 - INSERINDO MOVIMENTO
  if(keyDown("LEFT_ARROW")||touches.length>0){

    //AULA 46 - ADICIONANDO MOVIMENTO
   

    //AULA 46 - TROCA DE VISIBILIDADE
    

    //AULA 46 - ESPELHAMENTO
    
    
  }else{
    //AULA 46 - TROCA DE VIDIBILIDADE NOVAMENTE
    

    //AULA 46 - ANIMAÇÃO RECEBE A POSIÇÃO DO PLAYER
    
  }

  if(keyDown("RIGHT_ARROW")||touches.length>0){
    //AULA 46 - ADICIONANDO MOVIMENTO
    

    //AULA 46 - TROCA DE VISIBILIDADE
    

    //AULA 46 - ESPELHAMENTO
    
    
  }else{
    //AULA 46 - ANIMAÇÃO RECEBE A POSIÇÃO DO PLAYER
    
  }

  if(keyWentDown("space") ){
    //AULA 46 - PLAYER PRINCIPAL RECEBE LIMITE DE PIXELS AO CLICAR NO ESPAÇO
    
  }
  //AULA 46 - ANIMAÇÃO RECEBE A POSIÇÃO DO PLAYER
  
  

  //AULA 46 - HABILITA A VISUALIZAÇÃO DO JOGO
  

}

//AULA 46 - DECOMPOSIÇÃO DO JOGO
/*
1 - Inserir Personagem
2 - Criar movimentação de: pulo e andar (esquerda/direita)
3 - Espelhamento de movimento
4 - Bloqueio de Paredes da tela
5 - Hospedar no github
*/

//AULA 45 - DECOMPOSIÇÃO DO JOGO
/*
1 - Mudar background
2 - Colocar imagem da natureza
3 - Baixar imagem da natureza suja
4 - Baixar imagem de lixo
5 - Hospedar no github
*/

