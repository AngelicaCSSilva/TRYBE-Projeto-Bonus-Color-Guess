// Função que gera cores aleatórias.
// ref.: https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  const number = [];
  for (let rgb = 0; rgb < 3; rgb += 1) {
    number.push(Math.floor(Math.random() * 201));
  }
  const color = `rgb(${number[0]}, ${number[1]}, ${number[2]})`;
  return color;
}

// Função que coloca cores aleatórias nas bolas.
function putRandomColor() {
  const balls = document.querySelectorAll('.ball');
  console.log(getRandomColor());
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = getRandomColor();
  }

  return (balls[Math.floor(Math.random() * 7)]);
}

// Seleciona uma cor de uma bola para ser adivinhada.
function getColorToGuess() {
  const rgbToGuess = document.querySelector('#rgb-color');
  const balls = document.querySelectorAll('.ball');
  const rdnBall = Math.floor(Math.random() * 7);
  rgbToGuess.innerHTML = balls[rdnBall].style.backgroundColor;
}



putRandomColor();
getColorToGuess();
