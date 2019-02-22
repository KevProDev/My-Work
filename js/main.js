
$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.fadein').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 700;
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      console.log("bottom of window",bottom_of_window);
      console.log("bottom of object",bottom_of_object);

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({ 'opacity': '1' }, 1000);

      }

    });

  });
  //////////////////////
  // Smooth scrolling //
  //////////////////////
  var scrollLink = $('.scroll');

  scrollLink.click(function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  /////////////////////////////////

    //////////////////////
  // Active Button switching //
  //////////////////////

  $(window).scroll(function(){
    var scrollbarLocation = $(this).scrollTop();

    // console.log(scrollbarLocation);
    

    scrollLink.each(function(){
      
      var sectionOffset = $(this.hash).offset().top;

      
      if (sectionOffset <= scrollbarLocation) {
        $(this).addClass('my_active');
        $(this).parent().siblings().children().removeClass('my_active');
        
        
      }

    })
    
  })


//   var plainScrollLink = $(".basic-scroll");

//   plainScrollLink.click(function(e){
//     e.preventDefault();
//     $('html,body').animate({
//       scrollTop: $(this.hash).offset().top
//     }, 1000);
//   })


// });

// $(function() {
//   $(".project__details").fadeOut(1000);
//   $(".project__details").fadeIn(2000)
// });




// function createSuspectObjects(name){
//   return {
//     name: name,
//     lastname: name.split(' ')[1],
//     speak() {
//       console.log("my name is ", name); 
//     }
//   };
// };

// var suspects = ['Kevin Johnson', 'Lichine Johnson', 'Val Johnson'];

// var suspectsList = [];

// for(var i = 0; i < suspects.length; i++){
//   var suspect = createSuspectObjects(suspects[i]);

//   suspectsList.push(suspect);
// }


// // Responsive Nav to toggle the menu display
// $(function() {
// 	menu = $('nav ul');

//   $('#openup').on('click', function(e) {
//     e.preventDefault(); menu.slideToggle();
//   });
  
//   $(window).resize(function(){
//     var w = $(this).width(); if(w > 1000 && menu.is(':hidden')) {
//       menu.removeAttr('style');
//     }
//   });
  
//   $('nav li').on('click', function(e) {                
//     var w = $(window).width(); if(w < 480 ) {
//       menu.slideToggle(); 
//     }
//   });
//   $('.open-menu').height($(window).height());
// });



// Toggle open and close nav block on click
$('#navbar-toggle').click(function() {
  $('.navbar-menu').slideToggle();
});