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
    fetch("../assets/json/products.json")
    .then(function(response){
        if(!response.ok){
            throw new Error("Đã có lỗi xảy ra :(")
        }
        return response.json()
    })
    .then(function(data){
        let html="";
        for (let p of data){
          for(i=0;i<9;i++){
            if(p.id==i+1){
            html+="<div class='product'>";
            html+="<div class='img-product'>";
            html+="<a href='./productDetail.html'><img src='../assets/img/ẢNH SẢN PHẨM/"+p.img[0]+"'></a>";
            html+="<div class='cart-love'>";
            html+="<a href=''><i class='fa-solid fa-cart-shopping'></i> </a><a href=''><i class='fa-solid fa-heart'></i></a>"
            html+="</div>"
            html+="</div>"
            html+="<p class='name'>"+ p.name+"</p>";
            html+="<p class='price'><span class='old-price'>"+p.oldPrice+" VNĐ "+"</span><span class='new-price'>"+p.newPrice+" VNĐ"+"</span></p>";
            html+="<div class='vote'><span class='star'><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i></span> "+ p.vote  ;              
            html+= "</div>";
            html+= "</div>";
          }}}
        
        document.getElementById("products").innerHTML=html;

        const priceFrom=document.getElementById("price-from")
        const priceTo=document.getElementById("price-to")
        const search=document.querySelectorAll(".price-search")
        let text=""
        search.onclick=function(){
        for(let p of data){
            if(p.newPrice=='80.000'){
              text+="<div class='product'>";
              text+="<div class='img-product'>";
              text+="<a href='./productDetail.html'><img src='../assets/img/ẢNH SẢN PHẨM/"+p.img[0]+"'></a>";
              text+="<div class='cart-love'>";
              text+="<a href=''><i class='fa-solid fa-cart-shopping'></i> </a><a href=''><i class='fa-solid fa-heart'></i></a>"
              text+="</div>"
              text+="</div>"
              text+="<p class='name'>"+ p.name+"</p>";
              text+="<p class='price'><span class='old-price'>"+p.oldPrice+" VNĐ "+"</span><span class='new-price'>"+p.newPrice+" VNĐ"+"</span></p>";
              text+="<div class='vote'><span class='star'><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i></span> "+ p.vote  ;              
              text+= "</div>";
              text+= "</div>";
              document.getElementById("products").innerHTML=text;
          }
        }}
        
        







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
                                ma='Bánh mỳ'}

                           let html=""     
                    for(let p of data){
                        if(p.category == ma){
                          html+="<div class='product'>";
                          html+="<div class='img-product'>";
                          html+="<a href='./productDetail.html'><img src='../assets/img/ẢNH SẢN PHẨM/"+p.img[0]+"'></a>";
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
                       
                        
                }
    }
  })
    .catch(function(err){
        throw new Error(err.message);
    })
}



// tìm kiếm sản phẩm
function submitForm(event){ 
  event.preventDefault();
  var ele = document.getElementById("inputvalue");                

  if (ele.value =='bánh kem'){
      window.location.replace("./productBanhkem.html")
  }
  else if (ele.value =="bánh quy"){
  window.location.replace("./productBanhquy.html")
  }
  else if (ele.value +""==="bánh donuts"){
  window.location.replace("./productDonuts.html")
  }
  else if (ele.value +""==="bánh mì"){
  window.location.replace("./productBanhmi.html")
  }
  else if (ele.value +""==="cupcakes"){
  window.location.replace("./productCupcakes.html")
  }
  else if (ele.value +""==="bánh donuts"){
  window.location.replace("./productDonuts.html")
  }
  else{
  window.location.replace("./noProduct.html")
  }
  }










// backtop
  $(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('#backtop').fadeIn();
        } else {
            $('#backtop').fadeOut();
        }
    });
    $("#backtop").click(function(){
        $('html,body').animate({scrollTop: 0},100)
    })
})

// headerscroll
var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").classList.remove('show');
        }
        else { document.getElementById("header").classList.add('show');
        }
        prevScrollpos = currentScrollPos;
        }










  