import Action from './action.js';

const {
  addDeletePlayer,
  dom: {
    initialContent,
    appContainer,
},

} = Action;

class UI {

  static display() {
    
    appContainer
    .innerHTML = `
            ${initialContent}
    `;
  }

  static runApp() {
    UI.display();

    appContainer.addEventListener(
      'click',
      (clickEvent) => addDeletePlayer(clickEvent),
    );
  }
  
}

export default UI;