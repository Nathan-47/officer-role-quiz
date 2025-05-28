const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
            //  observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show')
        }
    });
});


const hiddenEl = document.querySelectorAll('.container');
hiddenEl.forEach((el) => observer.observe(el));


// Load animation again when new page loads
function refreshObserver() {
  document.querySelectorAll('.container').forEach(el => {
    observer.observe(el);
  });
}

// Example: after loading new content
// loadMoreContent().then(() => {
//   refreshObserver();  //re-observe the page
// });