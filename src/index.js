import displayHome from './home';
import displayMenu from './menu';
import displayAbout from './about';
import './index.css';

const content = document.querySelector("#content");

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => displayHome(content));

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => displayMenu(content));

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", () => displayAbout(content));

displayHome(content);
