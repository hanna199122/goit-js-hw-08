import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(OnTextInput, 500));
populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function OnTextInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage) {
    const { email, message } = savedMessage;

    refs.form.email.value = email;
    refs.form.message.value = message;

    console.log(refs.form.email.value);
    console.log(refs.form.message.value);
  }
}

// Вітаю! Гарно попрацювали, залишилось доопрацювати над 3 завданням,а саме ви зберігаєте об'єкт formData в локальне сховище, а потім спробували встановити цей об'єкт як значення для refs.textarea.value.У рядку refs.textarea.value = savedMessage;, savedMessage містить розпарсений об'єкт formData, а не значення поля message, таким чином при перезагрузці сторінки у вас повертається у текстерії [object Object], щоб вирішити цю проблему, вам потрібно встановити refs.textarea.value на значення поля message збереженого об'єкта savedMessage .Чекаю вашу доопрацьовану роботу)
