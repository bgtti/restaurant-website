import "./main.css";
import { navBar, mobileNav } from "./nav.js";
import { footer } from "./footer.js";
import { HomePage } from "./home.js"
import { MenuPage } from "./menu.js";
import { ContactPage } from "./contact.js"

let theHTML = document.querySelector("#content");
let theBody = document.createElement("div");
theBody.classList.add("pageContent");

theHTML.appendChild(navBar.theNav)
theHTML.appendChild(mobileNav.theMobileNavContainer)
theHTML.appendChild(theBody)
theHTML.appendChild(footer.theFooter)

//displaying home page first
theBody.append(HomePage.homeDiv)
navBar.theNavMenusHome.classList.add('selected-nav-item')
mobileNav.theNavMenusHome.classList.add('selected-nav-item')

//page scroll up on refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

//Event listeners: open and close mobile menu
mobileNav.closeIconContainer.addEventListener('click', () => {
    mobileNav.theMobileNavContainer.classList.add('hide');
}, false)

navBar.burgerIconContainer.addEventListener('click', () => {
    mobileNav.theMobileNavContainer.classList.remove('hide');
}, false)

//Function change between Nav pages
let navigatingSite = function (pageDiv, navLink, mobileLink) {
    theBody.removeChild(theBody.firstChild);
    theBody.append(pageDiv);

    navBar.theNavMenusHome.classList.remove('selected-nav-item')
    mobileNav.theNavMenusHome.classList.remove('selected-nav-item')

    navBar.theNavMenusMenu.classList.remove('selected-nav-item')
    mobileNav.theNavMenusMenu.classList.remove('selected-nav-item')

    navBar.theNavMenusContact.classList.remove('selected-nav-item')
    mobileNav.theNavMenusContact.classList.remove('selected-nav-item')

    navLink.classList.add('selected-nav-item')
    mobileLink.classList.add('selected-nav-item')

}
//Event listener: change between pages in NAV
navBar.theNavMenusHome.addEventListener('click', () => {
    navigatingSite(HomePage.homeDiv, navBar.theNavMenusHome, mobileNav.theNavMenusHome)
}, false)

mobileNav.theNavMenusHome.addEventListener('click', () => {
    navigatingSite(HomePage.homeDiv, navBar.theNavMenusHome, mobileNav.theNavMenusHome)
    mobileNav.theMobileNavContainer.classList.add('hide')
}, false)

navBar.theNavMenusMenu.addEventListener('click', () => {
    navigatingSite(MenuPage.menuDiv, navBar.theNavMenusMenu, mobileNav.theNavMenusMenu)
}, false)

mobileNav.theNavMenusMenu.addEventListener('click', () => {
    navigatingSite(MenuPage.menuDiv, navBar.theNavMenusMenu, mobileNav.theNavMenusMenu)
    mobileNav.theMobileNavContainer.classList.add('hide')
}, false)

navBar.theNavMenusContact.addEventListener('click', () => {
    navigatingSite(ContactPage.contactDiv, navBar.theNavMenusContact, mobileNav.theNavMenusContact)
}, false)

mobileNav.theNavMenusContact.addEventListener('click', () => {
    navigatingSite(ContactPage.contactDiv, navBar.theNavMenusContact, mobileNav.theNavMenusContact)
    mobileNav.theMobileNavContainer.classList.add('hide')
}, false)

//Event listener: change between pages in buttons

HomePage.sectionOneButton.addEventListener('click', () => {
    navigatingSite(MenuPage.menuDiv, navBar.theNavMenusMenu, mobileNav.theNavMenusMenu)
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}, false)

HomePage.sectionFourButton.addEventListener('click', () => {
    navigatingSite(ContactPage.contactDiv, navBar.theNavMenusContact, mobileNav.theNavMenusContact)
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}, false)

MenuPage.menuPageBtn.addEventListener('click', () => {
    navigatingSite(ContactPage.contactDiv, navBar.theNavMenusContact, mobileNav.theNavMenusContact)
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}, false)
