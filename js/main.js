// start cart counter
window.addEventListener('load', () => {
  let addToCart = document.querySelectorAll('.addToCart');
  addToCart.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      let cart = document.querySelector('#cart');
      let cartCounter = cart.innerHTML;
      cart.innerHTML = parseInt(cartCounter) + 1;
    });
  });
})

// end cart counter

// start slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(number) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (number > slides.length) { slideIndex = 1; }
  if (number < 1) { slideIndex = slides.length; }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" swipe-pagination-bullet-active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " swipe-pagination-bullet-active";
}
// end slider


// start filter menu
const menu = [
  {
    id: 1,
    title: "Aliquam Quaerat",
    category: "armoires",
    price: `$ 108.80`,
    img: "./images/chair1.jpg",
    overlay: './images/chair2.jpg',
  },
  {
    id: 2,
    title: "Aliquam Quaerat",
    category: "study chair",
    price: `$ 108.80`,
    img: "./images/chair2.jpg",
    overlay: './images/chair3.jpg',
  },
  {
    id: 3,
    title: "Aliquam Quaerat",
    category: "plastic chair",
    price: `$ 108.80`,
    img: "./images/chair4.jpg",
    overlay: './images/chair5.jpg',
  },
  {
    id: 4,
    title: "Aliquam Quaerat",
    category: "study chair",
    price: `$ 108.80`,
    img: "./images/chair6.jpg",
    overlay: './images/chair1.jpg',
  },
  {
    id: 5,
    title: "Aliquam Quaerat",
    category: "armoires",
    price: `$ 108.80`,
    img: "./images/chair3.jpg",
    overlay: './images/chair2.jpg',
  },
  {
    id: 6,
    title: "Aliquam Quaerat",
    category: "plastic chair",
    price: `$ 108.80`,
    img: "./images/chair2.jpg",
    overlay: './images/chair3.jpg',
  }
];
const productItems = document.querySelector('.product__items');
const filterBtns = document.querySelectorAll('.filter-btn');

// load items on page load
window.addEventListener(`DOMContentLoaded`, () => {
  displayMenuItems(menu);
});
// filter items by category
filterBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter((menuItem) => {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === 'all') {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});

function displayMenuItems(menuItems) {
  let displayItems = menuItems.map((item) => {
    return `<div class="product__item">
          <div class="product__item--img">
            <img src=${item.img} alt="product__item">
            <div class="product__overlay">
              <img src=${item.overlay} alt="">
              <ul class="list-unstyled">
                <li><a href="#"><i class="far fa-heart"></i></a></li>
                <li><a href="#"><i class="far fa-eye"></i></a></li>
                <li><a href="#"><i class="far fa-list"></i></a></li>
                <li class='addToCart'><a href="#"><i class="far fa-cart-plus"></i></a></li>
              </ul>
            </div>
            <div class="product__rating">
              <ul class="list-unstyled">
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fal fa-star"></i></li>
              </ul>
              <h4><a href="#">${item.title}</a></h4>
              <p class="price">${item.price}</p>
            </div>
          </div>
        </div>`
  });
  // return string of html and add it to the DOM
  displayItems = displayItems.join('');
  productItems.innerHTML = displayItems;
}
// end filter menu

// scroll to top
const scrollToTop = document.querySelector('.top_button');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTop.style.display = 'block';
    scrollToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  } else {
    scrollToTop.style.display = 'none';
  }
})