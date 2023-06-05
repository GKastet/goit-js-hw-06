function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  div: document.querySelector('.widget'),
  spanActualColor: document.querySelector('.color'),
  buttonChange: document.querySelector('.change-color'),
}

refs.buttonChange.addEventListener('click', handlerBodyChangeColor);

function handlerBodyChangeColor(){
  refs.body.style.backgroundColor = `${getRandomHexColor()}`;
  refs.spanActualColor.textContent = refs.body.style.backgroundColor;
}


