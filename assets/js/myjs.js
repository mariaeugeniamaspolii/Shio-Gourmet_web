$(document).ready(inicio);

function inicio(){
    
  $(".navbar a").on("click", function(){
    $(".navbar a").removeClass("active");
    $(this).addClass("active");
 });

 $(".accordion-button").on("click", function(){
  $(".accordion-button").removeClass("active");
  $(this).addClass("active");
});

//slider range
document.getElementById("recetaComplejidad").oninput = function() {
  var value = (this.value)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
};








//navbar color change
$(window).scroll(function () {  
  $('.nav-change').toggleClass("bg-primary-2", ($(window).scrollTop() > 100));
  $('.navbtn').toggleClass("text-primary-2", ($(window).scrollTop() > 100));
  $('.navbtn').toggleClass(".active-nav-link", ($(window).scrollTop() > 100));
  $('.navbtn').toggleClass(".bg-primary-1", ($(window).scrollTop() > 100));
});
/*
var navchange = document.querySelector('.nav-change');
var navbtn = document.querySelector('.navbtn');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
      navchange.classList.add('bg-primary-2', 'shadow');
      navbtn.classList.remove('bg-primary-2');
      navbtn.classList.add('bg-white');
      navbtn.classList.add('text-primary-2');
    } else {
      nav-change.classList.remove('bg-primary-2', 'shadow');
      navbtn.classList.remove('bg-white');
      navbtn.classList.add('bg-primary-2');
      navbtn.classList.remove('text-primary-2');
    } 
  });

  */

}

