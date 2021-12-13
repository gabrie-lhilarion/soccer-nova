import Dom from './dom.js';

const {
  appContainer,
  emptyListInfo,
  initialContent,
  addPlayerForm,
  savePlayerButton,
  getAddPlayerForm,
  replaceButton,
  displayImagePreview,
  formIsValid,
  heighLightErrors,
  addPlayerToList,
  resetForm,
  numberOfPlayers,
  playersContainer,
} = Dom.elements;

class Action {
  static addDeletePlayer(clickEvent) {
    const elementClicked = clickEvent.target;

    if (elementClicked.id === 'save-player') {

      if ( formIsValid(getAddPlayerForm) ) {
        addPlayerToList(getAddPlayerForm);
        resetForm(getAddPlayerForm);
      } else {
        heighLightErrors(getAddPlayerForm);
      }

    }

    if (elementClicked.id === 'add-player') {
      elementClicked.parentElement
      .insertAdjacentHTML('beforebegin', addPlayerForm);

      replaceButton(elementClicked, 'save-player', 'SAVE PLAYER');
    }

    if (elementClicked.type?.toLowerCase() === 'file') {
      elementClicked.addEventListener('change', (fileInput) => displayImagePreview(fileInput));
    }

    if (elementClicked.className === 'close-form') {

      const currentForm = getAddPlayerForm();

      const saveButton = savePlayerButton();

      currentForm.remove();

      replaceButton(saveButton, 'add-player', '&plus; <br/> add player');
    }

    if (elementClicked.className === 'delete-right' || elementClicked.className === 'delete-left') {

      elementClicked.parentElement.parentElement.remove();

      if (numberOfPlayers() === 0) {
        playersContainer().insertAdjacentHTML('afterbegin', emptyListInfo);
      }
    }
  }

  static get dom() {
    return {
      appContainer,
      initialContent,
    };
  }
}

export default Action;