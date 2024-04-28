import { renderBikesHTML , bikes } from "./renderBikeHTML.js";

let productPushed;

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
addANewProduct();

window.addEventListener('resize',addANewProduct);

function addANewProduct(){
const screenWidth = window.innerWidth;
const breakpointOne = 910;
const breakpointTwo = 700;

if(screenWidth < breakpointOne && screenWidth > breakpointTwo){
  if(!productPushed){
    bikes.push({id : 9});
    renderBikesHTML();
    productPushed = true;
  }
}else{
  if(productPushed){
    const lastIndex = bikes.length - 1;
    bikes.splice(lastIndex,1);
    renderBikesHTML();
    productPushed = false;
  }
}

}