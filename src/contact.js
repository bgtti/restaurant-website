export let ContactPage = (function () {
    let contactTitle = document.createElement('h2')
    contactTitle.innerText = "Contact Us"
    contactTitle.classList.add('contact-title')

    //Section 1
    let contactSection1 = document.createElement('section')
    let contactSection1Text1 = document.createElement('p')
    let contactSection1Text2 = document.createElement('p')
    let contactSection1Text3 = document.createElement('p')
    let contactSection1Text4 = document.createElement('h2')
    let contactSection1Text5 = document.createElement('p')
    let contactSection1Text6 = document.createElement('p')

    contactSection1Text1.innerText = "123 Sample Street"
    contactSection1Text2.innerText = "Geneva, Switzerland"
    contactSection1Text3.innerText = "Tel: +41 55 555 5555"
    contactSection1Text4.innerText = "Opening Hours"
    contactSection1Text5.innerText = "Tuesday-Saturday 6pm - 12pm"
    contactSection1Text6.innerText = "Sunday- Monday closed"

    contactSection1.append(contactSection1Text1, contactSection1Text2, contactSection1Text3, contactSection1Text4, contactSection1Text5, contactSection1Text6)

    //Google Maps (used iFrame, as no API Key needed)
    // let googleMapsFrame = `<div class="mapouter"><div class="gmap_canvas"><iframe width="1080" height="294" id="gmap_canvas" src="https://maps.google.com/maps?q=Geneva&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2piratebay.org"></a><br><style>.mapouter{position:relative;text-align:right;height:294px;width:1080px;}</style><a href="https://www.embedgooglemap.net">google embed map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:294px;width:1080px;}</style></div></div>`
    let googleMapsFrame = `<div style="width: 100%"><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Geneva+(Le%20French)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/marine-gps/">navigation gps</a></iframe></div>`
    let googleMapsSection = document.createElement('section')
    googleMapsSection.classList.add('contact-google-maps-section')
    googleMapsSection.innerHTML = googleMapsFrame

    //Section 2
    let contactSection2 = document.createElement('section')
    let contactSection2Text1 = document.createElement('h2')
    let contactSection2Text2 = document.createElement('p')
    let contactSection2Text3 = document.createElement('p')
    let contactSection2Text4 = document.createElement('p')

    contactSection2Text1.innerText = "About Le French"
    contactSection2Text2.innerText = "This is a fake restaurant page created as a part of The Odin Project."
    contactSection2Text3.innerText = "The restaurant, menu, and address do not exist."
    contactSection2Text4.innerText = "The goal of this project was to learn using Webpack."

    contactSection2.append(contactSection2Text1, contactSection2Text2, contactSection2Text3, contactSection2Text4)

    //Picture 
    let contactPic = document.createElement('div')
    contactPic.classList.add('contact-picture')

    //Container
    let contactDiv = document.createElement('div')
    contactDiv.classList.add('contact-page-container')
    contactDiv.append(contactTitle, contactSection1, googleMapsSection, contactSection2, contactPic)

    return { contactDiv }
})()
