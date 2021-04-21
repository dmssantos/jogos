let order = [];
let clickOrder = [];

let score = 0;

// 0 - green
// 1 - red
// 2 - yellow
// 3 - blue

let blue = document.querySelector(".blue");
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let yellow = document.querySelector(".yellow");


let orderGenerate = () => {
  // Gera numero de 0 a 3
  let next = Math.floor(Math.random() * 4);
  
  // Atribui o número ao próximo da ordem
  order[order.length] = next;
  clickOrder = [];
  
  // Acende na ordem gerada
  for (let i in order) {
    let elementDiv = element(order[i]);
    light(elementDiv, Number(i) + 1);
  }
}

//Acende o elemento em sequência 
let light = (elementDiv, time) => {
  time = time * 500;
  setTimeout(() => {
    elementDiv.classList.add('selected');
  }, time - 250);
  setTimeout(() => {
    elementDiv.classList.remove('selected');
  }, time);
}


let orderCompare = () => {
  for (let i in clickOrder) {
    if (clickOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickOrder.length == order.length) {
    alert(`Pontuação: ${score}!\nVocê acertou! Iniciando próximo nível!`);
    next();
  }
}

// Chama quando o usuário clica em uma das divs
let click = (color) => {
  clickOrder[clickOrder.length] = color;
  element(color).classList.add("selected");
  
  setTimeout(() => {
    element(color).classList.remove("selected");
    
    orderCompare();
  }, 250);
}

let element = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
}

let next = () => {
  score++;
  
  orderGenerate();
}

let gameOver = () => {
  alert(`Pontuação: ${score}!\nVocê gameOver o jogo!\nClique em OK para iniciar um novo jogo.`);
  
  order = [];
  clickOrder = [];
  
  iniciar();
}

let iniciar = () => {
  alert("Bem vindo ao Gênesis! Iniciando novo jogo!");
  
  score = 0;
  
  next();
}

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

iniciar();