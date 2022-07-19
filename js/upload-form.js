import  {isEscapeKey} from './util.js';
import { resetScaleValue } from './scale-photo.js';
import { resetEffects } from './effects-photo.js';


const uploadForm = document.querySelector('#upload-select-image');
const orderFormUploadFile =  uploadForm.querySelector('#upload-file');
const body = document.querySelector('body');
const orderFormOverlay =  uploadForm.querySelector('.img-upload__overlay');
const buttonCloseOrderForm = uploadForm.querySelector('#upload-cancel');
const inputHashtags=uploadForm.querySelector('.text__hashtags');
const inputDescription=uploadForm.querySelector('.text__description');


//Закрытие формы редактирования

/*const onPopupEscKeydown= (evt)=> {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModalForm();
  }
};*/

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt) && !body.contains(document.querySelector('.error'))) {
    evt.preventDefault();
    closeUserModalForm();
  }
};

function closeUserModalForm () {
  orderFormOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  uploadForm.reset();
}

buttonCloseOrderForm.addEventListener('click', closeUserModalForm);
//buttonCloseOrderForm.addEventListener('click', () => closeUserModalForm());

// Oткрытие формы редактирования изображения
const onUploadFileChange = () => {
  orderFormOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown',onPopupEscKeydown);
  resetScaleValue();
  resetEffects();

};
orderFormUploadFile.addEventListener('change', onUploadFileChange);


//Убираем закрытие по Esc при фокусе

const onFocusInputPressEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

inputHashtags.addEventListener('keydown', onFocusInputPressEsc);
inputDescription.addEventListener('keydown', onFocusInputPressEsc);

export{closeUserModalForm, uploadForm,};

