import  {isEscapeKey} from './util.js';

const MAX_COUNT_HASHTAGS = 5;
const RE = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const MessagesHashtagsErrors={
  VALID_HASHTAGS:'Некорректно введен хештег',
  UNIQUE_HASTAGS:'Хештеги не должны повторяться',
  LIMIT_HASHTAGS: 'Нельзя указать больше 5 хештегов',
};

const orderForm = document.querySelector('.img-upload__form');
const orderFormUploadFile =  orderForm.querySelector('#upload-file');
const body = document.querySelector('body');
const orderFormOverlay =  orderForm.querySelector('.img-upload__overlay');
const buttonCloseOrderForm = orderForm.querySelector('#upload-cancel');
const inputHashtags=orderForm.querySelector('.text__hashtags');
const inputDescription=orderForm.querySelector('.text__description');


//Закрытие формы редактирования

const onPopupEscKeydown= (evt)=> {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModalForm();
  }
};

function closeUserModalForm () {
  orderFormOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  orderForm.reset();
}

buttonCloseOrderForm.addEventListener('click', closeUserModalForm);

// открытие формы редактирования изображения
const onUploadFileChange = () => {
  orderFormOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown',onPopupEscKeydown);

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

// валидация и отправка формы
const pristine = new Pristine(orderForm, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper'
});
// Функции проверки хэштегов на валидность
const getArrayHashtags = (value) => (value.trim().toLowerCase().split(' '));

const validateHashtags = (value) => {
  const arrayHashtags = getArrayHashtags(value);
  return value === '' || arrayHashtags.every((hashtag) => RE.test(hashtag));
};

const validateUniqueHashtags = (value) => {
  const arrayHashtags = getArrayHashtags(value);
  return new Set(arrayHashtags).size === arrayHashtags.length;
};

const validateLimitHashtags = (value) => {
  const arrayHashtags = getArrayHashtags(value);
  return arrayHashtags.length <= MAX_COUNT_HASHTAGS;
};


pristine.addValidator(inputHashtags, validateHashtags, MessagesHashtagsErrors.VALID_HASHTAGS);
pristine.addValidator(inputHashtags, validateUniqueHashtags, MessagesHashtagsErrors.UNIQUE_HASTAGS );
pristine.addValidator(inputHashtags, validateLimitHashtags, MessagesHashtagsErrors. LIMIT_HASHTAGS);

orderForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});


