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
