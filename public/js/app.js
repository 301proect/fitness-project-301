'use strict';
$(document).ready( function () {
   $('.results').hide();
   $('.exercise-Section').hide();
})
    $('#my-food').on('click' , function (val) {
        // $('.my-profil').html('')
        $('.exercise-Section').hide();   
        $('.results').slideToggle(700);

    });

    $('#my-exercise').on('click' , function (val) { 
         $('.results').hide(); 
         $('.exercise-Section').slideToggle(700);  
 
     })
///////////////////////// for flash massage ////////////////////////////////////////
    //  (function($) {
    //     $.fn.flash_message = function(options) {
          
    //       options = $.extend({
    //         text: 'Done',
    //         time: 2500,
    //         how: 'before',
    //         class_name: ''
    //       }, options);
          
    //       return $(this).each(function() {
    //         if( $(this).parent().find('.flash_message').get(0) )
    //           return;
            
    //         var message = $('<span />', {
    //           'class': 'flash_message ' + options.class_name,
    //           text: options.text
    //         }).hide().fadeIn('fast');
            
    //         $(this)[options.how](message);
            
    //         message.delay(options.time).fadeOut('normal', function() {
    //           $(this).remove();
    //         });
            
    //       });
    //     };
    // })(jQuery);
    
    // $('.add-item').click(function() {
    
    //     $('#status-area').flash_message({
    //         text: 'Added to cart!',
    //         how: 'append'
    //     });
    // });
/////////////////////////// update ///////////////////////////////

$(document).ready(function () {
    $('#update-form').hide();
})
$('#update').click(function () {
    $('#update-form').show()
})