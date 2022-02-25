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