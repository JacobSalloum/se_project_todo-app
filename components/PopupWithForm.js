import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
  }

  _getInputValues() {}

  _setEventListeners() {}
}

export default PopupWithForm;
