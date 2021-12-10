import "../css/style.css";
import UI from "./ui";

const { header, soccerNovaContent, displayApp } = UI;
const myAppContainer = document.getElementById("soccer-nova");
myAppContainer.innerHTML = `
    ${header}
    ${soccerNovaContent}
`;

/* 
displayApp(); 

if I do only displaay(), it will work but as storytellers 
we make our code read well and look clean
*/  
document.addEventListener("DOMContentLoaded", displayApp);