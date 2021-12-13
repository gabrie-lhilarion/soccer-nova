class Utils {
    static domFunctions( myForm, numberOfPlayers ) {
    
    const moveImageToLeft = (element) => {
        const divWithPlayerImage = element.querySelector('.form-inner-1');
        divWithPlayerImage.classList.add('player-inner-left');
        divWithPlayerImage.classList.remove('form-inner-1');
      }
  
      const moveImageToRight = (element) => {
        const divWithPlayerImage = element.querySelector('.form-inner-1');
        divWithPlayerImage.classList.add('player-inner-right');
        divWithPlayerImage.classList.remove('form-inner-1');
      }
  
      const  removeEmptyListInfoText = () => {
        if (document.querySelector('.empty-list-info-text')) {
          document.querySelector('.empty-list-info-text').remove();
        }
      }
  
      const resetForm = (form) => {
        const formInputs = [...form().querySelectorAll('input')];
        formInputs.forEach((input) => { input.value = ''; });
        formInputs[0].previousElementSibling.src = '';
      };
  
      const addPlayerToList = (form) => {
  
        removeEmptyListInfoText();
  
        const newPlayerDiv = document.createElement('div');
        newPlayerDiv.classList.add('player');
  
        const currentForm = form();
        newPlayerDiv.innerHTML = currentForm.innerHTML;
  
        const playerDeleteButton = newPlayerDiv.querySelector('.close-form');
  
        if (numberOfPlayers() % 2 === 0) {
  
          playerDeleteButton.className = 'delete-right';
  
          moveImageToLeft(newPlayerDiv)
  
        } else {
  
          playerDeleteButton.className = 'delete-left';
  
          moveImageToRight(newPlayerDiv)
  
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
  
      const heighLightErrors = (form) => {

        const filledForm = [...form().querySelectorAll('input')];
  
        filledForm.forEach( input => {
          input.value.trim() < 2 ? input.classList.add('border-red') : null;
        });
  
        setTimeout( () => removeHeightLight(myForm), 2000)
      }
  
      const removeHeightLight = (form) => {
        const heighLightedForm = [...form().querySelectorAll('input')];
        heighLightedForm.forEach( input =>  input.classList.remove('border-red') )
      }
  
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
        resetForm,
        addPlayerToList,
        formIsValid,
        heighLightErrors,
        replaceButton,
        displayImagePreview,
      }
    }
}

export default Utils;