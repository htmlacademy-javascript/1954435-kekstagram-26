// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomPositiveInteger=(min,max)=>{
  const minValue = Math.ceil(Math.min(min,max));
  const maxValue = Math.floor(max);
  if(min>=0 && max>=min){

    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }

  return 0;
};

getRandomPositiveInteger(1.5,10);

//Функция для проверки максимальной длины строки.

const checkStringLength =(string, length)=>string.length<=length;

checkStringLength('cup',10);


