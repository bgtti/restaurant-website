export let HomePage = (function () {

    //the picture
    let bigPic1 = document.createElement('div');
    bigPic1.classList.add('big-pic-1');

    //section one
    let sectionOne = document.createElement('section');
    sectionOne.classList.add('section-one');

    let sectionOneText1 = document.createElement('p');
    let sectionOneText2 = document.createElement('p');
    let sectionOneButton = document.createElement('button');

    sectionOneButton.classList.add('btns');

    sectionOneText1.innerText = "Located in the heart of Geneva, our warm and relaxed surroundings offers the perfect ambiance for you to savor our unique cuisine.";
    sectionOneText2.innerText = "Discover the delights in our menus, carefully prepared with fresh produc selections of the highest quality!";
    sectionOneButton.innerText = "The Menu";

    sectionOne.append(sectionOneText1, sectionOneText2, sectionOneButton);

    //section two

    let sectionTwo = document.createElement('section');
    sectionTwo.classList.add('section-two');

    let sectionTwoTextContainer = document.createElement('div');
    let sectionTwoText1 = document.createElement('h2');
    let sectionTwoText2 = document.createElement('p');
    let sectionTwoText3 = document.createElement('p');
    let sectionTwoText4 = document.createElement('p');

    sectionTwoTextContainer.classList.add('section-two-text-container')

    sectionTwoText1.innerText = "Fresh ingredients, delicious meals"
    sectionTwoText2.innerText = "Our chef enjoys bringing the best into his kitchen. Reason why the fresh vegetables and fruits are hand picked from local producers."
    sectionTwoText3.innerText = "You will delight yourself with our selection of regional cheeses and wines. Sustainability is important for us, and we take interest in the origin of the animal products we use, treating our bio suppliers as partners. "
    sectionTwoText4.innerText = "Creativity and respect for the environment are at the core of our creations. You will love tasting the result!"

    let sectionTwoPic = document.createElement('div');
    sectionTwoPic.classList.add('small-pic-1')

    sectionTwoTextContainer.append(sectionTwoText1, sectionTwoText2, sectionTwoText3, sectionTwoText4);
    sectionTwo.append(sectionTwoTextContainer, sectionTwoPic);

    //the second picture
    let bigPic2 = document.createElement('div');
    bigPic2.classList.add('big-pic-2');

    //section three

    let sectionThree = document.createElement('section');
    sectionThree.classList.add('section-three');

    let sectionThreeTextContainer = document.createElement('div')
    sectionThreeTextContainer.classList.add('section-three-text-container');
    let sectionThreeText1 = document.createElement('h2');
    let sectionThreeText2 = document.createElement('p');
    let sectionThreeText3 = document.createElement('p');
    let sectionThreeText4 = document.createElement('p');

    sectionThreeText1.innerText = "Exotic and unique culinary experience"
    sectionThreeText2.innerText = "Cooking is an art, our chef is an artist, and Le French Restaurant is the stage where the magic happens."
    sectionThreeText3.innerText = "Every Friday we offer a Surprise Foodie Menu with vegetarian and non-vegetarian options. Emerge yourself in the world of tastes, and try out this unique experience!"
    sectionThreeText4.innerText = "Le French Restaurant is for friends, for families, for the young and the old - and especially for those who enjoy high quality food!"

    let sectionThreePic = document.createElement('div');
    sectionThreePic.classList.add('small-pic-2');

    sectionThreeTextContainer.append(sectionThreeText1, sectionThreeText2, sectionThreeText3, sectionThreeText4);
    sectionThree.append(sectionThreePic, sectionThreeTextContainer);

    //section four
    let sectionFour = document.createElement('section');
    sectionFour.classList.add('section-four');

    let sectionFourText1 = document.createElement('h2');
    let sectionFourText2 = document.createElement('h2');
    let sectionFourButton = document.createElement('button');
    let sectionFourText3 = document.createElement('h2');
    let sectionFourText4 = document.createElement('p');

    sectionFourButton.classList.add('btns');

    sectionFourText1.innerText = "123 Sample Street"
    sectionFourText2.innerText = "Geneva, Switzerland"
    sectionFourButton.innerText = "Contact us"
    sectionFourText3.innerText = "Opening Hours"
    sectionFourText4.innerText = "Tue-Saturday 6pm - 12pm"

    sectionFour.append(sectionFourText1, sectionFourText2, sectionFourButton, sectionFourText3, sectionFourText4)

    //all together
    let homeDiv = document.createElement('div');
    homeDiv.classList.add('home-container', 'page-container');
    homeDiv.append(bigPic1, sectionOne, sectionTwo, bigPic2, sectionThree, sectionFour);

    return {
        sectionOneButton,
        sectionFourButton,

        homeDiv

    }

})()



