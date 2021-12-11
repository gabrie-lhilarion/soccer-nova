import Dom from "./dom";

const {
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
} = Dom.elements;

class Action {
    static editPlayer(clickEvent) {

       const elementClicked = clickEvent.target;

       if ( elementClicked.id === "save-player" ) {
           if (formIsValid(form)) {
                acceptThisPlayer();
                resetForm();
           }
       }

       if ( elementClicked.id === "add-player" ) {
            if ( !form() ) {
                elementClicked.parentElement
                .insertAdjacentHTML("beforebegin", addPlayerForm);

                replaceButton( elementClicked, "save-player", "SAVE PLAYER" );
            }
       }

       if ( elementClicked.type?.toLowerCase() ==="file" ) {
           elementClicked.addEventListener("change", (fileInput) => displayImagePreview(fileInput) );
       }

       if ( elementClicked.className === "close-form" ) {
           
           const currentForm = form(); 
           const saveButton = savePlayerButton();
           currentForm.remove();
           replaceButton( saveButton, "add-player", "&plus; <br/> add player" );
       }

    }

    static get dom() {

        return {
            appContainer,
            emptyListInfo,
            initialContent,
            addPlayerForm,
            addPlayerButton,
            form,
            replaceButton,
            displayImagePreview 
        }
    }

}

export default Action;