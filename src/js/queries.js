class Quries {

    static get domQueries() {
        const appContainer = document.getElementById('soccer-nova');

        const addPlayerButton = () => document.getElementById('add-player');
    
        const savePlayerButton = () => document.getElementById('save-player');
    
        const numberOfPlayers = () => document.querySelectorAll('.player').length;
    
        const playersContainer = () => document.getElementById('empty-list');
    
        const getAddPlayerForm = () => document.querySelector('form');

        return {
            appContainer, 
            addPlayerButton,
            savePlayerButton, 
            numberOfPlayers,
            playersContainer, 
            getAddPlayerForm, 
        }
    }
}

export default Quries;