$(document).ready(function() {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: [
      "Software Developer.",
      "Technical Support Agent.",
      "Veteran.",
      "Web Developement Student.",
      "Microsoft Software and System Academy Alumini."
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    // these are the screen sizes below:
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });


  // This allow the skills to load when you get to the skills at the middle of the page. 
  var skillsTopOffset = $(".skillsSection").offset().top;
  var statsTopOffset = $(".statsSection").offset().top;
  var countUpFinished = false;

  $(window).scroll(function(){

      if(window.pageYOffset > skillsTopOffset - $(window).height()+200) {

          $(".chart").easyPieChart({
            easing: "easingInOut",
            barColor: "#e1b12c",
            trackColor: "#fff",
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent) {
            $(this.el)
              .find(".percent")
              .text(Math.round(percent));
          }
        });
    }

     if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height()+200) {
          $(".counter").each(function(){
          var element = $(this);
          var endVal = parseInt(element.text());

          element.countup(endVal);
        })

        countUpFinished = true;
     }

  });

 

});









