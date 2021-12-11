class UI {
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

  static displayApp() {
    // console.log('Displaying app ..');
  }
}

export default UI;