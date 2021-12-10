import '../css/style.css';
import UI from './ui.js';

const {
  elements, 
  runApp,
} = UI;

const { 
  initialContent 
} = elements;

const myAppContainer = document.getElementById('soccer-nova');
myAppContainer.innerHTML = `
    ${initialContent}
`;

/*
displayApp();

if I do displaay(), it will work but as storytellers
we make our code read well and look clean
*/
document.addEventListener('DOMContentLoaded', runApp);
