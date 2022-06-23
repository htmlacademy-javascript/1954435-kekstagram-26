//import {createPhotoObject} from './data.js';

const renderThumbnais=(thumbnails)=>{
  const userPhotoContainer = document.querySelector('.pictures');
  const photoUsersTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const photoListFragment = document.createDocumentFragment();
  thumbnails.forEach(({url,likes,comments}) => {
    const photoUsersProperty = photoUsersTemplate.cloneNode(true);
    photoUsersProperty.querySelector('.picture__img').src =url;
    photoUsersProperty.querySelector('.picture__likes').textContent =likes;
    photoUsersProperty.querySelector('.picture__comments').textContent =comments.length;

    photoListFragment.appendChild(photoUsersProperty);
  });

  userPhotoContainer.appendChild(photoListFragment);
};
//const photoUsers=createPhotoObject;
export{renderThumbnais};

