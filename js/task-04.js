let counterValue = 0;

const valueSpan = document.querySelector('#value');

const decrementBtn = document.querySelector('button[data-action="decrement"]');

decrementBtn.addEventListener('click', handlerDecrementBtn)

function handlerDecrementBtn(){
    counterValue -= 1;
    textValue();
}

const incerementBtn = document.querySelector('button[data-action="increment"]');

incerementBtn.addEventListener('click', handlerIncrementBtn)

function handlerIncrementBtn(){
    counterValue += 1;    
    textValue();
}

const textValue = (event) => {
    valueSpan.textContent = counterValue
}


