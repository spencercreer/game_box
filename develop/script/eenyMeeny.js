$(document).ready(function() {
    // Declare variables
    var names = [];
    var k = 0; //textColors increment
    var n = 0; //name id increment
    var textColors = ["text-primary", "text-danger", "text-warning", "text-success"];
    var eenyMeeny = ['Eeny,', ' meeny,', ' miny,', ' moe,', ' Catch a', ' tiger', ' by the', ' toe.', ' If he', ' hollers,', ' let him', ' go,', ' Eeny,', ' meeny,', ' miny,', ' moe.']
    
    // Shuffle textColors array
    for (let i = textColors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [textColors[i], textColors[j]] = [textColors[j], textColors[i]];
    }

    $(".addNameBtn").on("click", function(){
        // Get input value and push to names array
        $(".names").css("opacity", "1");
        newName = $(".name-input").val();
        $(".name-input").val("");
        $(".name-input").focus();
        names.push(newName);
        // Append name to names-list element, assign color from textColors array
        newNameEl = $("<li>");
        newNameEl.text(newName);
        newNameEl.addClass(textColors[k]);
        newNameEl.addClass("names");
        newNameEl.attr("id", "name" + n)
        $(".names-list").append(newNameEl);
        k++;
        n++;
        if(k > 3){k = 0;}
        // Add names to local storage
        localStorage.setItem("storedNames", JSON.stringify(names));
    });

    $(".randomNameBtn").on("click",function(){
        let m = 0;
        $(".eenyMeenyText").empty();
        if(names.length === 0){
            alert("No names have been entered!")
        } else{
            // Disable all buttons
            $(".randomNameBtn").prop("disabled", true);
            $(".addNameBtn").prop("disabled", true);
            $(".clearNamesBtn").prop("disabled", true);
            
            var spinWheel = setInterval(function() {
                $(".names").css("opacity", "0.2");
                $(".eenyMeenyText").append(eenyMeeny[m]);
                randomNum = Math.floor(Math.random()*names.length);
                document.getElementById("name" + randomNum).style.opacity = 1;
                m++;
                if(m >= eenyMeeny.length){
                    clearInterval(spinWheel);
                    m = 0;
                    // Enable all buttons
                    $(".randomNameBtn").prop("disabled", false);
                    $(".addNameBtn").prop("disabled", false);
                    $(".clearNamesBtn").prop("disabled", false);
                }
            }, 400);     
        }
    });

    $(".clearNamesBtn").on("click", function(){
        // Clear names array and names list
        names = [];
        $(".names-list").empty();
    });
});
