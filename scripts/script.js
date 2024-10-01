$(document).ready(function(){
  
    $('#reset').on('click', function(){
      //move my doge back to the start 
      $("#dogePic").css( 'top', '0px').css('left', '0px');
      //https://jqueryui.com/position/
    })
    
    $("img").draggable( {
        stop: function() {
         // alert('dragged'); 
          
          if ( $("img").position().left > 100)
            {
              //they won
              $("body").append("<h2>YOU WON</h2> ") 
            }
          // alert( $("img").position().left ); 
          
   
        }
    });  
   
    //TODO: if position is on the far rihgt side, tell user they won 
    
    
   
    
    
    
  });
  
  