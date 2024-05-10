export function reviewsObserver(){
  const reviews = document.querySelectorAll('.reviews-container > div');
  const options = {
    root : null,
    threshold : 0,
    rootMargin : '0px',
  };
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if(!entry.isIntersecting){ 
        return;
      }
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    });
  },options);

  reviews.forEach(review => {
    observer.observe(review);
  });
}