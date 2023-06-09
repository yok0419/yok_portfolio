
//opening

let opening = document.querySelector('.opening');
let logo_title = document.querySelector('.logo_header');
let logoSpan = document.querySelectorAll('.logo_title');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },6000);

        setTimeout(()=>{
            opening.style.top = '-100vh';
        },6300)
        
    })
})

//
$(document).ready(function(){
  $('html,body').animate({ scrollTop: 0 }, '1');
});

//opening
//togle
let menuTog = document.querySelector('.menu-toggle');
let nav = document.querySelector('.nav');
let navLeft = document.querySelector('.nav-left');
let navRight = document.querySelector('.nav-right');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));
let contact = document.querySelector('.contact');
let logo = document.querySelector('.logo');
let icon = document.querySelector('.media-icons');

menuTog.addEventListener('click', ()=>{
    menuTog.classList.toggle('active');
    navRight.classList.toggle('active');
    navLeft.classList.toggle('active');
    logo.classList.toggle('active');
    nav.classList.toggle('active');

    // 全体のメニュー表示を遅れて表示させる
    contact.classList.remove('active');
    icon.classList.remove('active');
    navRight.classList.remove('active');

    if(menuTog.classList.contains('active')){
        setTimeout(()=>{
            navRight.classList.add('active');
        },100)

        //後からli(navLinks)メニューがふわっとずれて現れる
        for(let i = 0; i < navLinks.length; i++){
            navLinks[i].classList.remove('active');
            setTimeout(()=>{
                navLinks[i].classList.add('active')
            }, i * 100)
        }

        setTimeout(() => {
            contact.classList.add('active');
        }, 700);

        setTimeout(() => {
            icon.classList.add('active');
        }, 600);
        
    }
})
//togle

//top_parallax


'use strict'

const parallax = document.querySelectorAll(".parallax");
const section = document.querySelectorAll("section,.background,.skill,.footer");

if (parallax[0]) {
  parallax[0].classList.add('block');
}

document.addEventListener("scroll", function () {
  for (let i = 0; i < section.length; i++) {
    const getElementDistanceTop = section[i].getBoundingClientRect().top;
    const getElementDistanceBottom = section[i].getBoundingClientRect().bottom;

    if (parallax[i]) {
      if (getElementDistanceTop < window.innerHeight) {
        parallax[i].classList.add('block');
      }

      if (getElementDistanceTop < 0 && getElementDistanceBottom > 0) {
        parallax[i].classList.add("active_top");
      } else {
        parallax[i].classList.remove("active_top");
      }
    }
  }
});


//top_parallax

//slider_parallax
//let images = [...document.querySelectorAll('.slider-img')];
//let slider = document.querySelector('.slider');
//let sliderWidth;
//let imageWidth;
//let current = 0;
//let target = 0;
//let ease = .05
//img表示

//window,addEventListener('resize', init);

//images.forEach((img, idx) => {
//    img.style.backgroundImage = `url(./image/${idx+1}.jpg)`
//})
//parallax
//function lerp(start, end, t){
 //   return start * (1-t) + end * t;
//}

//function setTransform(el, transform){
 //   el.style.transform = transform;
//}
//scroll
//function init(){
  //  sliderWidth = slider.getBoundingClientRect().width;
  //  imageWidth = sliderWidth / images.length;
   // document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`
//}

//function animate(){
 //   current = parseFloat(lerp(current, target, ease)).toFixed(2);
  //  target = window.scrollY;
  //  setTransform(slider, `translateX(-${current}px)`)
  //  animateImages();
 //   requestAnimationFrame(animate);
//}

//function animateImages(){
 //   let ratio = current / imageWidth;
 //   let intersectionRatio;

//    images.forEach((image, idx) => {
//        intersectionRatio = ratio - (idx * 0.7);
//        setTransform(image, `translateX(${intersectionRatio * 70}px`)
 //   })
//}

//init();
//animate()

//console.log(imageWidth)
//slider_parallax


// work_slider
//------------------------------------
   //プログレスバー
//--------------------------------------

$(document).ready(function() {
    $('.progress-bar').each(function(i) {
      $(this).appear(function() {
        var percent = $(this).attr('aria-valuenow');
        $(this).animate({'width' : percent + '%'});
        $(this).find('span').animate({'opacity' : 1}, 900);
        $(this).find('span').countTo({from: 0, to: percent, speed: 900, refreshInterval: 30});
      });
    });
  });
 
  
  
