
class MenuItem {
    constructor(title, description, price) {
        this.title = title;
        this.description = description;
        this.price = price;
    }

    makeElement() {
        let menuItemContainer = document.createElement('div');
        let menuItemTitle = document.createElement('h2');
        let menuItemDescription = document.createElement('p');
        let menuItemPrice = document.createElement('p');

        menuItemContainer.classList.add('menu-item-container');
        menuItemPrice.classList.add('menu-item-price');

        menuItemTitle.innerText = this.title;
        menuItemDescription.innerText = this.description;
        menuItemPrice.innerText = this.price;

        menuItemContainer.append(menuItemTitle, menuItemDescription, menuItemPrice);

        return {
            menuItemContainer,
            menuItemTitle,
            menuItemDescription,
            menuItemPrice
        }
    }
}

let theMenu = (function () {
    let menuItem01 = new MenuItem("Salade niçoise", "To a base of lettuce is added fresh tomatoes, boiled eggs, freshly grilled tuna, Niçoise Cailletier olives and anchovies.", "10 CHF")

    let menuItem02 = new MenuItem("Soupe à L’oignon", "Made with meat stock and browned onions garnished with gratinéed croutons and cheese on top.", "10 CHF")

    let menuItem03 = new MenuItem("Beurre Suzette Crêpe", "The beurre Suzette is a sauce of caramelized sugar and butter, tangerine or orange juice, zest, and Grand Marnier.", "15 CHF")

    let menuItem04 = new MenuItem("Boeuf Bourguignon", "Delicious red wine based beef stew with vegetables."
        , "25 CHF")

    let menuItem05 = new MenuItem("Blanquette de Veau", "A creamy veal stew made with lots of butter, cream, and carrots. Served with rice."
        , "25 CHF")

    let menuItem06 = new MenuItem("Confit de Canard", "Duck with a rich sauce containing cherries, red wine or orange. Served with mashed potatoes. "
        , "30 CHF")

    let menuItem07 = new MenuItem("Soufflé", "Tasty chocolate soufflé."
        , "15 CHF")

    let menuItem08 = new MenuItem("Brioche meringuée aux fraises", "Traditional strawberry meringue brioche"
        , "15 CHF")

    let menuItem09 = new MenuItem("Crêpe Choco-Banane", "Chocolate banana crepe."
        , "20 CHF")

    let menuItemsAll = [menuItem01, menuItem02, menuItem03, menuItem04, menuItem05, menuItem06, menuItem07, menuItem08, menuItem09];

    let menuItemsContainer = document.createElement('div');

    for (item of menuItemsAll) {
        menuItemsContainer.append(item.makeElement());
    }
    return {
        menuItemsAll,
        menuItemsContainer
    }
})()



let MenuPage = (function () {
    let pageTitle = document.createElement('h2');
    pageTitle.innerText = "Le Menu";

    let menuDiv = document.createElement('div');
    menuDiv.classList.add('home-container', 'page-container');

    //apending to container div
    menuDiv.append(pageTitle, theMenu.menuItemsContainer);

    return {
        pageTitle,
        menuDiv
    }
})()

export {
    MenuPage
}