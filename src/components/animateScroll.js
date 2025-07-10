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


// Mobile ONLY fade animation function
function isMobile() {
  return window.innerWidth <= 720; 
}

// Run only on mobile devices
if (isMobile()) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenEl = document.querySelectorAll('.container');
  hiddenEl.forEach((el) => observer.observe(el));
} else {
  // Optional fallback for desktop: show all immediately
  const hiddenEl = document.querySelectorAll('.container');
  hiddenEl.forEach((el) => el.classList.add('show'));
}



