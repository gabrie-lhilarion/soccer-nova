import HtmlString from './htmlstring.js';

class Dom {
  static get elements() {
    const {
      emptyListInfo,
      initialContent,
      addPlayerForm,
    } 
    = HtmlString.domStrings;

    const appContainer = document.getElementById('soccer-nova');

    const addPlayerButton = () => document.getElementById('add-player');

    const savePlayerButton = () => document.getElementById('save-player');

    const numberOfPlayers = () => document.querySelectorAll('.player').length;

    const playersContainer = () => document.getElementById('empty-list');

    const form = () => document.querySelector('form');

    const  removeEmptyListInfoText = () => {
      if (document.querySelector('.empty-list-info-text')) {
        document.querySelector('.empty-list-info-text').remove();
      }
    }

    const resetForm = () => {
      const formInputs = [...form().querySelectorAll('input')];
      formInputs.forEach((input) => { input.value = ''; });
      formInputs[0].previousElementSibling.src = '';
    };

    const addPlayerToList = () => {

      removeEmptyListInfoText();

      const newPlayerDiv = document.createElement('div');
      newPlayerDiv.classList.add('player');

      const currentForm = form();
      newPlayerDiv.innerHTML = currentForm.innerHTML;

      const playerDeleteButton = newPlayerDiv.querySelector('.close-form');

      if (numberOfPlayers() % 2 === 0) {

        playerDeleteButton.className = 'delete-right';

        const moveImageToLeft = newPlayerDiv.querySelector('.form-inner-1');
        moveImageToLeft.classList.add('player-inner-right');
        moveImageToLeft.classList.remove('form-inner-1');

      } else {

        playerDeleteButton.className = 'delete-left';

        const moveImageToRight = newPlayerDiv.querySelector('.form-inner-1');
        moveImageToRight.classList.add('player-inner-left');
        moveImageToRight.classList.remove('form-inner-1');

      }

      const filledForm = [...newPlayerDiv.querySelectorAll('input')];
      filledForm.forEach((input, index) => {

        if (input?.files) {

          const playerImage = input.previousElementSibling;
          playerImage.classList.add('player-image');

        } else {

          input.parentElement.classList.add('player-info-text');
          input.parentElement.innerHTML = `
                        ${input.getAttribute('placeholder')}:  
                        <strong class="info-txt">
                            ${currentForm.querySelectorAll('input')[index].value.trim()} 
                        </strong>
                    `;
                    
        }

      });

      currentForm.insertAdjacentElement('beforebegin', newPlayerDiv);
    };

    const formIsValid = (form) => {
      const filledForm = [...form().querySelectorAll('input')];

      return filledForm.every((input) => input.value.trim().length > 1);
    };

    const replaceButton = (targetButton, identifier, text) => {
      targetButton.id = identifier;
      targetButton.innerHTML = text;
    };

    const displayImagePreview = (fileInputChange) => {
      const src = URL.createObjectURL(fileInputChange.target.files[0]);

      const previewImage = fileInputChange.target.previousElementSibling;

      previewImage.src = src;
    };

    return {
      appContainer,
      emptyListInfo,
      initialContent,
      addPlayerForm,
      addPlayerButton,
      savePlayerButton,
      form,
      replaceButton,
      displayImagePreview,
      formIsValid,
      addPlayerToList,
      resetForm,
      numberOfPlayers,
      playersContainer,
    };
  }
}

export default Dom;