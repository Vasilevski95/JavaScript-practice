// Selektovanje elementa po ID-u i brisanje iz HTML-a //remove() sluzi za brisanje.
let recenica = document.querySelector("#recenica");
recenica.remove();


//Kreiranje novog DIV elementa.
let novi_el = document.createElement("div");
novi_el.classList = "novi-element"; // Dodajemo klasu 
novi_el.innerHTML = "<hr>pozdrav!!!"; // Dodajemo HTML i text


let body = document.querySelector("body"); // Selektujemo Body tag

body.appendChild(novi_el); // Na kraju body Taga dodajemo nas novi element

