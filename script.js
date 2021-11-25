// Função que gera cores aleatórias.
// ref.: https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

// Função que coloca cores aleatórias nas bolas.
function putRandomColor() {
  const balls = document.querySelectorAll('.ball');
  console.log(getRandomColor());
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = getRandomColor();
  }

  return (balls[Math.floor(Math.random() * 6)]);
}

// Seleciona uma cor de uma bola para ser adivinhada.
function getColorToGuess() {
  const rgbToGuess = document.querySelector('#rgb-color');
  const balls = document.querySelectorAll('.ball');
  const rdnBall = Math.floor(Math.random() * 6);
  rgbToGuess.innerHTML = balls[rdnBall].style.backgroundColor;
}

putRandomColor();
getColorToGuess();
