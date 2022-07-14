const scaleSettings={
  MIN: 25,
  MAX: 100,
  STEP_SCALE: 25,
};

//Поле значения масштаба изображения
const scaleControlNode=document.querySelector('.scale__control--value');
//Кнопка уменьшения масштаба
const buttonDecreaseScale=document.querySelector('.scale__control--smaller');
//Кнопка увеличения масштаба
const buttonIncreaseScale=document.querySelector('.scale__control--bigger');
//Предварительный просмотр изображения
const previewPhotoNode=document.querySelector('.img-upload__preview img');


const resetScaleValue = () => {
  scaleControlNode.value = `${scaleSettings.MAX}%`;
  previewPhotoNode.style.transform = '';
};

const changeScaleValue = (increase) => {
  let photoScaleValue = parseInt(scaleControlNode.value, 10);
  if (increase) {
    if (photoScaleValue < scaleSettings.MAX) {
      photoScaleValue += scaleSettings.STEP_SCALE;
    }
  } else {
    if (photoScaleValue > scaleSettings.MIN) {
      photoScaleValue -= scaleSettings.STEP_SCALE;
    }
  }
  scaleControlNode.value = `${photoScaleValue}%`;
  previewPhotoNode.style.transform = `scale(${photoScaleValue / 100})`;
};

const onIncreaseScaleButtonClick = () => changeScaleValue(true);
const onDecreaseScaleButtonClick = () => changeScaleValue(false);
buttonIncreaseScale.addEventListener('click', onIncreaseScaleButtonClick);
buttonDecreaseScale.addEventListener('click', onDecreaseScaleButtonClick);

export { resetScaleValue };
