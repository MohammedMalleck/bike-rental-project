export function bikesObserver(){
  const bikeProducts = document.querySelectorAll('.bike-product-container');
  const options = {
    root : null,
    threshold : 0,
    rootMargin : '0px',
  };
  const bikesObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if(!entry.isIntersecting){ 
        return;
      }
      entry.target.classList.add('show');
      bikesObserver.unobserve(entry.target);
    });
  },options);

  bikeProducts.forEach(bike => {
    bikesObserver.observe(bike);
  });
}


