import Action from "./action";

class UI {

    static get elements() {

        const appContainer = document.getElementById('soccer-nova');

        const  initialContent =  `
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

        const emptyListInfo = `
            <p class="info-text">
                Your Super Nova list is empty, <br/>
                add players to have them display here!
            </p>
        `;

        const addPlayerForm = `
            <form>
                <table>
                    <tr>
                        <td>
                            <img />
                            <input type="file">
                        </td>
                        <td>
                            <div>
                                <input type="text" placeholder="First Name" />
                            </div>
                            <div>
                                <input type="text" placeholder="Last Name" />
                            </div>
                            <div>
                                <input type="text" placeholder="Club" />
                            </div>
                            <div>
                                <input type="number" placeholder="Number of goal" />
                            </div>
                            <div>
                                <input type="number" placeholder="Age" />
                            </div>
                        </td>
                    </tr>
                </table>
            </form>
        `;

        return {
            appContainer,
            emptyListInfo,
            initialContent,
            addPlayerForm,
        };
    }

  static runApp() {
    const {
        appContainer,
        //emptyListInfo,
        //initialContent,
       // addPlayerForm
    } = UI;

    const {  } = Action;

    appContainer.addEventListener("click", e => )
  }
}

export default UI;