// open && close cart //


let cart = document.querySelector(".cart");
let iconCart = document.querySelector(".icon-cart"); // open cart
let closeCart = document.querySelector(".close-cart");

iconCart.addEventListener("click", function(){

         cart.classList.add("active");
});


closeCart.addEventListener("click", function(){
        cart.classList.remove("active");
})

// open && close menu //

let menu = document.querySelector("#menu");
let btnOpenMenu = document.querySelector(".btn-open-menu");
let btnCloseMenu = document.querySelector(".btn-close-menu");

btnOpenMenu.addEventListener("click", function(){

        menu.classList.add("active");
});


btnCloseMenu.addEventListener("click", function(){
        menu.classList.remove("active");
})


/*  Add item to cart */

let allProductJeson;

let itemsInCart = document.querySelector(".items-in-cart");

let productCart = [];

function addToCart(id, btn){
        productCart.push(allProductJeson[id]);
        btn.classList.add("active");

        getCartItems()
}

let countItem = document.querySelector(".count-item");
let countItemCart = document.querySelector(".count-item-cart");
let priceCartTotal = document.querySelector(".price-cart-total");
let priceCartHead = document.querySelector(".price-cart-Head")

function getCartItems(){
        let totalPrice = 0;
        let items = "";
        for(let i =0; i<productCart.length; i++){
          items += `
          
          <div class="item-cart">
          <img src="${productCart[i].img}" alt="" />
          <div class="content">
            <h4>${productCart[i].name}</h4>
            <p class="price-cart">$${productCart[i].price}</p>
          </div>
          <button onclick = "removeFromCart(${i})" class="delete-item">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
          
          `
          
          totalPrice += productCart[i].price;
        }

        itemsInCart.innerHTML = items;

        priceCartHead.innerHTML = `$ ${totalPrice}`;
        countItem.innerHTML = productCart.length;

        countItemCart.innerHTML = `(${productCart.length}Item in Cart)`;
        priceCartTotal.innerHTML = `$ ${totalPrice}`;
}


function removeFromCart(index){

        productCart.splice(index, 1);
        getCartItems();

        let addToCartButtons = document.querySelectorAll(".fa-cart-shopping");
        for(let i = 0; i<addToCartButtons.length; i++){
                addToCartButtons[i].classList.remove("active");

                productCart.forEach(product =>{
                        if(product.id == i){
                        addToCartButtons[i].classList.add("active")
                        }
                })
        }
}


//     back-to-top //


let backToTop = document.querySelector(".back-to-top");

backToTop.addEventListener("click", function(){
        window.scrollTo({
                top:0,
                behavior:"smooth",
                
        })
        
})



