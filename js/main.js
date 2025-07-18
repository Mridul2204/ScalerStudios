(function ($) {
    $(document).ready(function () {
  
       // sticky header active
       if ($("#header").length > 0) {
        $(window).on("scroll", function (event) {
          var scroll = $(window).scrollTop();
          if (scroll < 1) {
            $("#header").removeClass("sticky");
          } else {
            $("#header").addClass("sticky");
          }
        });
      }

      
  
          // pricing-plan-tab
          $("#ce-toggle").click(function (event) {
            $(".plan-toggle-wrap").toggleClass("active");
          });
      
          $("#ce-toggle").change(function () {
            if ($(this).is(":checked")) {
              $(".tab-content #yearly").hide();
              $(".tab-content #monthly").show();
            } else {
              $(".tab-content #yearly").show();
              $(".tab-content #monthly").hide();
            }
          });
  
          $(".header-search-btn").on("click", function (e) {
            e.preventDefault();
            $(".header-search-form-wrapper").addClass("open");
            $('.header-search-form-wrapper input[type="search"]').focus();
            $('.body-overlay').addClass('active');
       });
       $(".tx-search-close").on("click", function (e) {
            e.preventDefault();
            $(".header-search-form-wrapper").removeClass("open");
            $("body").removeClass("active");
            $('.body-overlay').removeClass('active');
       });
  
                  //=== logo slider ===
                  $('.logo-slider').slick({
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 0,
                    speed: 8000,
                    pauseOnHover: true,
                    arrows: false,
                    cssEase: 'linear',
  
                    responsive: [
                      {
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                          infinite: true,
                          dots: false
                        }
                      },
                      {
                        breakpoint: 600,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2
                        }
                      },
                      {
                        breakpoint: 480,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                        }
                      }
                      // You can unslick at a given breakpoint now by adding:
                      // settings: "unslick"
                      // instead of a settings object
                    ]
  
                  });
  
                  //=== logo slider ===
                  $('.logo-slider3').slick({
                    slidesToShow: 9,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 0,
                    speed: 12000,
                    pauseOnHover: true,
                    arrows: false,
                    cssEase: 'linear',
                    responsive: [
                      {
                        breakpoint: 1280,
                        settings: {
                          slidesToShow: 8,
                          slidesToScroll: 1,
                         
                        }
                      },
                      {
                        breakpoint: 1080,
                        settings: {
                          slidesToShow: 7,
                          slidesToScroll: 2
                        }
                      },
                      {
                        breakpoint: 992,
                        settings: {
                          slidesToShow: 5,
                          slidesToScroll: 1
                        }
                      },
                      {
                        breakpoint: 576,
                        settings: {
                          slidesToShow: 4,
                          slidesToScroll: 1
                        }
                      },
                      {
                        breakpoint: 481,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1
                        }
                      },
                      {
                        breakpoint: 382,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                        }
                      }
                    ]
  
                  });
  
                  //=== logo slider ===
                 /*  $('.logo-slider4').slick({
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 0,
                    speed: 8000,
                    pauseOnHover: true,
                    arrows: false,
                    cssEase: 'linear',
  
                    "responsive": {
                      "0": {
                        "items": 2
                      },
                      "768": {
                        "items": 2
                      },
                      "992": {
                        "items": 2
                      },
                      "1200": {
                        "items": 2
                      }
                    }
  
                  }); */
  
                    // project style1
                  if ($(".project-two__box li").length) {
                    $(".project-two__box li").each(function () {
                      let self = $(this);
  
                      self.on("mouseenter", function () {
                        console.log($(this));
                        $(".project-two__box li").removeClass("active");
                        $(this).addClass("active");
                      });
                    });
                  }
  
  
                    // project style1
                    $('.project-two__carousel').owlCarousel({
                      "loop": true,
                      "autoplay": true,
                      "margin": 0,
                      "nav": false,
                      "dots": true,
                      "smartSpeed": 500,
                      "autoplayTimeout": 10000,
                      "responsive": {
                          "0": {
                            "items": 1
                          },
                          "768": {
                            "items": 1
                          },
                          "992": {
                            "items": 1
                          },
                          "1200": {
                            "items": 1
                          }
                        }
                    });
  
                     // case 6
                     $('.project-there__carousel').owlCarousel({
                      "loop": true,
                      "autoplay": true,
                      "margin": 0,
                      nav: true,
                      navText: [
                          '<i class="fa-solid fa-angle-left"></i>',
                          '<i class="fa-solid fa-angle-right"></i>'
                      ],
                      "dots": false,
                      "smartSpeed": 500,
                      "autoplayTimeout": 10000,
                      "responsive": {
                          "0": {
                            "items": 1
                          },
                          "768": {
                            "items": 1
                          },
                          "992": {
                            "items": 1
                          },
                          "1200": {
                            "items": 1
                          }
                        }
                    });
  
  
                    $('.tes2-slider').owlCarousel({
                      "loop": true,
                      "autoplay": true,
                      "margin": 0,
                      "nav": false,
                      "dots": true,
                      "smartSpeed": 500,
                      "autoplayTimeout": 10000,
                      "responsive": {
                          "0": {
                            "items": 1
                          },
                          "768": {
                            "items": 1
                          },
                          "992": {
                            "items": 1
                          },
                          "1200": {
                            "items": 1
                          }
                        }
                    });
  
  
              
              //service 7
              $(".case7-slider").slick({
                autoplay:true,
                autoplaySpeed:1500,
                margin: "30",
                slidesToShow: 5,
                arrows: true,
                centerMode: false,
                loop: true,
                centerMode: false,
                prevArrow: $(".case7-prev-arrow1"),
                nextArrow: $(".case7-next-arrow1"),
                draggable: true,
                centerPadding: "40px",
                dots: false,
                scroll: true,
                responsive: [
                  {
                    breakpoint: 769,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: "40px",
                      slidesToShow: 2,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: "40px",
                      slidesToShow: 1,
                    },
                  },
                ],
              });
  
              //service 7
              $(".service7-slider").slick({
                autoplay:true,
                autoplaySpeed:1500,
                margin: "30",
                slidesToShow: 3,
                arrows: true,
                centerMode: false,
                loop: true,
                centerMode: false,
                prevArrow: $(".service7-prev-arrow1"),
                nextArrow: $(".service7-next-arrow1"),
                draggable: true,
                centerPadding: "40px",
                dots: false,
                scroll: true,
                responsive: [
                  {
                    breakpoint: 769,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: "40px",
                      slidesToShow: 2,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: "40px",
                      slidesToShow: 1,
                    },
                  },
                ],
              });
  
  
  
              //testimonial 4
              $(".tes4-slider").slick({
                margin: "30",
                slidesToShow: 3,
                arrows: true,
                centerMode: false,
                loop: true,
                centerMode: false,
                prevArrow: $(".testimonial-prev-arrow1"),
                nextArrow: $(".testimonial-next-arrow1"),
                draggable: true,
                centerPadding: "40px",
                dots: false,
                scroll: true,
                responsive: [
                  {
                    breakpoint: 769,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: "40px",
                      slidesToShow: 2,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: "40px",
                      slidesToShow: 1,
                    },
                  },
                ],
              });
  
              //testimonial 6
              $(".tes6-slider").slick({
                margin: "30",
                slidesToShow: 3,
                arrows: true,
                centerMode: true,
                loop: true,
                autoplay: true,
                autoplaySpeed: 2000,
                centerMode: false,
                prevArrow: $(".tes6-next-arrow"),
                nextArrow: $(".tes6-prev-arrow"),
                draggable: true,
                fade: false,
                responsive: [
                  {
                    breakpoint: 769,
                    settings: {
                      arrows: false,
                      centerMode: false,
                      centerPadding: "40px",
                      slidesToShow: 1,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      arrows: false,
                      centerMode: false,
                      centerPadding: "40px",
                      slidesToShow: 1,
                    },
                  },
                ],
              });
  
              // testimonial 8//
              $('.slider-galeria').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                infinite: false,
                asNavFor: '.slider-galeria-thumbs',
                prevArrow: $('.testimonial-next-arrow2'),
                nextArrow: $('.testimonial-prev-arrow2'),
              });
              $('.slider-galeria-thumbs').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                items:15,
                arrows: true,
                asNavFor: '.slider-galeria',
                vertical: true,
                verticalSwiping: true,
                focusOnSelect: true,
                infinite: false,
                prevArrow: $('.testimonial-next-arrow2'),
                nextArrow: $('.testimonial-prev-arrow2'),
              });
  
  
              //testimonial 8
              $(".tes8-slider").slick({
                margin: "30",
                slidesToShow: 1,
                arrows: true,
                centerMode: true,
                loop: true,
                autoplay: true,
                autoplaySpeed: 2000,
                centerMode: false,
                prevArrow: $(".tes8-next-arrow"),
                nextArrow: $(".tes8-prev-arrow"),
                draggable: true,
                fade: false,
                responsive: [
                  {
                    breakpoint: 769,
                    settings: {
                      arrows: false,
                      centerMode: false,
                      centerPadding: "40px",
                      slidesToShow: 1,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      arrows: false,
                      centerMode: false,
                      centerPadding: "40px",
                      slidesToShow: 1,
                    },
                  },
                ],
              });
  
              //testimonial 8
              $(".hero10-sliders").slick({
                margin: "30",
                slidesToShow: 1,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 2000,
                centerMode: true,
                loop: true,
                centerMode: false,
                prevArrow: $(".hero10-next-arrow"),
                nextArrow: $(".hero10-prev-arrow"),
                draggable: true,
                fade: true,
                responsive: [
                  {
                    breakpoint: 769,
                    settings: {
                      arrows: false,
                      centerMode: false,
                      centerPadding: "40px",
                      slidesToShow: 1,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      arrows: false,
                      centerMode: false,
                      centerPadding: "40px",
                      slidesToShow: 1,
                    },
                  },
                ],
              });
  
     /*--------------------------------------------------------------
      17. Hover To Active
    --------------------------------------------------------------*/
      $('.cs_hover_active').hover(function () {
        $(this).addClass('active').siblings().removeClass('active');
      });
  
    //Aos animation active
  
      AOS.init({
        offset: 100,
        duration: 400,
        easing: "ease-in-out",
        anchorPlacement: "top-bottom",
        disable: "mobile",
        once: false,
      });
  
  
      //Video poppup
      if ($(".play-btn").length > 0) {
        $(".play-btn").magnificPopup({
          type: "iframe",
        });
      };
  
  
      
      
  
  
  
          // page-progress
          var progressPath = document.querySelector(".progress-wrap path");
          var pathLength = progressPath.getTotalLength();
          progressPath.style.transition = progressPath.style.WebkitTransition =
            "none";
          progressPath.style.strokeDasharray = pathLength + " " + pathLength;
          progressPath.style.strokeDashoffset = pathLength;
          progressPath.getBoundingClientRect();
          progressPath.style.transition = progressPath.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";
          var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;
          };
          updateProgress();
          $(window).scroll(updateProgress);
          var offset = 50;
          var duration = 550;
          jQuery(window).on("scroll", function () {
            if (jQuery(this).scrollTop() > offset) {
              jQuery(".progress-wrap").addClass("active-progress");
            } else {
              jQuery(".progress-wrap").removeClass("active-progress");
            }
          });
          jQuery(".progress-wrap").on("click", function (event) {
            event.preventDefault();
            jQuery("html, body").animate({ scrollTop: 0 }, duration);
            return false;
          });
          
  
  
  
      //product colors
      const colors = $(".accordion1 .accordion-item");
  
      colors.on("click", function () {
        $(".accordion1 .accordion-item").removeClass("active");
        $(this).addClass("active");
      });
  
  
    });
  
  
      //preloader
      $(window).on("load", function (event) {
        setTimeout(function () {
          $(".preloader").fadeToggle();
        }, 500);
      });
  
  
          /* Text Effect Animation */
      if ($('.text-anime-style-1').length) {
          let staggerAmount 	= 0.05,
              translateXValue = 0,
              delayValue 		= 0.5,
             animatedTextElements = document.querySelectorAll('.text-anime-style-1');
          
          animatedTextElements.forEach((element) => {
              let animationSplitText = new SplitText(element, { type: "chars, words" });
                  gsap.from(animationSplitText.words, {
                  duration: 1,
                  delay: delayValue,
                  x: 20,
                  autoAlpha: 0,
                  stagger: staggerAmount,
                  scrollTrigger: { trigger: element, start: "top 85%" },
                  });
          });		
      }
      
      if ($('.text-anime-style-2').length) {				
          let	 staggerAmount 		= 0.05,
               translateXValue	= 20,
               delayValue 		= 0.5,
               easeType 			= "power2.out",
               animatedTextElements = document.querySelectorAll('.text-anime-style-2');
          
          animatedTextElements.forEach((element) => {
              let animationSplitText = new SplitText(element, { type: "chars, words" });
                  gsap.from(animationSplitText.chars, {
                      duration: 1,
                      delay: delayValue,
                      x: translateXValue,
                      autoAlpha: 0,
                      stagger: staggerAmount,
                      ease: easeType,
                      scrollTrigger: { trigger: element, start: "top 85%"},
                  });
          });		
      }
      
      if ($('.text-anime-style-3').length) {	
          let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');
          
           animatedTextElements.forEach((element) => {
              //Reset if needed
              if (element.animation) {
                  element.animation.progress(1).kill();
                  element.split.revert();
              }
  
              element.split = new SplitText(element, {
                  type: "lines,words,chars",
                  linesClass: "split-line",
              });
              gsap.set(element, { perspective: 400 });
  
              gsap.set(element.split.chars, {
                  opacity: 0,
                  x: "50",
              });
  
              element.animation = gsap.to(element.split.chars, {
                  scrollTrigger: { trigger: element,	start: "top 95%" },
                  x: "0",
                  y: "0",
                  rotateX: "0",
                  opacity: 1,
                  duration: 1,
                  ease: Back.easeOut,
                  stagger: 0.02,
              });
          });		
      }
  
  
  
  })(jQuery);
  
  
  const rippleBtns = document.getElementsByClassName("ripple");
  
  function createRipple(event) {
    // Create the ripple span element
    let ripples = document.createElement("span");
    
    // Calculate the position relative to the button element
    let x = event.clientX - event.target.getBoundingClientRect().left;
    let y = event.clientY - event.target.getBoundingClientRect().top;
    
    // Set the position of the ripple within the button element
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    
    // Append the ripple to the button
    event.target.appendChild(ripples);
    
    // Set a timeout to remove the ripple after 1000 milliseconds
    let clearTimeoutHandle = setTimeout(() => {
      ripples.remove();
    }, 1000);
  
    // Remove the ripple immediately if the mouse leaves the button
    event.target.addEventListener("mouseout", function () {
      clearTimeout(clearTimeoutHandle);
      ripples.remove();
    });
  }
  
  // Attach the createRipple function to each button
  for (let i = 0; i < rippleBtns.length; i++) {
    const rippleBtn = rippleBtns[i];
    rippleBtn.addEventListener("mouseover", createRipple);
  }
  
  
  
  // line progress bar
  
  let progress = $('#progress1').LineProgressbar({
    percentage: 100
  });
  
  let progress2 = $('#progress2').LineProgressbar({
    percentage: 98
  });
  
  let progress3 = $('#progress3').LineProgressbar({
    percentage: 97
  });
  
  
/*   if($('.reveal').length){gsap.registerPlugin(ScrollTrigger);let revealContainers=document.querySelectorAll(".reveal");revealContainers.forEach((container)=>{let image=container.querySelector("img");let tl=gsap.timeline({scrollTrigger:{trigger:container,toggleActions:"play none none none"}});tl.set(container,{autoAlpha:1});tl.from(container,1.5,{xPercent:-100,ease:Power2.out});tl.from(image,1.5,{xPercent:100,scale:1.3,delay:-1.5,ease:Power2.out});});} */





  $(".enteprise-slider").slick({
    autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: true,
    arrows: true,
    centerMode: false,
    loop: true,
    centerMode: true,
    cssEase: 'linear',
    prevArrow: $(".case7-next-arrow1"),
    nextArrow: $(".case7-prev-arrow1"),
    // draggable: true,
    dots: false,
    // scroll: true,
    responsive: [
      {
        breakpoint: 790,
        settings: {
          
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
  
  

  $(".enteprise-slider2").slick({
    autoplay:true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: true,
    arrows: true,
    centerMode: false,
    loop: true,
    centerMode: true,
    cssEase: 'linear',
    prevArrow: $(".case7-next-arrow1"),
    nextArrow: $(".case7-prev-arrow1"),
    // draggable: true,
    dots: false,
    // scroll: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 790,
        settings: {
           slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
           slidesToShow: 2,
        },
        
      },
      {
        breakpoint:381,
        settings: {
           slidesToShow: 1,
        },
        
      },
    ],
  });
  

  $(".enteprise-slider1").slick({
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: true,
    arrows: true,
    centerMode: false,
    loop: true,
    centerMode: true,
    cssEase: 'linear',
    prevArrow: $(".case7-next-arrow1"),
    nextArrow: $(".case7-prev-arrow1"),
    // draggable: true,
    dots: false,
    // scroll: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
  

 /*    $('.left-to-right .text-slider-work').slick({
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 0,
      speed: 8000,
      pauseOnHover: true,
      arrows: false,
      infinite: true,
      centerMode: true,
      cssEase: 'linear',
      dots: false,
      variableWidth: true,
      rtl: false 
     
  });

  $('.right-to-left .text-slider-work').slick({
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 0,
      speed: 8000,
      pauseOnHover: true,
      arrows: false,
      infinite: true,
      centerMode: true,
      cssEase: 'linear',
      dots: false,
      variableWidth: true,
      rlt: true,
     
  }); */


  
  $('.left-to-right .text-slider-work').slick({
      autoplay: true,
      
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 0,
      speed: 4000,
      arrows: false,
      buttons: false,
      infinite: true,
      loop: true,
      centerMode: true,
      cssEase: 'linear',
      dots: false,
      variableWidth: true,
      rtl: false 
  });

  $('.right-to-left .text-slider-work').slick({
      speed: 4000,
      
      autoplay: true,
      autoplaySpeed: 0,
      centerMode: true,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      loop: true,
      arrows: false,
      buttons: false,
      rtl: true,
  }); 



  
  $(".banner-slider").slick({
    autoplay:true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: true,
    arrows: false,
    centerMode: false,
    loop: true,
    centerMode: true,
    cssEase: 'linear',
    dots: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 790,
        settings: {
           slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
           slidesToShow: 2,
        },
        
      },
      {
        breakpoint:381,
        settings: {
           slidesToShow: 1,
        },
        
      },
    ],
  });

  

  
  /* $(".theam-testimonial-slider .silder").slick({
    infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: true,
	prevArrow:"<button type='button' class='prev-prev-arrow pull-left '><i class='fa fa-angle-down' aria-hidden='true'></i></button>",
	nextArrow:"<button type='button' class='next-next-arrow pull-right'><i class='fa fa-angle-up' aria-hidden='true'></i></button>",
  }); */
  
  





  (function ($) {
    "use strict";

    $(document).ready(function () {
        // Ensure that Waypoints and CounterUp are loaded
        if (typeof $.fn.counterUp !== "undefined" && typeof $.fn.waypoint !== "undefined") {
            $(".counter").counterUp({
                delay: 10,  // Delay in milliseconds per step
                time: 1000  // Total animation duration
            });
        } else {
            console.error("CounterUp or Waypoints library is not loaded.");
        }
    });
	

    

    jQuery(window).on('load resize',function(){ 	
      /*Contact address  box same height*/
    $('.mission-height').height('auto');
        var highestBox_b = 0;
        $(' .mission-height').each(function(){
          if($(this).height() > highestBox_b) {
            highestBox_b = $(this).height(); 
            console.log(highestBox_b); 
          }
        });
        $('.mission-height ').height(highestBox_b);
  
  }); 


jQuery(window).on('load resize',function(){ 	
    /*Contact address  box same height*/
	$('.work-height').height('auto');
      var highestBox_b = 0;
      $(' .work-height').each(function(){
        if($(this).height() > highestBox_b) {
          highestBox_b = $(this).height(); 
          console.log(highestBox_b); 
        }
      });
      $('.work-height ').height(highestBox_b);

}); 



document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
 let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
 let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
 let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

 let initIsotope;
 imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
   initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
     itemSelector: '.isotope-item',
     layoutMode: layout,
     filter: filter,
     sortBy: sort
   });
 });

 isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
   filters.addEventListener('click', function() {
     isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
     this.classList.add('filter-active');
     initIsotope.arrange({
       filter: this.getAttribute('data-filter')
     });
     if (typeof aosInit === 'function') {
       aosInit();
     }
   }, false);
 });

});






})(jQuery);



//testimonial 6
/* $(".tes1-slider").slick({
  centerMode: true,
  centerPadding: '250px',
  slidesToShow: 1,
  margin: "30", 
  arrows: true,
  loop: true,
  prevArrow: $(".testimonial-prev-arrow1"),
  nextArrow: $(".testimonial-next-arrow1"),
  draggable: true,
  dots: false,
  scroll: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
}); */

$(".tes1-slider").slick({
  centerMode: true,
  autoplay:true,
  speed: 1000,
  slidesToShow: 3,
  slidesToShow: 2,
  margin: "30", 
  arrows: true,
  loop: true,
  prevArrow: $(".testimonial-prev-arrow1"),
  nextArrow: $(".testimonial-next-arrow1"),
  draggable: true,
  dots: false,
  scroll: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
      
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});




