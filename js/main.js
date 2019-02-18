 
$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.fadein').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({ 'opacity': '1' }, 300);

      }

    });

  });

  // Smooth scrolling

  var scrollLink = $('.scroll');

  scrollLink.click(function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  // Active Button switching

  $(window).scroll(function(){
    var scrollbarLocation = $(this).scrollTop();

    // console.log(scrollbarLocation);
    

    scrollLink.each(function(){
      
      var sectionOffset = $(this.hash).offset().top;

      
      if (sectionOffset <= scrollbarLocation) {
        $(this).addClass('active');
        $(this).parent().siblings().children().removeClass('active');
        
        
      }

    })
    
  })


  var plainScrollLink = $(".basic-scroll");

  plainScrollLink.click(function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  })


});

// $(function() {
//   $(".project__details").fadeOut(1000);
//   $(".project__details").fadeIn(2000)
// });




function createSuspectObjects(name){
  return {
    name: name,
    lastname: name.split(' ')[1],
    speak() {
      console.log("my name is ", name); 
    }
  };
};

var suspects = ['Kevin Johnson', 'Lichine Johnson', 'Val Johnson'];

var suspectsList = [];

for(var i = 0; i < suspects.length; i++){
  var suspect = createSuspectObjects(suspects[i]);

  suspectsList.push(suspect);
}