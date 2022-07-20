import { showAlert } from './util.js';

const Urls = {
  GET: 'https://26.javascript.pages.academy/kekstagram/data',
  SEND: 'https://26.javascript.pages.academy/kekstagram'
};

const MessagesError = {
  GET_ERROR: 'Не удалось получить изображения. Обновите страницу',
  SEND_ERROR: 'Не удалось опубликовать фотографию. Попробуйте ещё раз',
};

const getData = (onSuccess) => {
  fetch(Urls.GET)
    .then((response) => {
      if (!response.ok) {
        throw new Error(MessagesError.GET_ERROR);
      }
      return response.json();
    })
    .then((posts) => {
      onSuccess(posts);
    })
    .catch(() => {
      showAlert(MessagesError.GET_ERROR);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    Urls.SEND,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(MessagesError.SEND_ERROR);

      }
      onSuccess();
    })
    .catch(() => {
      onFail(MessagesError.SEND_ERROR);

    });

};

export { getData, sendData };
