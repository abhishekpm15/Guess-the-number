
var started = false;
var count=0;
var cardNumber;
var userbtn;
$(".btn").prop('disabled',true);
$(document).on("keydown",function(){
    if(!started){
        count=0;
        $("#start").text("Game Started");
        $("#score").html("Your score: "+ count);
        started=true;
        $(".btn").prop('disabled',false);
        again();
    }
   
})

cardNumber=Math.floor(Math.random()*2)+1;
$(".btn").on("click",function(){
    userbtn = $(this).attr("id");
    guessnumber(userbtn);
});


function guessnumber(num1){
    if(cardNumber === Number(num1)){
        $("#rand").text("Yep..");
        count++;
        $("#score").html("Your score: " + count);
        $("body").addClass("passed");
        $(".heading").addClass("headpassed");
        setTimeout(function(){
            $("body").removeClass("passed");
            $(".heading").removeClass("headpassed"); 
            again(); 
        },500);
    }
    else{
        $("#rand").html("Oops..");
        $("body").addClass("failed");
        $(".heading").addClass("headpassed");
        setTimeout(function(){
            $("body").removeClass("failed");
            $(".heading").removeClass("headpassed");  
        },500);
        $("#start").text("Press any Key to start");
        startover();
    }
    
}

function startover(){
    count=0;
    $("#score").html("Game Over");
    $(".btn").prop('disabled',true);
    started=false;
    cardNumber=0;
}

function again(){
    $("#score").text("Your score: " + count);
    cardNumber=Math.floor(Math.random()*2)+1;
    $("#rand").html("");
    console.log(cardNumber);

}