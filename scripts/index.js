console.log('скрипт подключен');

// Получить элементы (попап, кнопка открытия, крестик)
const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.menu__open-popup');
const popupCloseButton = popup.querySelector('.popup__close');

// Навесить слушатель на клик по кнопке О проекте
const popupToggle = function (event) {
  popup.classList.toggle('popup_opened');
  console.log('кликнули на кнопку');
};

popupOpenButton.addEventListener('click', popupToggle);

// Навесить слушатель на клик по крестику
popupCloseButton.addEventListener('click', popupToggle);

//Бонусики
const header = document.querySelector('.header');
header.addEventListener('click', function (event) {
  console.log('кликнули на хедер');
});

// Применять всплытие
const closePopupByClickingOnOverlay = function (event) {
  if (event.target == event.currentTarget) {
    popupToggle();
  }
};

popup.addEventListener('click', closePopupByClickingOnOverlay);