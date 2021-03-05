let buttons = document.querySelectorAll(".drum")

function Sound(location){
    this.sound = new Audio(location);
    this.sound.play();
}

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        MakeSound(e.target.innerHTML)
        ButtonAnimation(e.target.innerHTML);
    });
})

buttons.forEach(btn => {
    btn.addEventListener("keypress", (e) => {
        MakeSound(e.key);
        ButtonAnimation(e.key);
    });
})

function MakeSound(key) {
    switch (key) {
        case "w":
            var sound = new Audio("./sounds/crash.mp3")
            sound.play();
            break;
        case "a":
            var sound = new Audio("./sounds/kick-bass.mp3")
            sound.play();
            break;
        case "s":
            var sound = new Audio("./sounds/snare.mp3")
            sound.play();
            break;
        case "d":
            var sound = new Audio("./sounds/tom-1.mp3")
            sound.play();
            break;
        case "j":
            var sound = new Audio("./sounds/tom-2.mp3")
            sound.play();
            break;
        case "k":
            var sound = new Audio("./sounds/tom-3.mp3")
            sound.play();
            break;
        case "l":
            var sound = new Audio("./sounds/tom-4.mp3")
            sound.play();
            break;
    
        default:
            break;
    }
}

function ButtonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    if(activeButton){
        activeButton.classList.add("pressed");

        setTimeout(() => (
            activeButton.classList.remove("pressed")
        ), 200);
    }
}