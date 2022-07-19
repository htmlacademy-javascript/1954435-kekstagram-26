const ALERT_SHOW_TIME = 3000;

// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Функция для получения случайного элемента из массива
const getRandomArrayElement = (elements ) => elements[getRandomPositiveInteger(0, elements.length - 1)];

//Функция для проверки максимальной длины строки.

const checkStringLength =(string, length)=>string.length<=length;

//Фукция при нажатии Escape
const isEscapeKey = (evt) => evt.key === 'Escape';

// Функция создающая блок сообщения  об ошибке
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.position = 'absolute';
  alertContainer.style.zIndex = 100;
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.fontSize = '20px';
  alertContainer.style.lineHeight = '27px';
  alertContainer.style.fontWeight = '600';
  alertContainer.style.padding = '20px';
  alertContainer.style.borderRadius = '15px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#232321';
  alertContainer.style.color = '#ff0000';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


export {getRandomPositiveInteger,getRandomArrayElement, isEscapeKey, checkStringLength,showAlert};
