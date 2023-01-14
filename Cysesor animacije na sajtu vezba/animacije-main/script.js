//Uzeli smo textTag
let textTag = document.querySelector(".section1 h1");
//Uzeli smo text
let text = textTag.textContent;

let splittedText = text.split("");
// Ovako brisemo recenicu "ovo je animirani text iz "elements""
textTag.innerHTML = " "
//Na ovaj nacin pravimo span sa svakim slovom
for(let i=0; i < splittedText.length; i++) {
    if(splittedText[i] == " ") {
        splittedText[i] = "&nbsp";
    }
//Ovo je komanda za razdvojeni tekst
    textTag.innerHTML += `<span>${splittedText[i]}</span>`
}

    //Selektujemo svako slovo
    let spans = textTag.querySelectorAll("span");

//Funkcija koja ponavlja neku radnju u odredjenom razmaku vremena
let k = 0;
let interval = setInterval(() => {

    //Jedan po jedan
    let singleSpan = spans[k]

    singleSpan.className = "fadeMove";
    
    //Svako naredno slovo se dodaje
    k++;
    //Preko if gasimo animaciju texta kad se zavrsi
    if(k === spans.length) {
        clearInterval(interval);
    }
}, 70);       //Ovo u milisekundama

//Pozivamo border line
let border = document.querySelector(".border-line");
//Pozivamo animaciju da je nula
let animationWidth = 0;

//window funkcija radi sa recimo skrolom i takvim stvarima
window.onscroll = () => {
    //Ako je stari skrol veci od trenutnog, znaci da idemo ka gore a ako nije onda ka dole
    if(this.oldScroll > this.scrollY) {
        animationWidth -= 15;
    } else {
        animationWidth += 15;
    }

    //Ogranicavamo animaciju na max 100
    if(animationWidth >= 100) {
        animationWidth = 100;
    }

    if(animationWidth <=0) {
        animationWidth = 0;
    }

    border.style.width = animationWidth + "%";

    this.oldScroll = this.scrollY;

    imageAnimation();
}


const imageAnimation = () => {
    //Odredjujemo poziciju slika 
    let sectionForAnimation = document.querySelector(".section2 .images");

    //Odredjujemo koliko su slike udaljene od vrha browsera (zato je top)
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;

    //Ovo je visina browsera
    let screenPosition = window.innerHeight / 1.3;

    //Pozivamo sliku da slajduje sleva
    let leftImage = document.querySelector(".slideFromLeft");
    //Pozivamo sliku da slajduje sdesna
    let rightImage = document.querySelector(".slideFromRight");

    //Ako je pozicija slike manja od pozicije
    
    if(sectionPosition < screenPosition) {
        //Ovo je komanda za animaciju
        leftImage.classList.add("animated");
        rightImage.classList.add("animated");
    }    
}
