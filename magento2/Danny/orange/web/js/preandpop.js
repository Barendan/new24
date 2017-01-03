
require([
    "jquery"
  ], function($) {

  	$(document).ready(function() {
        console.log("Pre & Pop: Initialized.");
        
        $('.se-pre-con').hide();
        setTimeout(function(){ 
          $('.se-pre-con').fadeOut(1000);
        }, 4500);  
    });

    // =========== SUBSCRIPTION POPUP =================
    
    // $('.pop-overlay').hide();
    idleTime = 0;
    $(document).ready(function(){
      $limit = 5;
      
      // if ($.cookie('test_status') != '1') {
      //   $.get('form.html', function(data) {
      //     $('.subs-popup').html(data);
      //   });
        function timerIncrement() {
          idleTime = idleTime + 1;
          if (idleTime > $limit) { 
            // $('#popup').modal();
            // $('.subs-popup ').show();
            // alert("hello");
            idleTime = 0;
          }
        }
        
        var idleInterval = setInterval(timerIncrement, 1000); // 1 second

        $(this).mousemove(function (e) {
          idleTime = 0;
        });
        $(this).keypress(function (e) {
          idleTime = 0;
        });
        
        // $.cookie('test_status', '1', { expires: 30 });
      // }
    });

    $('.close').click( function() {
      $('.pop-overlay').fadeOut();
    });
    $('#submit').click( function() {
      $('.pop-overlay').fadeOut();
    });
    $('.memberOnly').click( function() {
      $('.pop-overlay').fadeOut();
    });

})
