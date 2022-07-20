import { renderFullSizePhoto} from './fullsize-photo.js';

//Функция отрисовки миниатюр
const renderThumbnails=(thumbnails)=>{
  const userPhotoContainer = document.querySelector('.pictures');
  const photoUsersTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const photoListFragment = document.createDocumentFragment();
  thumbnails.forEach(( photo) => {
    const { url, likes, comments } = photo;
    const photoUsersProperty = photoUsersTemplate.cloneNode(true);
    photoUsersProperty.querySelector('.picture__img').src =url;
    photoUsersProperty.querySelector('.picture__likes').textContent =likes;
    photoUsersProperty.querySelector('.picture__comments').textContent =comments.length;
    photoUsersProperty.addEventListener('click', () => renderFullSizePhoto(photo));
    photoListFragment.append(photoUsersProperty);
  });

  userPhotoContainer.append(photoListFragment);

};


export{renderThumbnails};

