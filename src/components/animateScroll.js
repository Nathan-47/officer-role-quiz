// Observer only for certain mobile width
function isMobile() {
  return window.innerWidth >= 720;
}

// Check for elements on page load
document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll('.container');

  containers.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;

    if (inView) {
      el.classList.add('show');
    }
  });
});

// Observer function
function runIntersectionObserver(options = {}) {
  const observer = new IntersectionObserver((entries) => {
    console.log("Observing", hiddenEls.length, ".container elements");
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, options);

  const hiddenEls = document.querySelectorAll('.container');
  hiddenEls.forEach((el) => observer.observe(el));
}

// Run observer for mobile if not meet width size, then desktop
if (isMobile()) {
  // Use rootMargin to trigger earlier on mobile
  runIntersectionObserver({ rootMargin: '0px 0px -20% 0px' });
} else {
  const hiddenEls = document.querySelectorAll('.container');
  hiddenEls.forEach((el) => el.classList.add('show'));
}



