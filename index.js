/*document.querySelector(".drum").addEventListener("click" , handleClick);

function handleClick(){
    alert("I Clicked it");
}*/

/* anoynomous function calling directly in document :-
document.querySelector(".drum").addEventLitener("click" , function(){
    alert("I clicked it");
})*/

// for alerts
/*let numOfDrumButtons  = document.querySelectorAll(".drum").length;
for(let i = 0 ; i< numOfDrumButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        alert("I clicked it");
    });
}*/

// for sounds play clicking
let numOfDrumButtons  = document.querySelectorAll(".drum").length;
for(let i = 0 ; i< numOfDrumButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){

        let buttonInnerHtml = this.innerHTml;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    });
}

// detecting keyboard press
 document.addEventListener("keypress" , function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
 });


function makeSound(key){

    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

        case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();


        case "j":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;

    case "k":
        var kickBass= new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

  default:console.log(buttonInnerHtml);
  } 
    }


    // Animations 
    function buttonAnimation(currentKey){
        let activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        } , 100);
    }