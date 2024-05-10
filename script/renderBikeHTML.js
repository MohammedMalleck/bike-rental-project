//bike section JS CODE
export let bikes = [
  {
    id : 1
  },
  {
    id : 2
  },
  {
    id : 3
  },
  {
    id : 4
  },
  {
    id : 5
  },
  {
    id : 6
  },
  {
    id : 7
  },
  {
    id : 8
  }
];

export function renderBikesHTML(){

let html = '';

bikes.forEach((bikeEl)=>{

  html += 
  `
    <div style="--i:${bikeEl.id};" class="bike-product-container">
      <div class="free-cancellation-text">
        Free Cancellation
      </div>
      <img src="images/bike-${bikeEl.id}.png" class="bike-product-image">
      <div class="bike-product-info-container">
        <div>
          <div class="bike-product-name">BMW R1300GS</div>
          <div class="adventure-text">Adventure</div>
        </div>
        <div>
          <div class="bike-rent-info-container">
            <div class="price">$17</div>
            <div class="time">/hour</div>
          </div>
        </div>
      </div>
      <button class="book-bike-btn">Book Bike</button>
    </div>
  `;

});

document.querySelector('.bike-products-container').innerHTML = html;
}