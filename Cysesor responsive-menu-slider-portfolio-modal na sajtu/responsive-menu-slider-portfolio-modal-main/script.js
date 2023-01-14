/* OVO JE RESPONSIVE MENU */
// Pozivamo mobile menu funkciju
const mobileMenu = () => {
    //Uzimamo UL menu
    let menu = document.querySelector(".header ul");
    //Uzimamo button
    let btn = document.querySelector(".header button");

    //Ako se otvori menu treba da pise close, pa se klikne close vraca se na menu
    if(btn.innerText === "MENU") {
        menu.style.display = "block"; 
        btn.innerText = "CLOSE"; 
    }   else {
        menu.style.display = "none";
        btn.innerText = "MENU"; 
    }

    //Citav CSS moze da se pise preko JS (napises naziv elementa tacka pa style tacka i onda koji css se menja)
    /* menu.style.display = "block"; */
    //Kad kliknemo "MENU" umesto njega pise "CLOSE" da bi mogli da zatvorimo
    /* btn.innerText = "CLOSE"; */
}

/* OVO JE GALERIJA */

//Uzimamo desno dugme (strelica)
let rightBtn = document.querySelector("#right-btn");
//Uzimamo levo dugme (strelica)
let leftBtn = document.querySelector("#left-btn");
//Uzimamo slike ali mora querySelectorAll jer ima vise slika
let pictures = document.querySelectorAll(".slider-images img");
//Prva slika je na poziciji 0
let imgNum = 0;

//Pomeramo slike udesno
const moveRight = () => {
    displayNone(pictures);
    imgNum++;
    //Ako smo dobili onolko kolko ima slika, onda se vraca na nultu poziciju
    if(imgNum === pictures.length) {
        imgNum=0;
    }

    pictures[imgNum].style.display = "block";
}

//Pomeramo slike ulevo
const moveLeft = () => {
    displayNone();
    //Kad kliknes levo dugme slike idu unazad
    imgNum--;
    //Ako imgNum ide u minus onda ga vraca na poslednju sliku
    if(imgNum === -1) {
        imgNum = pictures.length -1;
    }
    //Ova komanda sluzi da menja slike nakon klika
    pictures[imgNum].style.display = "block";
}


//Pravimo event listener za desno dugme
rightBtn.addEventListener("click", moveRight);

//Pravimo event listener za levo dugme
leftBtn.addEventListener("click", moveLeft);

//Ova funkcija ce da sakrije sve slike
const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = "none"
    })
}

/* OVO JE PORTFOLIO */

//Pozivamo button
const portfolioSort = (button) => {
    //Iz buttona uzimamo data category
    let category = button.getAttribute("data-category");
    //Kad kliknemo na neki sakrijemo sve
    let portfolioItems = document.querySelectorAll(".portfolio-single-item");
    portfolioItems.forEach((item) => {
        item.style.display = "none";
    });
    //Ako izaberemo sve onda se opet pojave
    if(category === "sve") {
        portfolioItems.forEach((item) => {
            item.style.display = "block";
        });
    }
    //Da li data category od portfolio itema sadrzi kategoriju koju smo kliknuli
    portfolioItems.forEach((item) => {
        if(item.getAttribute("data-category").includes(category)) {
            item.style.display = "block"
        }
    });

}


/* OTVARANJE MODALA */
//Uzimam modal i overlay preko let, a ovo sa style se pokazuje modal
const openModal = () => {
    let modalWindow = document.querySelector(".popup-modal");
    let overlay = document.querySelector(".overlay")

    modalWindow.style.display = "block";
    overlay.style.display = "block";
}


/* Zatvaranje modala */
const closeModal = () => {
    ////Uzimam modal i overlay preko let, a ovo sa style se sakriva modal
    let modalWindow = document.querySelector(".popup-modal");
    let overlay = document.querySelector(".overlay")

    modalWindow.style.display = "none";
    overlay.style.display = "none";
}