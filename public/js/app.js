<<<<<<< HEAD
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
 
/////////////////////////// update ///////////////////////////////

$(document).ready(function () {
    $('#update-form').hide();
})
$('#update').click(function () {
    $('#update-form').show()
})

///////////////////////////////////////////////
$("#add-to-me").click(function() {
    // swal("Success Message Title", "Well done, you pressed a button", "success")
    alert('thanks its add' );
  });
=======
'use strict'


// the humburger function ...
$(".menu-opener").click(function(){
    $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
  });
>>>>>>> dev
