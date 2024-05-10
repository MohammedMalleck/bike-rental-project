import { renderBikesHTML } from "./renderBikeHTML.js";
import { sliderJS } from "./slider.js";
import { bikesObserver } from "./bikesObeserver.js";

//sidebar JS CODE
const hamburgerIcon = document.querySelector('.hamburger-icon');
const sidebarEl = document.querySelector('.sidebar');
hamburgerIcon.addEventListener('click',()=>{
  hamburgerIcon.classList.toggle('clicked');
  if(sidebarEl.classList.contains('show')){
    sidebarEl.classList.remove('show');
  }else{
    sidebarEl.classList.add('show');
  }
});

renderBikesHTML();

//sliderJS code
sliderJS();
//observer code
bikesObserver();