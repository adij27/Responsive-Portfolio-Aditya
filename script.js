/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById(`nav-menu`),
      navToggle = document.getElementById(`nav-toggle`),
      navClose = document.getElementById(`nav-close`)

/* Menu Show */
if(navToggle){
    navToggle.addEventListener(`click`, () =>{
        navMenu.classList.add(`show-menu`)
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener(`click`, () =>{
        navMenu.classList.remove(`show-menu`)
    })
}

// this code provides the functionality to toggle the visibility of a navigation menu when a toggle button is clicked, 
// and to hide the menu when a close button within the menu is clicked. It uses event listeners to trigger these actions based on user interactions with the page.


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(`.nav__link`)

 const linkAction = () =>{
     const navMenu = document.getElementById(`nav-menu`)
     navMenu.classList.remove(`show-menu`)
 }
 navLink.forEach(n => n.addEventListener(`click`, linkAction))


/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById(`header`)
    //add a class if the bottom offset is greater than 50 of the 
    this.scrollY >= 50 ? header.classList.add(`blur-header`)
                       : header.classList.remove(`blur-header`)
}
window.addEventListener(`scroll`, blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm =  document.getElementById(`contact-form`),
      contactMessage = document.getElementById(`contact-message`)

const sendEmail = (e) =>{
    e.preventDefault()

    // service id - template id - #form - publicKey
    emailjs.sendForm(`service_q824gkm`, `template_u500ftz`, `#contact-form`, `YLL7Ca5orOmg9E-Az`)
    .then(() => {
        // Show sent message
        contactMessage.textContent = `Message sent successfully ✅`

        // Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ``
        }, 5000)

        // Clear input fields
        contactForm.reset()

    }, () => {
        // Show error message
        contactMessage.textContent = `Message not sent (service error) ❌`
    })
}

contactForm.addEventListener(`submit`, sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById(`scroll-up`)
    //when the scroll point is higher than 350 viewpointheight, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add(`show-scroll`)
                        : scrollUp.classList.remove(`show-scroll`)
}
window.addEventListener(`scroll`, scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll(`section[id]`);

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector(`.nav__menu a[href*='${sectionId}']`);

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add(`active-link`);
        } else {
            sectionClass.classList.remove(`active-link`);
        }
    });
};

window.addEventListener(`scroll`, scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true //Animation repeat

})

sr.reveal(`.home__data, .experience, .skills, .contact`)
sr.reveal(`.home__img`, {delay: 600})
sr.reveal(`.home__scroll`, {delay: 800})
sr.reveal(`.work__link`, {interval: 50})
sr.reveal(`.about__content`, {origin: 'right'})
sr.reveal(`.about__img`, {origin: 'left'})

