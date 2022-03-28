class MenuItem {
    constructor(title, category, description, price) {
        this.title = title;
        this.category = category;
        this.description = description;
        this.price = price;
    }
}

let theMenu = (function () {
    let menuItem01 = new MenuItem("Salade niçoise", "Starters", "To a base of lettuce is added fresh tomatoes, boiled eggs, freshly grilled tuna, Niçoise Cailletier olives and anchovies.", "10 CHF")

    let menuItem02 = new MenuItem("Soupe à L’oignon", "Starters", "Made with meat stock and browned onions garnished with gratinéed croutons and cheese on top.", "10 CHF")

    let menuItem03 = new MenuItem("Beurre Suzette Crêpe", "Starters", "The beurre Suzette is a sauce of caramelized sugar and butter, tangerine or orange juice, zest, and Grand Marnier.", "15 CHF")

    let menuItem04 = new MenuItem("Boeuf Bourguignon", "Main courses", "Delicious red wine based beef stew with vegetables."
        , "35 CHF")

    let menuItem05 = new MenuItem("Blanquette de Veau", "Main courses", "A creamy veal stew made with lots of butter, cream, and carrots. Served with rice."
        , "40 CHF")

    let menuItem06 = new MenuItem("Confit de Canard", "Main courses", "Duck with a rich sauce containing cherries, red wine or orange. Served with mashed potatoes. "
        , "35 CHF")

    let menuItem07 = new MenuItem("Soufflé", "Desserts", "Tasty chocolate soufflé."
        , "15 CHF")

    let menuItem08 = new MenuItem("Brioche meringuée aux fraises", "Desserts", "Traditional strawberry meringue brioche"
        , "15 CHF")

    let menuItem09 = new MenuItem("Crêpe Choco-Banane", "Desserts", "Chocolate banana crepe."
        , "20 CHF")

    let menuItemsAll = [menuItem01, menuItem02, menuItem03, menuItem04, menuItem05, menuItem06, menuItem07, menuItem08, menuItem09];

    let menuSection = document.createElement("section");

    function displayMenuItems(menuItemsAll) {
        let displayMenu = menuItemsAll.map(function (item) {
            return `<article class="menu-item-container">
                    <h2 class="menu-item-h2">${item.title}</h2>
                    <p class="menu-item-description">${item.description}</p>
                    <p class="menu-item-price">${item.price}</p>
                    <hr>
                </article>`;
        });
        displayMenu = displayMenu.join("");
        menuSection.innerHTML = displayMenu;
    }

    return {
        displayMenuItems,
        menuItemsAll,
        menuSection
    }
})()

let MenuPage = (function () {
    let pageTitle = document.createElement("h2");
    pageTitle.innerText = "Le Menu";
    pageTitle.classList.add('menu-page-title');

    //Filters
    let menuFilterContainer = document.createElement("div");
    let menuFilterAll = document.createElement("button");
    let menuFilterStarters = document.createElement("button");
    let menuFilterMainCourses = document.createElement("button");
    let menuFilterDesserts = document.createElement("button");

    menuFilterContainer.classList.add('menu-filter-container');
    menuFilterAll.classList.add('menu-filter-btn');
    menuFilterStarters.classList.add('menu-filter-btn');
    menuFilterMainCourses.classList.add('menu-filter-btn');
    menuFilterDesserts.classList.add('menu-filter-btn');

    menuFilterAll.setAttribute("data-category", "All");
    menuFilterStarters.setAttribute("data-category", "Starters");
    menuFilterMainCourses.setAttribute("data-category", "Main courses");
    menuFilterDesserts.setAttribute("data-category", "Desserts");

    menuFilterAll.setAttribute("type", "button");
    menuFilterStarters.setAttribute("type", "button");
    menuFilterMainCourses.setAttribute("type", "button");
    menuFilterDesserts.setAttribute("type", "button");

    menuFilterAll.innerText = "All";
    menuFilterStarters.innerText = "Starters";
    menuFilterMainCourses.innerText = "Main courses";
    menuFilterDesserts.innerText = "Desserts";

    menuFilterContainer.append(menuFilterAll, menuFilterStarters, menuFilterMainCourses, menuFilterDesserts)

    //filter display on page
    let theFilterUsed = menuFilterAll;
    theFilterUsed.classList.add('menu-filter-selected');

    //filtering items
    theMenu.displayMenuItems(theMenu.menuItemsAll);

    let filterBtns = [menuFilterAll, menuFilterStarters, menuFilterMainCourses, menuFilterDesserts];
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            let category = e.currentTarget.dataset.category;
            let menuCategory = theMenu.menuItemsAll.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === 'All') {
                theMenu.displayMenuItems(theMenu.menuItemsAll)
                for (let filterBtn of filterBtns) {
                    filterBtn.classList.remove('menu-filter-selected')
                }
                theFilterUsed = menuFilterAll;
                theFilterUsed.classList.add('menu-filter-selected');
            } else {
                theMenu.displayMenuItems(menuCategory)
                for (let filterBtn of filterBtns) {
                    filterBtn.classList.remove('menu-filter-selected')
                }
                theFilterUsed = btn;
                theFilterUsed.classList.add('menu-filter-selected');
            }
        });
    });

    //Page container and picture
    let menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-container', 'page-container');

    let menuPic1 = document.createElement('div');
    menuPic1.classList.add('menu-pic-1');

    //Text Section
    let pageTextSection = document.createElement('section');

    let menuPageText1 = document.createElement('h2');
    let menuPageText2 = document.createElement('h2');
    let menuPageBtn = document.createElement('button');
    let menuPageText3 = document.createElement('h2');
    let menuPageText4 = document.createElement('p');

    menuPageText1.innerText = "don't miss this unique";
    menuPageText2.innerText = "culinary experience";
    menuPageBtn.innerText = "Contact us";
    menuPageText3.innerText = "This fake restaurant is waiting for you!";
    menuPageText4.innerText = "Tue-Saturday 6pm - 12pm";

    pageTextSection.classList.add('menu-page-text-section')
    menuPageBtn.classList.add('btns');

    pageTextSection.append(menuPageText1, menuPageText2, menuPageBtn, menuPageText3, menuPageText4)

    // //appending to container div
    menuDiv.append(pageTitle, menuFilterContainer, theMenu.menuSection, menuPic1, pageTextSection)

    return {
        menuPageBtn,
        menuDiv,
    }
})()

export {
    MenuPage,
}
