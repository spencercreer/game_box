jQuery(document).ready(function($){

    $('.coin-buttons').on('click', function(){
      $(".coin-buttons").prop("disabled", true);
      var flipResult = Math.ceil(Math.random()*2);
      console.log(flipResult)
      $('#coin').removeClass();
      setTimeout(function(){
        $(".coin-buttons").prop("disabled", false);
      },3000)
      setTimeout(function(){
        if(flipResult === 1){
          $('#coin').addClass('heads');
          $(".flip-result").text('it is heads');
        }
        else{
          $('#coin').addClass('tails');
          $(".flip-result").text('it is tails');
        }
      }, 100);
      
    });
  });
  
