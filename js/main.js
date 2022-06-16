// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

getRandomPositiveInteger(1.5,10);

//Функция для проверки максимальной длины строки.

const checkStringLength =(string, length)=>string.length<=length;

checkStringLength('пример строки',17);


// Необходимое количество фотографий
const PHOTO_COUNT = 25;

// Имена авторов комментариев

const COMMENT_AUTHOR_NAME = [
  'Иван',
  'Алонсо',
  'Наталья',
  'Кристоф',
  'Виктория',
  'Юлия',
  'Криштиану',
  'Дензел',
  'Леонид',
  'Эсмеральда'
];

//Тексты комментариев
const AUTHOR_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
// Тексты описания фото

const DESCRIPTION_PHOTO=[
  'Самый лучший день',
  'Случайный кадр',
  'Рассвет в горах',
  'Отпуск огонь',
  'Рабочие будни',
  'Морской закат'
];

//Функция для получения случайного элемента из массива
const getRandomArrayElement = (elements ) => elements[getRandomPositiveInteger(0, elements.length - 1)];


//Счётчик комментариев
let commentCount=0;
const Avatar={
  MIN:1,
  MAX:6
};

//Функция создания комментария к фотографии
const createPhotoComment = () => {
  commentCount++;
  return{
    id: commentCount,
    avatar: `img/avatar-${getRandomPositiveInteger(Avatar.MIN, Avatar.MAX)}.svg`,
    message: getRandomArrayElement(AUTHOR_MESSAGES),
    name: getRandomArrayElement(COMMENT_AUTHOR_NAME),
  };
};

// Счетчик фотографий
let photoCount = 0;

const Comment={
  MIN:1,
  MAX:10
};

const Likes={
  MIN:15,
  MAX:200
};

//Функция создания описания фотографии
const createPhoto= () => {
  photoCount++;
  return {
    id : photoCount,
    url : `photos/${photoCount}.jpg`,
    description : getRandomArrayElement(DESCRIPTION_PHOTO),
    likes : getRandomPositiveInteger(Likes.MIN, Likes.MAX),
    comment : Array.from({length: getRandomPositiveInteger(Comment.MIN, Comment.MAX)}, createPhotoComment),
  };
};

//Массив фотографий
const arrayPhotoObject = Array.from({length: PHOTO_COUNT}, createPhoto);

console.log(arrayPhotoObject);


