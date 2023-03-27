
// Higher Order Method take function as an argument 


// document.querySelector(".w").addEventListener("click", messageBtn);


// // function that display a message I got clicked
function messageBtn() {
    
    console.log(this.innerHTML);

    this.style.color = "white";

    var letter = this.innerHTML;
    
    makeSound(letter);

    buttonAnimation(letter);
   
   
}





// Challenge to display alert when someone clicks on a button


var drumSet = document.querySelectorAll(".drum");


// BAD PRACTICE
// drumSet[0].addEventListener("click", messageBtn);
// drumSet[1].addEventListener("click", messageBtn);
// drumSet[2].addEventListener("click", messageBtn);
// drumSet[3].addEventListener("click", messageBtn);
// drumSet[4].addEventListener("click", messageBtn);
// drumSet[5].addEventListener("click", messageBtn);
// drumSet[6].addEventListener("click", messageBtn);


// Handle it with loop

for(let i = 0; i < drumSet.length; i++) {
    drumSet[i].addEventListener("click", messageBtn);
}



function makeSound(key) {

    switch(key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default: console.log(key);
    }
}



// Animation

function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    // Set the timeout 

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 1000);

}



// keyboard events 

// anonymous function because function has no name 

document.addEventListener("keydown", function (event) {
    
     makeSound(event.key);
     buttonAnimation(event.key);
}
);


