import HtmlString from './htmlstring.js';

class Dom {
  static get elements() {
    const {
      emptyListInfo,
      initialContent,
      addPlayerForm,
    } = HtmlString.domStrings;

    const appContainer = document.getElementById('soccer-nova');

    const addPlayerButton = () => document.getElementById('add-player');

    const savePlayerButton = () => document.getElementById('save-player');

    const numberOfPlayers = () => document.querySelectorAll('.player').length;

    const playersContainer = () => document.getElementById('empty-list');

    const form = () => document.querySelector('form');

    const resetForm = () => {
      const formInputs = [...form().querySelectorAll('input')];
      formInputs.forEach((input) => { input.value = ''; });
      formInputs[0].previousElementSibling.src = '';
    };

    const acceptThisPlayer = () => {
      if (document.querySelector('.empty-list-info-text')) {
        document.querySelector('.empty-list-info-text').remove();
      }

      const newPlayerDiv = document.createElement('div');
      newPlayerDiv.classList.add('player');

      const currentForm = form();
      newPlayerDiv.innerHTML = currentForm.innerHTML;

      const playerDeleteButton = newPlayerDiv.querySelector('.close-form');

      if (numberOfPlayers() % 2 === 0) {
        playerDeleteButton.className = 'delete-right';
      } else {
        playerDeleteButton.className = 'delete-left';

        const forReversing = newPlayerDiv.querySelector('.form-inner-1');
        forReversing.classList.add('form-inner-2');
        forReversing.classList.remove('form-inner-1');
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

    const replaceButton = (target, identifier, text) => {
      target.id = identifier;
      target.innerHTML = text;
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
      acceptThisPlayer,
      resetForm,
      numberOfPlayers,
      playersContainer,
    };
  }
}

export default Dom;