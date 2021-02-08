$(document).ready(function(){
  // Declare variables
  var flipResult, flipResultText;
  var totalHeads = 0;
  var totalHeadsPercent;
  var totalTails = 0;
  var totalTailsPercent;
  var score = 0;
  var scorePercent;

    $('.coin-buttons').on("click", function(){
      $("#coin").removeClass();
      $(".coin-buttons").prop("disabled", true);
      // Generate random number between 1 (heads) and 2 (tails)
      flipResult = Math.ceil(Math.random()*2);
      // Update player score based on button clicked
      if(this.innerHTML === "Heads" && flipResult === 1){
        // Heads clicked; Flip heads
        flipResultText = "Heads, you win!";
        totalHeads ++;
        score ++;
      } else if(this.innerHTML === "Tails" && flipResult === 2){
        // Tails clicked; Flip tails
        flipResultText = "Tails, you win!";
        score ++;
        totalTails ++;
      } else if(this.innerHTML === "Heads" && flipResult === 2){
        // Heads clicked; Flip tails
        flipResultText = "Tails, you lose!";
        totalTails ++;
      } else {
        // Tails clicked; Flip heads
        flipResultText = "Heads, you lose!";
        totalHeads ++;
      }

      
      // Disable buttons and delay result for three seconds
      setTimeout(function(){
        $(".coin-buttons").prop("disabled", false);
        $(".flip-result").text(flipResultText);
        $(".total-heads").text("Total Heads: " + totalHeads);
        $(".total-tails").text("Total Tails: " + totalTails);
        $(".score").text("Score: " + score);
      },3000)

      // Add class for coin flip based on flipResult
      setTimeout(function(){
        if(flipResult === 1){
          $("#coin").addClass("heads");
        }
        else{
          $("#coin").addClass("tails");
        }
      }, 100);
      
    });
  });
  
