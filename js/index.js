$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items:3,
    autoplay:true,
    autoplayTimeout:2000,
    loop:true,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  }
  });
});

var typed = new Typed('.element', {
  strings: ['I am Dipesh Thapa', 'I Am A MicroBiologist ','I Am A BioTechnologist'],
  typeSpeed: 90,
  loop: true,
  showCursor: false,
  
});

let slideIcon=$('.colors').innerWidth();
$('.box-color').animate({left:`-${slideIcon}`})
// nav
let sec1 = $('#sec-1').offset().top;
$(window).scroll(function () {
  let wscrol = $(window).scrollTop();
  if (wscrol > sec1 - 50) {
    $(".navbar").css('backgroundColor', 'black')
    $("#icon-scrol").fadeIn(1000)
  }
  else {
    $(".navbar").css('backgroundColor', 'transparent')
    $("#icon-scrol").fadeOut(1000)

  }
})





$('#icon-scrol').click(function () {
  $("html,body").animate({ scrollTop: 0 })
})


// scroll
$("a[href^='#']").click(function (e) {
  $(e.target).css('border-bottom', 'solid 2px blue')
  $(e.target).parent().siblings().children().css('border-bottom', 'none')
  let linkHref = $(e.target).attr('href')
  console.log(linkHref);
  let secoffset = $(linkHref).offset().top
  $("html,body").animate({ scrollTop: secoffset },)

})



// load
// window.addEventListener('load',function(){
//     $('.laoding #inimat-laod').fadeOut(1000,function(){
// $('.laoding').fadeOut(1000,function(){
//   $(".laoding").remove();
//   $('body').css('overflow-y','auto')
// })
//     })
// })

$(document).ready(function () {
  $('.laoding #inimat-laod').fadeOut(1000, function () {
    $('.laoding').fadeOut(1000, function () {
      $('.laoding').remove();
      $('body').css('overflow-y', 'auto')
    })
  })
})

let itmes = $('.color-itme')
itmes.eq(0).css('backgroundColor', 'black')
itmes.eq(1).css('backgroundColor', 'blueviolet')
itmes.eq(2).css('backgroundColor', 'darkgreen')
itmes.eq(3).css('backgroundColor', 'yellow')
itmes.eq(4).css('backgroundColor', 'tomato')

itmes.click(function (e) {
  let BGcolor = $(e.target).css('backgroundColor')
  $('h2').css('color', BGcolor)

})




$('.box-color i').click(function(){
  let slideIcon=$('.colors').innerWidth();
  if( $('.box-color').css('left')=='0px'){
    $('.box-color').animate({left:`-${slideIcon}`},1000)
  }
  else{
    $('.box-color').animate({left:`0px`},1000)
  }
  
})


let counter=0
let Projects=0
let Code=0
let Downloaded=0
let setcount=setInterval(() => {
  counter++;
  Projects+=2;
  Code+=4
  Downloaded+=5
  document.getElementById("Happy").innerHTML=counter
  document.getElementById("Projects").innerHTML=Projects
  document.getElementById("Code").innerHTML=Code
  document.getElementById("Downloaded").innerHTML=Downloaded
  if(counter==100&&Projects==200&&Code==400&&Downloaded==500){
    clearInterval(setcount)
  }
}, 50);



// dark
function addDarkmodeWidget() {
  new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);