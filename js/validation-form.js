const MAX_COUNT_HASHTAGS = 5;
const RE = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const MessagesHashtagsErrors={
  VALID_HASHTAGS:'Некорректно введен хештег',
  UNIQUE_HASTAGS:'Хештеги не должны повторяться',
  LIMIT_HASHTAGS: 'Нельзя указать больше 5 хештегов',
};

const uploadForm = document.querySelector('.img-upload__form');
const inputHashtags=uploadForm.querySelector('.text__hashtags');

// валидация и отправка формы
const pristine = new Pristine(uploadForm, {
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

const isValidForm = () => pristine.validate();

export { isValidForm };
