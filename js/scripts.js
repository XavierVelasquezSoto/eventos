/* const buttonElement = document.getElementById('button');

const printClick = () => {
  console.log('CLICK');
};

buttonElement.addEventListener('click', printClick);
 */

/* const buttonElement = document.getElementById('button');

let counter = 0;

const incrementCounter = () => {
  console.log(counter);
  counter++;
};

buttonElement.addEventListener('click', incrementCounter); */
/* 
const buttonElement = document.getElementById('button');

const printName = name => {
  console.log(name);
};

buttonElement.addEventListener('click', () => printName('Josefa')); */

/* const buttonElement = document.getElementById('button');

const printName = event => {
  console.log(event.target);
};

buttonElement.addEventListener('click', printName); */

/* # Ejercicios

## EVENTOS */

//1 - Crea un botón con la etiqueta <button> en tu página HTML y añade un evento de click que muestre en la consola el texto que tenga botón al hacer click.

const buttonElement = document.getElementById('button');

const buttonClick = () => {
  console.log(buttonElement.textContent);
};

buttonElement.addEventListener('click', buttonClick);

//2 - Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const h1Element = document.getElementById('h1');

const titleOver = () => {
  h1Element.textContent = 'Fuera de aquí';
};
const titleLeave = () => {
  h1Element.textContent = 'Soy un título';
};

h1Element.addEventListener('mouseover', titleOver);
h1Element.addEventListener('mouseleave', titleLeave);
// document.addEventListener('click', ) vale para coger todo el documento no 1 posicion indicada

//3 - Crea un p con el texto "esperando entrada de teclado..." al pulsar cualquier tecla deberá poner "has pulsado la tecla tal" y al soltarla el <p> volverá a tener el texto "esperando entrada de teclado...". Como reto extra puedes intentar añadir si se ha usado una combinación de teclas con alt, shift o control

const pElement = document.getElementById('p');

const textKey = event => {
  pElement.textContent = `has pulsado la tecla... `;
  console.log(event);

  if (event.shiftKey) {
    pElement.textContent += ` Shift + ${event.key}`;
  } else if (event.ctrlKey) {
    pElement.textContent += ` Ctrl + ${event.key}`;
  } else if (event.altKey) {
    pElement.textContent += ` Alt + ${event.key}`;
  }
};
const textLeaveKey = () => {
  pElement.textContent = 'esperando entrada de teclado...';
};

document.addEventListener('keydown', textKey);
document.addEventListener('keyup', textLeaveKey);
// document.addEventListener();

//4 - Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

const h2Element = document.getElementById('h2');

const words = ['behind', 'door', 'open', 'exclusive', 'operation'];

const changeSubtitle = () => {
  h2Element.textContent = words[0];
};

h2Element.addEventListener('click', changeSubtitle);
