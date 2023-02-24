import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');

populateFormOutput();

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onInputChange, 500))

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
       
}

function onInputChange(evt) {

    const formObjectToSave = {
        email: emailEl.value,
        message: messageEl.value,
    };
    console.log(formObjectToSave)
    
localStorage.setItem("feedback-form-state", JSON.stringify(formObjectToSave))
    
}

function populateFormOutput(evt) {
    let savedFormObject = localStorage.getItem("feedback-form-state");
    
    if (savedFormObject) {
        savedFormObject = JSON.parse(savedFormObject);      

        emailEl.value = savedFormObject.email;
        messageEl.value = savedFormObject.message;
    }
}