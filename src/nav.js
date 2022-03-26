let navBar = (function () {
    //creating elements:
    let theNav = document.createElement('nav');
    let theRestaurantName = document.createElement('h1');
    let theNavMenusUl = document.createElement('ul');
    let theNavMenusHome = document.createElement('li');
    let theNavMenusMenu = document.createElement('li');
    let theNavMenusContact = document.createElement('li');

    //adding class:
    theNavMenusUl.classList.add('nav-menus');
    theNavMenusHome.classList.add('nav-menu-home', 'navMenuHome');
    theNavMenusMenu.classList.add('nav-menu-menu', 'navMenuMenu');
    theNavMenusContact.classList.add('nav-menu-contact', 'navMenuContact');


    //element text:
    theRestaurantName.textContent = "Le French Restaurant";
    theNavMenusHome.textContent = "Home";
    theNavMenusMenu.textContent = "Menu";
    theNavMenusContact.textContent = "Contact";

    //burger icon
    let burgerIconContainer = document.createElement('div');
    let burgerIcon = document.createElement('ion-icon');
    burgerIconContainer.classList.add('burger-icon-container');
    burgerIcon.setAttribute('name', 'menu-outline');

    burgerIconContainer.append(burgerIcon);


    //appending elements:
    theNavMenusUl.append(theNavMenusHome, theNavMenusMenu, theNavMenusContact);

    theNav.append(theRestaurantName, theNavMenusUl, burgerIconContainer)

    return {
        theNav,
        theRestaurantName,
        theNavMenusUl,
        theNavMenusHome,
        theNavMenusMenu,
        theNavMenusContact,

        burgerIconContainer,
        burgerIcon
    }
})()

let mobileNav = (function () {
    let theMobileNavContainer = document.createElement('div');
    theMobileNavContainer.classList.add('mobile-nav-container', 'hide');

    //close icon and restaurant name
    let nameAndIcon = document.createElement('div');
    nameAndIcon.classList.add('name-and-icon');
    let theRestaurantName = document.createElement('h1');
    theRestaurantName.textContent = "Le French Restaurant";

    let closeIconContainer = document.createElement('div');
    closeIconContainer.classList.add('close-icon-container')
    let closeNav = document.createElement('ion-icon');
    closeNav.setAttribute('name', 'close-outline');

    closeIconContainer.append(closeNav)

    nameAndIcon.append(theRestaurantName, closeIconContainer);

    //Page Links
    let theNavMenusUl = document.createElement('ul');
    let theNavMenusHome = document.createElement('li');
    let theNavMenusMenu = document.createElement('li');
    let theNavMenusContact = document.createElement('li');

    theNavMenusUl.classList.add('mob-nav-menus');
    theNavMenusHome.classList.add('mob-nav-menu-home', 'navMenuHome');
    theNavMenusMenu.classList.add('mob-nav-menu-menu', 'navMenuMenu');
    theNavMenusContact.classList.add('mob-nav-menu-contact', 'navMenuContact');

    theNavMenusHome.textContent = "Home";
    theNavMenusMenu.textContent = "Menu";
    theNavMenusContact.textContent = "Contact";

    theNavMenusUl.append(theNavMenusHome, theNavMenusMenu, theNavMenusContact);

    //appending to container
    theMobileNavContainer.append(nameAndIcon, theNavMenusUl);

    return {
        theMobileNavContainer,

        nameAndIcon,
        theRestaurantName,
        closeIconContainer,
        closeNav,

        theNavMenusUl,
        theNavMenusHome,
        theNavMenusMenu,
        theNavMenusContact,
    }

})()

export {
    navBar,
    mobileNav
}