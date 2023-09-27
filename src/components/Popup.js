export default class Popup {
  /**
   * Класс отвечает за открытие и закрытие попапа
   *
   * Параметры:
   * popupSelector - селектор попапа
   * formElement - форма внутри попапа
   */
  constructor(popupSelector, formElement) {
    this._popup = document.querySelector(popupSelector);
    this._form = formElement;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    
     // Деактивируем кнопку сабмита при открытии попапа
     if (this._popup.querySelector('.popup__save-button') && this._popup.querySelector('.popup__type-edit')) {
      this._disableSubmitButton();
    }    
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget) this.close();
    });

    this._popupCloseButton = this._popup.querySelector('.popup__cancel-button');
    this._popupCloseButton.addEventListener('click', () => {
      this.close();
    });
  }

  _disableSubmitButton() {
    //const submitButton = this._popup.querySelector('.popup__save-button');
    submitButton.classList.remove('active-class'); // Удаляем класс активной кнопки
    submitButton.classList.add('popup__save-button_disabled'); // Добавляем класс для дизейбла кнопки
  }
}