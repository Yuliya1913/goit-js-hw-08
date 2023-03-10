import throttle from 'lodash.throttle';
console.log(throttle);
const FORM_KEY = "feedback-form-state";
// Создаем объект
const formData = {};

// находим ссылки на form, input, extarea

const formEl = document.querySelector('.feedback-form');
// console.log(formEl);

const inputEl = document.querySelector('[name="email"]');

// const inputEl = formEl.firstElementChild.firstElementChild;
console.log(inputEl);
const textareaEl = document.querySelector('[name="message"]');
console.log(textareaEl);

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

populateForm();      
  
function onFormInput(event) {
    
// Создаем объект: ключ - значение
    formData[event.target.name] = event.target.value;

    // console.log(event.target.name);
    // console.log(event.target.value);

// Заносим объект данных в локальное хранилище
    localStorage.setItem(FORM_KEY, JSON.stringify(formData));
    
}

function populateForm() {
    // получаем значение из localStorage и т.к.это объект - применим parse 
    const formDataGet = JSON.parse(localStorage.getItem(FORM_KEY));
    console.log(formDataGet);

    // если в formDataGet есть данные, то внести их в инпут и текстерию
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



