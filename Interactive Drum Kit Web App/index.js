var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(i=0; i<numberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        addAnimation(buttonInnerHTML)
    });
}
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    addAnimation(event.key);
});

function makeSound(key) {
    var buttonInnerHTML;
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kick_bass = new Audio("./sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "l":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
    
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function addAnimation(curr_key){
    var animated = document.querySelector("."+curr_key);
    animated.classList.add("pressed")
    setTimeout(() => {
        animated.classList.remove("pressed");
    }, 100);
}