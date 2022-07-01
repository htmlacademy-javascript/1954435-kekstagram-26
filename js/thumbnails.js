import {renderPhotoElement} from './full-photo.js';

const renderThumbnais=(thumbnails)=>{
  const userPhotoContainer = document.querySelector('.pictures');
  const photoUsersTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const photoListFragment = document.createDocumentFragment();
  thumbnails.forEach(({ url, likes, comments }) => {
    //const { url, likes, comments } = photo;
    const photoUsersProperty = photoUsersTemplate.cloneNode(true);
    photoUsersProperty.querySelector('.picture__img').src =url;
    photoUsersProperty.querySelector('.picture__likes').textContent =likes;
    photoUsersProperty.querySelector('.picture__comments').textContent =comments.length;
    //photoUsersProperty.addEventListener('click', () => renderPhotoElement(photo));
    /*photoUsersProperty.querySelector('.picture').addEventListener('click', (evt) => {
      evt.preventDefault();
      renderPhotoElement(photo);
    });*/
    photoListFragment.append(photoUsersProperty);
  });

  userPhotoContainer.append(photoListFragment);

  //Функция для связки миниатюр и больших фото

  const previews = userPhotoContainer.querySelectorAll('.picture');

  const initBigPicture = (item, dataPicture) => {
    item.addEventListener('click', () => {
      renderPhotoElement(dataPicture);
    });
  };

  for (let i = 0; i < thumbnails.length; i++) {
    initBigPicture(previews[i], thumbnails[i]);
  }
};


export{renderThumbnais};

