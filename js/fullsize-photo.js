import  {isEscapeKey} from './util.js';


const MAX_COMMENTS_LIMIT_SHOW = 5;

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');

const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
//const bigPictureComments =bigPicture.querySelector('.comments-count');
const bigPicttureDescription = bigPicture.querySelector('.social__caption');
const commentsContainer = bigPicture.querySelector('.social__comments');
const commentElement = document.querySelector('.social__comment');

const commentsCount = bigPicture.querySelector('.social__comment-count');
const buttonCommentLoader = bigPicture.querySelector('.comments-loader');

const buttonCloseBigPicture = bigPicture.querySelector('#picture-cancel');

const commentListFragment = document.createDocumentFragment();

// Функция закрытия модального окна с большим фото.

const onPopupEscKeydown= (evt)=> {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    cancelPhotoContainer();
  }
};

function cancelPhotoContainer () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  buttonCommentLoader.onclick = null;
}

buttonCloseBigPicture.addEventListener('click', cancelPhotoContainer);


//Функция для отрисовки фотографии в полноэкранном режиме
const renderPhotoElement = ({url, likes, comments, description}) => {

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  bigPictureImg.src = url;
  bigPictureLikes.textContent = likes;
  bigPicttureDescription.textContent = description;

  // Функция создания комментариев - массивом по 5 штук
  let count = 0; // Переменная для отображения порций комментариев - 5шт, 10шт и т.д.
  const addComments = () => {

    comments.slice(0, count += MAX_COMMENTS_LIMIT_SHOW).forEach((comment) => {

      const commentElementCopy = commentElement.cloneNode(true);
      const commentAvatar = commentElementCopy.querySelector('.social__picture');
      const commentMesssage = commentElementCopy.querySelector('.social__text');

      commentAvatar.src = comment.avatar;
      commentAvatar.alt = comment.name;
      commentMesssage.textContent = comment.message;

      commentListFragment.append(commentElementCopy);
    });

    commentsContainer.innerHTML = ''; // Очищаем список комментариев.
    commentsContainer.append(commentListFragment);

    // Сравнивает счетчик count с количеством комментариев, чтобы скрыть/отобразить кнопку загрузки комментариев и рассчитывает, сколько выведено комментариев
    if (count >= comments.length) {
      buttonCommentLoader.classList.add('hidden');
      commentsCount.textContent = `${comments.length} из ${comments.length} комментариев`;
    } else {
      buttonCommentLoader.classList.remove('hidden');
      commentsCount.textContent = `${count} из ${comments.length} комментариев`;
    }
  };

  addComments(); // Вызываем функцию, чтобы отобразились первые 5 комментариев

  // Листенер на кнопку для отображения остальных комментариев. Onclick использован, чтобы удалить обработчик при закрытии модального окна
  buttonCommentLoader.onclick = () => {
    addComments();
  };

  document.addEventListener('keydown', onPopupEscKeydown);


};


export {renderPhotoElement};
