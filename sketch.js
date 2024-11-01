let cor;
let posicaoHorizontal = 200;
let posicaoVertical = 200;

function setup() {
  createCanvas(1000, 1000);
  background("white");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
}

function draw() {
  circle(posicaoHorizontal, posicaoVertical, 20);
  fill(cor);
  
  if(mouseX > posicaoHorizontal){
    posicaoHorizontal = posicaoHorizontal +1;
  }
  if(mouseX < posicaoHorizontal){
    posicaoHorizontal = posicaoHorizontal -1;
  }
  if(mouseY < posicaoVertical){
    posicaoVertical = posicaoVertical -1;
  }
  if(mouseY > posicaoVertical){
    posicaoVertical = posicaoVertical +1;
  }
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}    