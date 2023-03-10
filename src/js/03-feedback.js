import throttle from 'lodash.throttle';
console.log(throttle);
const FORM_KEY = "feedback-form-state";
// Создаем объект
const formData = {};

// находим ссылки на form, input, extarea

const formEl = document.querySelector('.feedback-form');
// console.log(formEl);
const inputEl = formEl.firstElementChild;
// console.log(inputEl);
const textareaEl = inputEl.nextElementSibling;
// console.log(textareaEl);

formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', onFormSubmit);

populateForm();      
  
function onFormInput(event) {
// Создаем объект: ключ - значение
    formData[event.target.name] = event.target.value;
    // console.log(event.target.name);
    // console.log(event.target.value);

// Заносим объект данных в локальное хранилище
    const formDataSet = localStorage.setItem(FORM_KEY, JSON.stringify(formData));
    
}

function populateForm() {
    // получаем значение из localStorage
 const formDataGet = JSON.parse(localStorage.getItem(FORM_KEY));
console.log(formDataGet);

 if (formDataGet) {
     inputEl.value = formDataGet.email;
     textareaEl.value = formDataGet.message;

     console.log(inputEl.value);
     console.log(textareaEl.value);  
    }
}

// при отправке формы
function onFormSubmit(event) {
    console.log(event);

    event.preventDefault();

    // очищаем форму
    event.currentTarget.reset();
    // очищаем localStorage
    localStorage.removeItem(FORM_KEY);

    console.log(formData);

}



