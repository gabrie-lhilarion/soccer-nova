/**
 * @jest-environment jsdom
 */

import Utils from '../js/utils.js';

const {
    getAddPlayerForm,
    displayImagePreview,  // can't figure this out
    formIsValid,
    heighLightErrors,
    addPlayerToList,
    resetForm,
    numberOfPlayers,
} 
= Utils.domFunctions()

describe('Utility fuctions for the app', () => {

    test('Adds player to list', () => {

        const soccerNova = document.createElement('section');

        soccerNova.id = 'soccer-nova';

        soccerNova.innerHTML = 
        '<div id="empty-list">' +
        '<p class="empty-list-info-text">' +
            'Your Super Nova list is empty, <br/>' +
            'add players to have them display here!' +
        '</p>' +
        '<form id="add-player-form">' +

            '<div class="form-inner-1">' +
                '<div class="with-40">' +
                    '<img />' +
                    '<input name="image"  value="[\'my-file.jpg\']" type="file">' +
                '</div>' +

                '<div  class="with-60">' +
                    '<div>' +
                        '<input type="text" value="gabriel" placeholder="First Name" />' +
                    '</div>' +
                    '<div>' +
                        '<input type="text" value="hilarion" placeholder="Last Name" />' +
                    '</div>' +
                    '<div>' +
                        '<input type="text" value="man u" placeholder="Club" />' +
                    '</div>' +
                    '<div>' +
                    '<input type="number"  value="56" placeholder="Number of goal" />' +
                    '</div>' +
                    ' <div>' +
                        '<input type="number"  value="24" placeholder="Age" />' +
                    '</div>' +
                '</div>'+
            
            '</div>'+
        '</form>' +
        '<p class="add-player-container">' +
            '<button id="save-player"> &plus;<br/> Add Player</button>' +
        '</p>' +
        '</div>';

        document.body.appendChild(soccerNova);
        let numOflayers = document.querySelectorAll('.player').length;
        // remember numOflayers is equivalent to numberOfPlayers()
       
        expect(numOflayers).toBe(0);
        expect(numberOfPlayers()).toBe(0);

        // add a player
        addPlayerToList(getAddPlayerForm);
       
        numOflayers = document.querySelectorAll('.player').length;
        expect(numOflayers).toBe(1);
        expect(numberOfPlayers()).toBe(1);

    });

    test('Resets form inputs', () => {
        const myform = 
        '<form id="add-player-form">' +

            '<div class="form-inner-1">' +
                '<div class="with-40">' +
                    '<img />' +
                    '<input name="image" files="[\'my-file.jpg\']" type="file">' +
                '</div>' +

                '<div  class="with-60">' +
                    '<div>' +
                        '<input type="text" value="gabriel" placeholder="First Name" />' +
                    '</div>' +
                    '<div>' +
                        '<input type="text" value="hilarion" placeholder="Last Name" />' +
                    '</div>' +
                    '<div>' +
                        '<input type="text" value="man u" placeholder="Club" />' +
                    '</div>' +
                    '<div>' +
                    '<input type="number"  value="56" placeholder="Number of goal" />' +
                    '</div>' +
                    ' <div>' +
                        '<input type="number"  value="24" placeholder="Age" />' +
                    '</div>' +
                '</div>'+
            
            '</div>'+
        '</form>';
        document.body.innerHTML = myform;
        const inputs = [...document.querySelectorAll('form input')];
        expect(inputs[1].value).toBe('gabriel');
        expect(inputs[2].value).toBe('hilarion');
        expect(inputs[3].value).toBe('man u');

        resetForm(getAddPlayerForm);

        expect(inputs[1].value).toBe('');
        expect(inputs[2].value).toBe('');
        expect(inputs[3].value).toBe('');
    })

    test('checks if form has valid inputs', () => {
        const filledForm = 
        '<form id="add-player-form">' +

            '<div class="form-inner-1">' +
                '<div class="with-40">' +
                    '<img />' +
                '</div>' +

                '<div  class="with-60">' +
                    '<div>' +
                        '<input type="text" value="gabriel" placeholder="First Name" />' +
                    '</div>' +
                    '<div>' +
                        '<input type="text" value="hilarion" placeholder="Last Name" />' +
                    '</div>' +
                    '<div>' +
                        '<input type="text" value="man u" placeholder="Club" />' +
                    '</div>' +
                    '<div>' +
                    '<input type="number"  value="56" placeholder="Number of goal" />' +
                    '</div>' +
                    ' <div>' +
                        '<input type="number"  value="24" placeholder="Age" />' +
                    '</div>' +
                '</div>'+
            
            '</div>'+
        '</form>';
        document.body.innerHTML = filledForm;
        expect( formIsValid(getAddPlayerForm) ).toBe(true);

        resetForm(getAddPlayerForm)

        expect( formIsValid(getAddPlayerForm) ).toBe(false);
    })
 
})