//navbar toggle
const open = document.querySelector('#open');
const close = document.querySelector('#close');
const mobileNav = document.querySelector('#mobile-nav');
const logo = document.querySelector('#logo');
const navLinks = document.querySelectorAll('.nav-link');

open.addEventListener('click', () => {
    mobileNav.classList.remove('hidden-nav');
    logo.classList.add('hidden-nav');
    open.classList.add('hidden-nav');
});

close.addEventListener('click', () => {
    mobileNav.classList.add('hidden-nav');
    logo.classList.remove('hidden-nav');
    open.classList.remove('hidden-nav');
});

navLinks.forEach( link => {
    link.addEventListener('click', () => {
        mobileNav.classList.add('hidden-nav');
        logo.classList.remove('hidden-nav');
        open.classList.remove('hidden-nav');
    })
});

const featuresBtns = document.querySelectorAll('.features-btn');
const tabs = document.querySelectorAll('.tab');

featuresBtns.forEach((feature, index) => {
    feature.addEventListener('click', () => {

        // to remove active from unclicked btn
        featuresBtns.forEach(feature => {
            feature.classList.remove('active');
        });

        // to add active to clicked btn
        feature.classList.add('active');

        // to add previous tab content
        tabs.forEach(tab => {
            tab.classList.remove('tab-active')
        })
        // to add active class to tab after btn has been clicked
        tabs[index].classList.add('tab-active')
    });
});

// to load the active class initially at the first index
featuresBtns[0].click();

// accordion javascript
const accordionBtn = document.querySelectorAll('.faq-btn');
const content = document.querySelectorAll('#faq-content');
const icons = document.querySelectorAll('.icon');

accordionBtn.forEach((accordion, index) => {
    accordion.addEventListener('click', () => {
     content[index].classList.toggle('faq-hidden');
    })
});

// form vailidation
const form = document.getElementById('form');
const email = document.getElementById('email');
const validator = document.getElementById('vaildator');
const errorIcon = document.getElementById('error-icon');
const errorMessage = document.getElementById('error-message');
const contactUs = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault()
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailFormat)){
        console.log('success');
    } else {
        validator.classList.add('error-border');
        errorIcon.classList.remove('error-hidden');
        errorMessage.classList.remove('error-hidden');
    }
})
