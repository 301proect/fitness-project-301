'use strict';
    $('#my-food').on('click' , function (val) {
       if (val === 'default' ){
        // $('.my-profil').html('');
        $('.results').hide();
        $('.exercise-Section').hide();   
       }else{
        $('.results').slideToggle(700);   
       }

    });

    $('#my-exercise').on('click' , function (val) {
        if (val === 'default'){
            // $('.my-profil').html('');
         $('.exercise-Section').hide();  
         $('.results').hide(); 
        }else{
         $('.exercise-Section').slideToggle(700);   
        }
 
     })
