const sliderParameters = {
  chrome: {
    filter: 'grayscale',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
  },
  sepia: {
    filter: 'sepia',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
  },
  marvin: {
    filter: 'invert',
    unit: '%',
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
  },
  phobos: {
    filter: 'blur',
    unit: 'px',
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
  },
  heat: {
    filter: 'brightness',
    unit: '',
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
  }
};


//Предварительный просмотр изображения
const previewPhotoNode=document.querySelector('.img-upload__preview');
//Контейнер слайдера
const rangeSliderContainer = document.querySelector('.img-upload__effect-level');
//Поле изменения значения эффекта
const effectLevelValue = document.querySelector('.effect-level__value');
//Слайдер
const rangeSlider = document.querySelector('.effect-level__slider');
//Cписок эффектов
const effectList = document.querySelector('.effects__list');

//Создаём слайдер
noUiSlider.create(rangeSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
  connect: 'lower',
});

// скрытие эффектов
const resetEffects = () => {
  rangeSlider.setAttribute('disabled', true);
  rangeSliderContainer.classList.add('hidden');
  previewPhotoNode.className = 'img-upload__preview';
  previewPhotoNode.style.filter = '';
  effectLevelValue.value = '';
};


// смена эффектов
const onEffectListChange = (evt) => {

  const selectedEffect = evt.target.value;
  if (selectedEffect === 'none') {
    resetEffects();
  } else {
    // изменение настроек слайдера
    rangeSlider.removeAttribute('disabled');
    rangeSliderContainer.classList.remove('hidden');
    previewPhotoNode.className = 'img-upload__preview';
    previewPhotoNode.classList.add(`effects__preview--${selectedEffect}`);
    rangeSlider.noUiSlider.updateOptions(sliderParameters[selectedEffect].options);
  }

};

effectList.addEventListener('change', onEffectListChange);

// изменение интенсивности эффекта
rangeSlider.noUiSlider.on('update', () => {

  const valueRangeSlider = rangeSlider.noUiSlider.get();
  effectLevelValue.value = valueRangeSlider;

  const effectCheckedValue = document.querySelector('input[name="effect"]:checked');
  if (effectCheckedValue && effectCheckedValue.value !== 'none') {
    const { filter, unit } = sliderParameters[effectCheckedValue.value];
    previewPhotoNode.style.filter = `${filter}(${valueRangeSlider}${unit})`;
  }
});

export { resetEffects };


