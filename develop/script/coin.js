jQuery(document).ready(function($){

    $('.coin-buttons').on('click', function(){
      $(".coin-buttons").prop("disabled", true);
      var flipResult = Math.ceil(Math.random()*2);
      var flipResultText;
      $('#coin').removeClass();
      setTimeout(function(){
        $(".coin-buttons").prop("disabled", false);
        $(".flip-result").text(flipResultText);
      },3000)
      setTimeout(function(){
        if(flipResult === 1){
          $('#coin').addClass('heads');
          flipResultText = "Heads";
        }
        else{
          $('#coin').addClass('tails');
          flipResultText = "Tails";
        }
      }, 100);
      
    });
  });
  
