class HtmlString {

    static get domStrings() {

        const  initialContent =  `
            <div id="empty-list">
                <p class="empty-list-info-text">
                    Your Super Nova list is empty, <br/>
                    add players to have them display here!
                </p>
                <p class="add-player-container">
                    <button id="add-player"> &plus;<br/> Add Player</button>
                </p>
            </div>
        `;

        const emptyListInfo = `
            <p class="empty-list-info-text">
                Your Super Nova list is empty, <br/>
                add players to have them display here!
            </p>
            `;

        const addPlayerForm = `
            <form id="add-player-form">
                <div>
                    <span class="close-form"> &times</span>
                    <p class="clear"></p>
                </div>
                <div class="form-inner-1">
                
                    <div class="with-40">
                        <img />
                        <input name="image" type="file">
                    </div>
                    <div  class="with-60">
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
                    </div>
                    
                </div>
            </form>
        `;

        return {
            initialContent,
            emptyListInfo,
            addPlayerForm,
        }

    }
}

export default HtmlString;