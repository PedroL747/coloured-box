var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;

function preload(){
    // carregue o som aqui
    //music.loadSound("a.mp3")
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4
    bloco3 = createSprite(520,580,200,30)
    bloco3.shapeColor = "red"

    bloco4 = createSprite(750,580,200,30)
    bloco4.shapeColor = "yellow"

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    //escreva o código para adicionar velocityX e velocityY
    bola.velocityX = 2
    bola.velocityY = 6
}

function draw() {
    background(rgb(169,169,169));
    arestas=createEdgeSprites();
    bola.bounceOff(arestas);

    
    //escreva o código de ricochete de bola para bloco1 
  
    if(bloco1.isTouching(bola)){
        bola.shapeColor = "blue";
        //music.play();
        bola.bounceOff(bloco1)
    }


    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
        //music.play();
        bola.bounceOff(bloco2)   
    }

    //escreva o código de ricochete de bola para bloco3
    if(bloco3.isTouching(bola)){
        bola.shapeColor = "red";
        //music.play();
        bola.bounceOff(bloco3)
    }
    //escreva o código de ricochete de bola para bloco4
    if(bloco4.isTouching(bola) ){
        bola.shapeColor = "yellow";
        //music.play();
        bola.bounceOff(bloco4)
    }
    drawSprites();
}