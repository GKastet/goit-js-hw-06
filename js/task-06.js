const inputLine = document.querySelector('#validation-input');
const inputLength = document.querySelector('[data-length]');

inputLine.addEventListener('blur', controlSymbols)

function controlSymbols(evt){
    if(evt.target.value.length === Number(inputLength.dataset.length)){
        inputLine.classList.add('valid');
        inputLine.classList.remove('invalid'); 
    }else{
        inputLine.classList.add('invalid');
        inputLine.classList.remove('valid')
    }    
}



