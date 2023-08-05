var game_pattern=[];
var user_clicked_pattern=[];
var button_colours=["red", "blue","green","yellow"];

var started=false;
var level=0;

$(document).keydown(function(){
    if(!started){
        $("h1").text("level "+level);
        next_Sequence();
        started=true;
    }
});


$(".pos").click(function(){
    var use_chosen_color=$(this).attr("id");
    user_clicked_pattern.push(use_chosen_color);

    play_sound(use_chosen_color);
    animate_press(use_chosen_color);
    check_ans(user_clicked_pattern.length-1);
});

function check_ans(current_level){
    if(game_pattern[current_level]===user_clicked_pattern[current_level]){
        console.log("success");
        if(user_clicked_pattern.length===game_pattern.length){
            setTimeout(function(){
                next_Sequence();
            },1000);
        }
    }
    else{
        console.log("wrong");
        play_sound("wrong");

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart");

        start_over();
    } 


}

function next_Sequence(){

    user_clicked_pattern=[];

    level++;
    $("h1").text("level "+level);
    var random_number= Math.floor((Math.random()*4));
    var random_choose_color=button_colours[random_number];
    game_pattern.push(random_choose_color);
    $("."+random_choose_color).fadeIn(50).fadeOut(50).fadeIn(50);

    play_sound(random_choose_color);
}



function play_sound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animate_press(current_color){
    $("."+current_color).addClass("pressed");
    setTimeout(function(){
        $("."+current_color).removeClass("pressed");
    }, 100);
}

function start_over(){
    level=0;
    game_pattern=[];
    started=false;
}


function onClickinst(){
    // alert("clicked");
    document.getElementById("id1").classList.toggle("icon");
    document.getElementById("id2").classList.toggle("change");
}