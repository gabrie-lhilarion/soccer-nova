import HtmlString from './htmlstring.js';
import Quries from './queries.js';
import Utils from './utils.js';

class Dom {
  static get elements() {

    const {
      emptyListInfo,
      initialContent,
      addPlayerForm,
    } 
    = HtmlString.domStrings;

    const {
      appContainer, 
      addPlayerButton,
      savePlayerButton, 
      numberOfPlayers,
      playersContainer, 
      getAddPlayerForm, 
    } 
    = Quries.domQueries;

    const {
      resetForm,
      addPlayerToList,
      formIsValid,
      heighLightErrors,
      replaceButton,
      displayImagePreview,
    } 
    = Utils.domFunctions( getAddPlayerForm, numberOfPlayers );

    return {
      appContainer,
      emptyListInfo,
      initialContent,
      addPlayerForm,
      addPlayerButton,
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
    };
  }
}

export default Dom;