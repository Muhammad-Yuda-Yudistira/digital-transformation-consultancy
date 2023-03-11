// hamburger menu - non jequery
const toggle = document.querySelector(".hamburger input");
const hamburger = document.querySelector(".nav .nav-items");

toggle.addEventListener('click', () => {
    // console.log("nyala");
    // hamburger.style.display = "block";
    hamburger.classList.toggle("toggle");
})



// smooth scrolling
$('.scroller').on('click', function(e) {
    const tujuan = $(this).attr('href');
    const tujuanElement = $(tujuan)
    console.log(tujuanElement);

    $('html').animate({
        scrollTop: tujuanElement.offset().top
    }, 1000, "easeInSine")

    e.preventDefault();
})



// parallax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    $('.about p').css({
        'transform': 'translate(0px, ' + wScroll/10 +'%)'
    })

    if(wScroll > $('.experience').offset().top - 100) {
        $('.experience .port').each(function(i) {
            setTimeout(function() {
                $('.experience .port').eq(i).addClass('muncul');
            }, 300 * (i+1))
        })
    }
})
$(window).on('load', function() {
    $('.about h1').addClass('sliding');
    $('.about p').addClass('sliding');
})