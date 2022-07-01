// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

getRandomPositiveInteger(1.5,10);

//Функция для получения случайного элемента из массива
const getRandomArrayElement = (elements ) => elements[getRandomPositiveInteger(0, elements.length - 1)];

//Функция для проверки максимальной длины строки.

const checkStringLength =(string, length)=>string.length<=length;

checkStringLength('пример строки',17);

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomPositiveInteger,getRandomArrayElement, isEscapeKey};
