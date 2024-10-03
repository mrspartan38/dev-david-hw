$(document).ready(function(){
  
  $('#reset').on('click', function(){
    //move my doge back to the start 
    $("#sillyCat").css( 'top', '0px').css('left', '0px');
    const element = document.getElementById("h2");
    element.remove();
    //https://jqueryui.com/position/
  })
  
  $("img").draggable( {
      stop: function() {
       // alert('dragged'); 
        
        if ( $("img").position().left > 100)
          {
            $("body").append("<h2>YOU WON</h2> ") 
          }
        else (
          $("body").append("<h2>keep searching</h2> ")
        )
        // alert( $("img").position().left ); 
        
 
      }
  });  
 
  //TODO: if position is on the far rihgt side, tell user they won 
  
  
 
  
  
  
});
