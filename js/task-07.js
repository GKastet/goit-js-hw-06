const inputId = document.querySelector('#font-size-control');
const spanId = document.querySelector('#text');

inputId.addEventListener('input', holderFontSize)

function holderFontSize(){
    spanId.style.fontSize = `${inputId.value}px`
}





