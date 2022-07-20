import  {isEscapeKey} from './util.js';
import { isValidForm, checkHashtags} from './validation-form.js';
import {closeUserModalForm, uploadForm} from './upload-form.js';
import { sendData } from './api.js';

const body = document.querySelector('body');
//Шаблон сообщения об успешной загрузке изображения
const successContainerNode = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
// Кнопка об успешной загрузке
const successButtonNode = successContainerNode.querySelector('.success__button');
//Шаблон сообщение с ошибкой загрузки изображения
const errorContainerNode = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
//Кнопка об ошибке файла при загрузке
const errorButtonNode = errorContainerNode.querySelector('.error__button');
//Кнопка для отправки данных на сервер
const submitButton = document.querySelector('#upload-submit');
//Форма редактирования
const orderFormOverlay =  document.querySelector('.img-upload__overlay');

// блокировка кнопки отправки
const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

// разблокировка кнопки отправки
const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

// обработчики закрытия окна об успешной отправке
const onSuccessContainerEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    cancelSuccessMessage();
  }
};

const onOutSuccessContainerClick = (evt) => {
  if (evt.target === successContainerNode) {
    cancelSuccessMessage();
  }
};

successButtonNode.addEventListener('click', () => cancelSuccessMessage());

// функция закрытия окна об успешной отправке
function cancelSuccessMessage() {
  successContainerNode.remove();
  document.removeEventListener('keydown', onSuccessContainerEscKeydown);
  document.removeEventListener('click', onOutSuccessContainerClick);
}

// открытие окна об успешной отправке
const showSuccessMessage = () => {
  body.append(successContainerNode);
  document.addEventListener('keydown', onSuccessContainerEscKeydown);
  document.addEventListener('click', onOutSuccessContainerClick);
};


// обработчики закрытия окна об ошибке при отправке формы
const onErrorContainerEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    cancelErrorMessage();
  }
};

const onOutErrorContainerClick = (evt) => {
  if (evt.target === errorContainerNode) {
    cancelErrorMessage();
  }
};

errorButtonNode.addEventListener('click', () => cancelErrorMessage());

// закрытие окна об ошибке
function cancelErrorMessage() {
  errorContainerNode.remove();
  orderFormOverlay.classList.remove('hidden');
  document.removeEventListener('keydown', onErrorContainerEscKeydown);
}

// открытие окна при ошибке
const showErrorMessage = () => {
  orderFormOverlay.classList.add('hidden');
  body.append(errorContainerNode);
  document.addEventListener('keydown', onErrorContainerEscKeydown);
  errorContainerNode.addEventListener('click', onOutErrorContainerClick);

};

const onSuccessSendForm = () => {
  closeUserModalForm();
  showSuccessMessage();
  unblockSubmitButton();
};

const onFailSendForm = () => {
  showErrorMessage();
  unblockSubmitButton();
};

const setUserFormSubmit = () => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = isValidForm();
    checkHashtags();

    if (isValid) {
      blockSubmitButton();
      sendData(onSuccessSendForm, onFailSendForm, new FormData(evt.target));
    }
  });
};
/*
const setUserFormSubmit = () => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = isValidForm();
    checkHashtags();


    if (isValidForm()) {
      blockSubmitButton();
      sendData(onSuccessSendForm, onFailSendForm, new FormData(evt.target));
    }
  });
};
*/
export { setUserFormSubmit };
