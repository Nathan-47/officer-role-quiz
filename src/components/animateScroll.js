// create the observer entry function
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});

// Select the container class and hide until observed
const hiddenEl = document.querySelectorAll('.container');
hiddenEl.forEach((el) => observer.observe(el));


