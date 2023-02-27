import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');
const LOCAL_STORAGE_KEY = "feedback-form-state"; 

populateFormOutput();

const formObjectToSave = {};

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onInputChange, 500))

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log({ email: emailEl.value, message: messageEl.value })
    evt.currentTarget.reset();
    localStorage.removeItem(LOCAL_STORAGE_KEY);
       
}

function onInputChange(evt) {

// First solution
    
// console.log(evt.target.name)
// console.log(evt.target.value)

formObjectToSave[evt.target.name] = evt.target.value;
console.log(formObjectToSave);

localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formObjectToSave))

// Second solution

    // const formObjectToSave = {
    //     email: emailEl.value,
    //     message: messageEl.value,
    // };
    
// localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formObjectToSave))
    
}

function populateFormOutput(evt) {
    let savedFormObject = localStorage.getItem(LOCAL_STORAGE_KEY);
    
    if (savedFormObject) {
        savedFormObject = JSON.parse(savedFormObject);      

        emailEl.value = savedFormObject.email;
        messageEl.value = savedFormObject.message;
    }
}