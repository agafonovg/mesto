/* Карточки */
const initialCards = [
  {
    name: 'Отличие Agile от WF',
    link: 'https://i.pinimg.com/originals/b1/7e/d3/b17ed34d5f685429db5ec665fb79d2ea.png'
  },
  {
    name: 'Жизнь менеджера',
    link: 'https://uagolos.com/wp-content/uploads/2021/03/image2.png'
  },
  {
    name: 'Проектный менеджемент это...',
    link: 'https://alpha.invensislearning.com/storage/images/articles/Info-graphics/project-managers-responsibilities.png'
  },
  {
    name: 'Процесс VS Проект',
    link: 'https://project.pm/wp-content/uploads/2019/01/Project-Vs-Operations.-1.png'
  },
  {
    name: 'Стейкхолдеры',
    link: 'https://sun9-20.userapi.com/impg/I-yEt-XCnDWHaYRniPDF552iqC9MjzMNM3S7kQ/SouKYS9xSng.jpg?size=604x410&quality=96&sign=4d03c4b1d862cb4ab0615383f7eca76f&type=album'
  },
  {
    name: 'Фазы проектного менеджемента',
    link: 'https://webcatcher.ru/wp-content/uploads/2019/08/ris.-2-stadii-upravlenija-proektami.jpg'
  }
];

const profileEditButton = document.querySelector('.profile__button_type_edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const newCardButton = document.querySelector('.profile__button_type_add');
const cardsContainer = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card').content;

const profileEditPopup = document.querySelector('.popup_type_edit-profile');
const profileEditForm = profileEditPopup.querySelector('.popup__form');
const profileNameInput = profileEditPopup.querySelector('.popup__input_type_name');
const profileJobInput = profileEditPopup.querySelector('.popup__input_type_job');

const newCardPopup = document.querySelector('.popup_type_add-card');
const newCardForm = newCardPopup.querySelector('.popup__form');
const newCardTitle = newCardPopup.querySelector('.popup__input_type_title');
const newCardLink = newCardPopup.querySelector('.popup__input_type_link');

const imagePopup = document.querySelector('.popup_type_image');
const imagePopupFigure = imagePopup.querySelector('.popup__image');
const imagePopupCaption = imagePopup.querySelector('.popup__image-caption');

const popupCloseButtons = document.querySelectorAll('.popup__cancel-button');


/* Функция добавляет карточку/карточки на страницу */
function renderCards (container, ...cards) {
  cards.forEach( card => {
    container.prepend( getNewCard(card.name, card.link) );
  });
}

/* Функция создает из шаблона элемент с новой карточкой и возвращает его */
 function getNewCard (name, link) {
  /* Создание элемента из шаблона */
  const card = cardTemplate.querySelector('.card').cloneNode(true);

  /* Заполнение содержимого */
  card.querySelector('.card__image').src = link;
  card.querySelector('.card__image').alt = name;
  card.querySelector('.card__title').textContent = name;

  /* Обработчики нажатий */
  card.querySelector('.card__image').addEventListener('click', showImagePopup);
  card.querySelector('.card__like-button').addEventListener('click', likeCard);
  card.querySelector('.card__delete-button').addEventListener('click', deleteCard);

  return card;
}

/* Отображение карточек при загрузке страницы */
renderCards(cardsContainer, ...initialCards);

/* Функция нажатия на лайк */
function likeCard(event) {
  event.target.closest('.card__like-button').classList.toggle('card__like-button_active');
}

/* Функция удаления карточки при нажатии на кнопку */
function deleteCard(event) {
  event.target.closest('.card').remove();
}

/* Функция открывает нужный попап */
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

/* Функция закрывает текущий попап */
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

/* Функция сохраняет введенные данные и закрывает попап */
function saveProfileInfo(event) {
  event.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closePopup(profileEditPopup);
}

/* Функция сохраняет введенные данные и закрывает попап */
function saveNewCard(event) {
  event.preventDefault();

  const card = {
    name: newCardTitle.value,
    link: newCardLink.value
  };

  renderCards(cardsContainer, card);
  closePopup(newCardPopup);
  newCardForm.reset();
}

/* Функция открывает попап с увеличенной картинкой */
function showImagePopup(event) {
  imagePopupFigure.src = event.target.src;
  imagePopupFigure.alt = event.target.alt;
  imagePopupCaption.textContent = event.target.closest('.card').querySelector('.card__title').textContent;

  openPopup(imagePopup);
}

/* Обработчки событий */

profileEditButton.addEventListener('click', function () {
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
  openPopup(profileEditPopup);
});

profileEditForm.addEventListener('submit', saveProfileInfo);

newCardButton.addEventListener('click', function () {
  openPopup(newCardPopup);
});
newCardForm.addEventListener('submit', saveNewCard);

popupCloseButtons.forEach(button => button.addEventListener('click', function() {
  closePopup(button.closest('.popup'));
}));

/* Escape */

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const popupToClose = document.querySelector('.popup_opened');
    if (popupToClose) {
      closePopup(popupToClose);
    }
  }
});