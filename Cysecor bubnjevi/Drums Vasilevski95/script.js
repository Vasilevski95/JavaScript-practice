// Pozivamo funkciju (uzimamo ID)
let crashRide = document.querySelector ("#crash-ride");
let hiHatTop = document.querySelector("#hihat-top");

// Animiramo funkciju, pomeramo cinelu pod uglom (vezano je za switch)
const animateCrashOrRide = () => {
    crashRide.style.transform = "rotate(0deg) scale(1.5)";
}

// Animiramo funkiju, pomeramo cinele gore dole (vezano je za switch)
const animateHiHatClosed = () => {
    hiHatTop.style.top = "171px";
}

//Dodajemo event listener za keydown (kada pritisnemo neko dugme na tastaturi)
/*window se stavlja zato sto zelimo da detektujemo pritisak dugmeta na citavoj stranici
za razliku od inputa kad se radi konkretno na nekom elementu */
window.addEventListener("keydown", (event) => {
    //Uzimamo keycode i preko njega selektujemo zvuk
    let code = event.keyCode;
    let keyElement = document.querySelector(`div[data-key="${code}"]`);

    if (!keyElement) return;
    
    let audio = document.querySelector(`audio[data-key="${code}"]`);
    //Kad ovo nije 0 zvuk ide do kraja pa se opet pusta, a kad jeste moze iznova
    audio.currentTime = 0;
    //Pustamo zvuk
    audio.play();

    //Za animaciju i pomeranje
    switch(code) {
        case 69:
        case 82:
            animateCrashOrRide();
            break;
        case 75:
        case 73:
            animateHiHatClosed();
            break;
    }

    keyElement.classList.add("playing")
});

//Ovo je kad se aktivira cinela da se rotira ili dugme, i da se vrate u prvobitni polozaj
const removeCrashRideTransition = e => {
    if(e.propertyName !== "transform") return;       //!== (razlicito od)

    e.target.style.transform = "rotate(-7.2deg) scale(1.5)";
}

const removehiHatTopTransition = e => {
    if(e.propertyName !== "top") return;        //!== (razlicito od)

    e.target.style.top = "166px";
}

const removeKeyTransition = e =>{
    if(e.propertyName !== "transform") return;

    e.target.classList.remove("playing");
}

let drumKeys = document.querySelectorAll (".key");

drumKeys.forEach(key => {
    key.addEventListener("transitionend", removeKeyTransition);
})

// Pozivamo funkciju na transition end da se vrati u prvobitni polozaj (kad se ovo zavrsi pozivamo to sto pise unutra)
crashRide.addEventListener("transitionend", removeCrashRideTransition);
hiHatTop.addEventListener("transitionend", removehiHatTopTransition);
