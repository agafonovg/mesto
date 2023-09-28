import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  /**
   * Класс отвечает за работу с попапом, содержащим форму
   *
   * Параметры:
   * popupSelector - селектор элемента с попапом
   * handleSubmit - обработчик отправки формы
   */

  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    // this._submitButton = this._popup.querySelector('.popup__save-button');
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach(input => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  close() {
    super.close();
    this._form.reset();
    // this._submitButton.classList.add('popup__save-button_disabled');
  }
}