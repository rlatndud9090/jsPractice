const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomHexCode = getRandomHexCode();
  document.body.style.backgroundColor = randomHexCode;
  color.textContent = randomHexCode;
});

function getRandomHexCode() {
  let str = '#';

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * hex.length);
    str += hex[randomNumber];
  }

  return str;
}