import "./main.css";
import { navBar, mobileNav } from "./nav.js";
import { footer } from "./footer.js";
import { HomePage } from "./home.js"
import { MenuPage } from "./menu.js";

let theHTML = document.querySelector("#content");
let theBody = document.createElement("div");
theBody.classList.add("pageContent");

theHTML.appendChild(navBar.theNav)
theHTML.appendChild(mobileNav.theMobileNavContainer)
theHTML.appendChild(theBody)
theHTML.appendChild(footer.theFooter)

theBody.append(HomePage.homeDiv)


//Event listeners: open and close mobile menu
mobileNav.closeIconContainer.addEventListener('click', () => {
    mobileNav.theMobileNavContainer.classList.add('hide');
}, false)

navBar.burgerIconContainer.addEventListener('click', () => {
    mobileNav.theMobileNavContainer.classList.remove('hide');
}, false)

//Event listener: change between pages
navBar.theNavMenusHome.addEventListener('click', () => {
    theBody.removeChild(theBody.firstChild);
    theBody.append(HomePage.homeDiv);
}, false)

navBar.theNavMenusMenu.addEventListener('click', () => {
    theBody.removeChild(theBody.firstChild);
    theBody.append(MenuPage.menuDiv);
}, false)