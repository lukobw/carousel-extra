$(function(){

  var carouselList = $('#js-myCarousel ul');
  var interval = setInterval(changeSlide, 3000);

  function changeSlide(){
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
  }

  function moveFirstSlide(){
    var firstItem = $('#js-myCarousel').find('li:first');
    var lastItem = $('#js-myCarousel').find('li:last');
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  }

  var arrowLeft = $('.arrow-left');
  var arrowRight = $('.arrow-right');
  arrowLeft.on('click', movePrevSlide);

  function movePrevSlide(){
    var firstItem = $('#js-myCarousel').find('li:first'); 
    var lastItem = $('#js-myCarousel').find('li:last');
    firstItem.before(lastItem);
    carouselList.css({'marginLeft':-400});
    carouselList.animate({'marginLeft':0}, 500, clearInterval(interval));
  }
  
  arrowRight.on('click', function(){
  carouselList.animate({marginLeft:-400}, 500, moveSlideNext);
  })

  function moveSlideNext(){
    var firstItem = $('#js-myCarousel').find('li:first');
    var lastItem = $('#js-myCarousel').find('li:last');
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
    clearInterval(interval);
  }
});
