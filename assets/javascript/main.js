var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// list product
  function LoadJson(){
    fetch("./assets/json/products.json")
    .then(function(response){
        if(!response.ok){
            throw new Error("Đã có lỗi xảy ra :(")
        }
        return response.json()
    })
    .then(function(data){
        let html="";
        for (let p of data){
            html+="<div class='product'>";
            html+="<div class='img-product'>";
            html+="<img src='./assets/img/ẢNH SẢN PHẨM/"+p.img[1]+"'>";
            html+="<div class='cart-love'>";
            html+="<a href=''><i class='fa-solid fa-cart-shopping'></i> </a><a href=''><i class='fa-solid fa-heart'></i></a>"
            html+="</div>"
            html+="</div>"
            html+="<p class='name'>"+ p.name+"</p>";
            html+="<p class='price'><span class='old-price'>"+p.oldPrice+" VNĐ "+"</span><span class='new-price'>"+p.newPrice+" VNĐ"+"</span></p>";
            html+="<div class='vote'><span class='star'><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i></span> "+ p.vote  ;              
            html+= "</div>";
            html+= "</div>";
          }
        
        document.getElementById("products").innerHTML=html;
        const typeCategorys = document.querySelectorAll(".type_category");
            for(let i=0; i<typeCategorys.length;i++){
                typeCategorys[i].onclick=function(){
                    var ma="";
                        switch (i){
                            case 0: 
                                ma ='Bánh kem'
                                break;
                            case 1: 
                                ma ='Bánh quy'
                                break;
                            case 2: 
                                ma ='Cupcakes'
                                break;
                            case 3: 
                                ma ='Donuts'
                                break;
                            case 4:
                                ma='Bánh mỳ'}e

                           let html=""     
                    for(let p of data){
                        if(p.category == ma){
                          html+="<div class='product'>";
                          html+="<div class='img-product'>";
                          html+="<img src='./assets/img/ẢNH SẢN PHẨM/"+p.img[1]+"'>";
                          html+="<div class='cart-love'>";
                          html+="<a href=''><i class='fa-solid fa-cart-shopping'></i> </a><a href=''><i class='fa-solid fa-heart'></i></a>"
                          html+="</div>"
                          html+="</div>"
                          html+="<p class='name'>"+ p.name+"</p>";
                          html+="<p class='price'><span class='old-price'>"+p.oldPrice+" VNĐ "+"</span><span class='new-price'>"+p.newPrice+" VNĐ"+"</span></p>";
                          html+="<div class='vote'><span class='star'><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i></span> "+ p.vote  ;              
                          html+= "</div>";
                          html+= "</div>";
                          document.getElementById("products").innerHTML=html;
                        }}
                       
                        // return product1;  
                }
    }
  })
    .catch(function(err){
        throw new Error(err.message);
    })
}












  