import Action from "./action";

const { editPlayer, dom: { initialContent, appContainer } } = Action;

class UI {

    static display() {       
        appContainer.innerHTML = `
            ${initialContent}
        `;
    }    

    static runApp() {

        UI.display();

        appContainer.addEventListener("click", clickEvent => editPlayer(clickEvent));

    }

}

export default UI;