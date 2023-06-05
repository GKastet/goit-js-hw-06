const formSubmit = document.querySelector('.login-form');

formSubmit.addEventListener('submit', holderFormSubmit)

function holderFormSubmit(evt){
    evt.preventDefault();    
    
    const formElements = evt.currentTarget.elements;
    const formEmail = formElements.email.value;
    const formPassword = formElements.password.value;
    
    if(formEmail === '' || formPassword === ''){
        const message = 'Please fill all fields'
        alert(message);
    }else{
        const formData = {
            formEmail,
            formPassword,
        }
        console.log(formData);
        formSubmit.reset();
    }    
}


