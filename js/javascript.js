// Burger Menu Toggle
$('.burger_menu').click(function(){
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
});


// Initialize Full Page JS
$(document).ready(function(){
    if ($(window).width() > 992) {
        new fullpage('#fullpage', {
            sectionsColor: ['transparent'],
            navigationTooltips: ['Home', 'About', 'Experience & Education', 'Skills', 'Projects', 'Contact'],
            navigation: true,
            slidesNavigation: true,
            licenseKey: 'YOUR LICENSE KEY HERE',
            onLeave: function(origin, destination, direction){
                window.fullpage_api = this;
            },
            afterLoad: function(origin, destination, direction){
                window.fullpage_api = this;
            },
            afterRender: function(){
                window.fullpage_api = this;
            }
        });
    }

    // Mobile smooth scroll
    if ($(window).width() <= 992) {
        $('.nav-link').on('click', function(e){
            e.preventDefault();
            var target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 800);
        });
    }
});


// Navigation Link Click Handler
$(document).on('click', '.nav-link', function(e){
    e.preventDefault();
    
    var sectionNumber = parseInt($(this).data('section'));
    
    // Close the menu
    $('.burger_menu').removeClass('active');
    $('#menu').removeClass('open');
    
    // Check if fullpage API is available and navigate
    if(typeof fullpage_api !== 'undefined' && fullpage_api){
        fullpage_api.moveTo(sectionNumber);
    } else {
        // Fallback: try to access from window
        setTimeout(function(){
            if(typeof window.fullpage_api !== 'undefined' && window.fullpage_api){
                window.fullpage_api.moveTo(sectionNumber);
            }
        }, 100);
    }
});



// Contact Form Handler
$(document).ready(function(){
    $('#contactForm').on('submit', function(e){
        e.preventDefault();
        
        // Get form values
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const message = $('#message').val().trim();
        
        // Basic validation
        if(!name || !email || !message){
            alert('Please fill in all fields');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            alert('Please enter a valid email address');
            return;
        }
        
        // Get the button
        const $button = $(this).find('button[type="submit"]');
        const originalText = $button.text();
        
        // Disable button during submission
        $button.prop('disabled', true).text('Sending...');
        
        // Show confirmation and submit the form through Formsubmit.co
        alert('Thank you! Your message has been submitted successfully. I\'ll get back to you as soon as possible.');
        $('#contactForm')[0].submit();
    });
});


// Scroll Event Handler for Adding Class
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 40) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });
});