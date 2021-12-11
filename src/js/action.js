import Dom from './dom.js';

const {
  appContainer,
  emptyListInfo,
  initialContent,
  addPlayerForm,
  savePlayerButton,
  form,
  replaceButton,
  displayImagePreview,
  formIsValid,
  acceptThisPlayer,
  resetForm,
  numberOfPlayers,
  playersContainer,
} = Dom.elements;

class Action {
  static editPlayer(clickEvent) {
    const elementClicked = clickEvent.target;

    if (elementClicked.id === 'save-player') {
      if (formIsValid(form)) {
        acceptThisPlayer();
        resetForm();
      }
    }

    if (elementClicked.id === 'add-player') {
      if (!form()) {
        elementClicked.parentElement
          .insertAdjacentHTML('beforebegin', addPlayerForm);

        replaceButton(elementClicked, 'save-player', 'SAVE PLAYER');
      }
    }

    if (elementClicked.type?.toLowerCase() === 'file') {
      elementClicked.addEventListener('change', (fileInput) => displayImagePreview(fileInput));
    }

    if (elementClicked.className === 'close-form') {
      const currentForm = form();
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