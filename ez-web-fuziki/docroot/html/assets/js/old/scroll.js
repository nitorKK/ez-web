//table
/* new ScrollHint('.js-scrollable', {
  suggestiveShadow: true
}); */

//scroll-button

 const buttonscroll = document.querySelector('.c-scroll-button');
 const container = document.querySelector('.p-scrollbar');
 const caret = document.querySelector('.ph-caret-right');
 const button = document.querySelector('.c-scroll-button');
 
 buttonscroll.addEventListener('click', movement);

 function movement() {
  if (container.scrollLeft == 0) {
      container.scrollTo({
          left: container.scrollWidth,
          behavior: "smooth", 
      });
  } else {
      container.scrollTo({
          left: 0,
          behavior: "smooth",
      });
  }
}
 

const scrollButton = document.querySelector('.c-scroll-button');

scrollButton.addEventListener('click', function(){
  this.classList.toggle('reflect');
});
 