$(function () {
    $('.category-bar__nav-btn').on('click', function (){
        $('.category-bar__list').addClass('category-bar__list--active')
        $('.category-bar__overlay').addClass('category-bar__overlay--active')
    })
    $('.header__nav-btn').on('click', function (){
        $('.category-bar__list').removeClass('category-bar__list--active')
        $('.category-bar__overlay').removeClass('category-bar__overlay--active')
    })
    $('.category-bar__overlay').on('click', function (){
        $('.category-bar__list').addClass('category-bar__list--active')
        $('.category-bar__overlay').addClass('category-bar__overlay--active')
    })
// 

    const firstB = $(".product-cart__span--category");
    var firstC = $.makeArray(firstB);

    for (let i = 0; i < firstC.length; i++) {
        const element = firstC[i];
        if(element.textContent == ""){
            element.style.display = "none"
        }else{
            element.style.display = "block"
        }
    };

    $('.first-block__wrapp-slider').slick({
        dots: false,
        arrows: true,
        fade: false,
        autoplay: false,
        slidesToScroll: 1,
    });
    
      $('.advantages__list').slick({
        settings: "unslick",
        responsive: [
          {
              breakpoint: 2048,
              settings: "unslick"
            },
          {
            breakpoint: 600,
            settings: {
            dots: true,
            arrows: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots: true,
            arrows: false,
              slidesToScroll: 1
            }
          }
        ]
      });

})