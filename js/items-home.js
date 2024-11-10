fetch("js/items.json")
        .then(respons => respons.json())
        .then(data => {
         const swiperItemsSale = document.getElementById("swiper-items-sale");

         let otherProductSwiper = document.getElementById("other-product-swiper");

         let otherProductSwiper2 = document.getElementById("other-product-swiper2");
          allProductJeson = data;        

         data.forEach(product => {
                if(product.old_price){

                 let percentDiscont = Math.floor((product.old_price - product.price) / product.old_price * 100);        
                  swiperItemsSale.innerHTML += `
                  
                   <div class="product swiper-slide">
                <div class="icons">
                  <span> <i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-shopping"></i> </span>
                  <span> <i class="fa-solid fa-heart"></i> </span>
                  <span> <i class="fa-solid fa-share"></i> </span>
                </div>
  
                <span class="sale-present">%${percentDiscont}</span>
                <div class="img-product">
                  <img src="${product.img}" alt="" />
                  <img class="img-hover" src="${product.img_hover}" alt="" />
                  <h3 class="name-product">
                    <a href="">${product.name}</a>
                  </h3>
  
                  <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="price">
                    <p><span>$${product.price}</span></p>
                    <p class="old-price">$${product.old_price}</p>
                  </div>
                </div>
              </div>
                  
                  
                  `        
                }
         });



         data.forEach(product => {
        

                 otherProductSwiper.innerHTML += `
                  
                   <div class="product swiper-slide">
                <div class="icons">
                  <span> <i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-shopping"></i> </span>
                  <span> <i class="fa-solid fa-heart"></i> </span>
                  <span> <i class="fa-solid fa-share"></i> </span>
                </div>
  
                
                <div class="img-product">
                  <img src="${product.img}" alt="" />
                  <img class="img-hover" src="${product.img_hover}" alt="" />
                  <h3 class="name-product">
                    <a href="">${product.name}</a>
                  </h3>
  
                  <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="price">
                    <p><span>$${product.price}</span></p>

                  </div>
                </div>
              </div>
                  
                  
                  `        
         });


         data.forEach(product => {
        

                otherProductSwiper2.innerHTML += `
                 
                  <div class="product swiper-slide">
               <div class="icons">
                 <span> <i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-shopping"></i> </span>
                 <span> <i class="fa-solid fa-heart"></i> </span>
                 <span> <i class="fa-solid fa-share"></i> </span>
               </div>
 
               
               <div class="img-product">
                 <img src="${product.img}" alt="" />
                 <img class="img-hover" src="${product.img_hover}" alt="" />
                 <h3 class="name-product">
                   <a href="">${product.name}</a>
                 </h3>
 
                 <div class="stars">
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                 </div>
                 <div class="price">
                   <p><span>$${product.price}</span></p>

                 </div>
               </div>
             </div>
                 
                 
                 `        
        });

        })