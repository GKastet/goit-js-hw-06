function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  divControls: document.querySelector('#controls'),
  inputNumber: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  divBoxes: document.querySelector('#boxes'),
}

function createBoxes(amount){
  const divBoxSize = 30;
  const divArray = [];
  for(let i = 0; i < amount; i+=1){
  const divBox = document.createElement('div');
        divBox.style.width = `${divBoxSize +i*10}px`;
        divBox.style.height = `${divBoxSize +i*10}px`;
        divBox.style.backgroundColor = getRandomHexColor();
        divArray.push(divBox);
        }
  refs.divBoxes.append(...divArray);
}

function destroyBoxes(){
  refs.divBoxes.innerHTML = '';
}
refs.btnDestroy.addEventListener('click', destroyBoxes);
refs.btnCreate.addEventListener('click', () => createBoxes(refs.inputNumber.value))
