let aghata;
let ygona;
let saori;
let jiafei;

function preload() {
  aghata = loadImage("https://i.imgur.com/mrDW2PQ.png");
  ygona = loadImage("https://i.imgur.com/jmGKoLc.png");
  saori = loadImage("https://i.imgur.com/DSnBlSI.png");
  jiafei = loadImage("https://i.imgur.com/UHzvwoB.png");
}

function setup() {
  createCanvas(400, 400);
}

let xYgona = 10;
let xAghata = 10;
let xSaori = 10;
let xJiafei = 10;

function draw() {
  ativaJogo();
  desenhaFlop();
  quemGanhou();

  console.log(mouseX, mouseY);
}

function quemGanhou() {
  if (xYgona > 360) {
    textSize(30);
    textAlign(CENTER);
    text("Quem é a rainha??\nYgonaa🦠", 200, 200);
    noLoop();
  }

  if (xAghata > 360) {
    textSize(30);
    textAlign(CENTER);
    text("Aghata transicionou🍆❌", 200, 200);
    noLoop();
  }

  if (xSaori > 360) {
    textSize(30);
    textAlign(CENTER);
    text("Saori achou scat💩", 200, 200);
    noLoop();
  }

  if (xJiafei > 360) {
    textSize(30);
    textAlign(CENTER);
    text("Jiafei vendeu🛒", 200, 200);
    noLoop();
  }
}

function ativaJogo() {
  if (focused == true) {
    background("pink");

    xAghata += random(3);
    xSaori += random(3);
    xJiafei += random(3);
  } else {
    background("#fff");
    fill("black");
    textSize(22);
    textAlign(CENTER);
    text("Clique na tela\npara começar", 200, 160);
    text("Clique em espaço para\nmovimentar a Ygona", 200, 230);
  }
}

function desenhaFlop() {
  image(ygona, xYgona, 0, 50, 90);
  image(aghata, xAghata, 105, 100, 90);
  image(saori, xSaori, 195, 80, 90);
  image(jiafei, xJiafei, 300, 80, 90);

  fill("white");
  rect(360, 0, 30, 400);
}

function keyReleased() {
  if (key === " ") {
    xYgona += random(35);
  }
}
