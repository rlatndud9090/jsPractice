import { hashVal, publicKey, ts } from './api-data.js';

let input = document.getElementById('input-box');

let button = document.getElementById('submit-button');
let showContainer = document.getElementById('show-container');
let listContainer = document.querySelector('.list');

let date = new Date();

console.log(date);

const [timestamp, apiKey, hashValue] = [ts, publicKey, hashVal];

const displayWords = (value) => {
  input.value = value;
  removeElements();
};

const getResult = async () => {
  if (input.value.trim().length < 1) {
    alert('Input cannot be blank');
  }
  showContainer.innerHTML = '';
  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&name=${input.value}`;

  const response = await fetch(url);
  const jsonData = await response.json();
  jsonData.data['results'].forEach((element) => {
    showContainer.innerHTML = `<div class="card-container">
    <div class="container-character-image">
    <img src="${
      element.thumbnail['path'] + '.' + element.thumbnail['extension']
    }"/></div>
    <div class="character-name">${element.name}</div>
    <div class="character-description">${element.description}</div>
    </div>`;
  });
};

const removeElements = () => {
  listContainer.innerHTML = '';
};

input.addEventListener('keyup', async () => {
  removeElements();
  if (input.value.length < 4) {
    return false;
  }

  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&nameStartsWith=${input.value}`;

  const response = await fetch(url);
  const jsonData = await response.json();

  jsonData.data['results'].forEach((result) => {
    let name = result.name;
    let divEl = document.createElement('div');
    divEl.style.cursor = 'pointer';
    divEl.classList.add('autocomplete-items');
    divEl.addEventListener('click', () => {
      displayWords(name);
    });
    let word = '<b>' + name.substr(0, input.value.length) + '</b>';
    word += name.substr(input.value.length);
    divEl.innerHTML = `<p class="item">${word}</p>`;
    listContainer.appendChild(divEl);
  });
});

button.addEventListener('click', getResult);

window.onload = () => {
  getResult();
};
