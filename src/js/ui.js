class UI {
  static get header() {
    return `
            <h1>   
                Soccer Nova
            </h1>
        `;
  }

  static get soccerNovaContent() {
    return `
            <div id="empty-list">
                <p class="info-text">
                    Your Super Nova list is empty, <br/>
                    add players to have them display here!
                </p>
                <p class="add-player-container">
                    <button id="add-player">Add Player</button>
                </p>
            </div>
        `;
  }

  static elements() {
    let addPlayerForm;
    let appContainer;
    let emptyListInfo;

    return {
      addPlayerForm,
      appContainer,
      emptyListInfo,
    };
  }

  static displayApp() {
    // console.log('Displaying app ..');
  }
}

export default UI;