
let inputs = document.querySelectorAll("input");    //Pozivamo inpute, ovo sto imamo u dokumentu

let errors = {     //Pozivamo moguce greske
    "ime_prezime": [],
    "korisnicko_ime": [],
    "email": [],
    "lozinka": [],
    "ponovi_lozinku": []
};

inputs.forEach(element => {  //Dobili smo svaki element posebno
    
    element.addEventListener("change", e => {     //Kada nesto u polju promenimo da se upali event listener i da onda proverimo sta se desava
        let currentInput = e.target;   //Ovo je input koji trenutno diramo
        let inputValue = currentInput.value;   //Ovo je kad nesto upisemo u input
        let inputName = currentInput.getAttribute("name");  //Kad upisemo nesto u input da se vidi u cemu je upisano

        
        if(inputValue.length > 4) {    //Kada zelimo da svako polje ima minimum 4 karaktera
            
            errors[inputName] = [];  //Da bi ispisivalo samo jednu gresku (poslednju)
            
            switch(inputName) {    //Ako uspemo da ga slomimo preko razmaka znaci da je ime i prezime, ako ne onda nije ime i prezime
                case "ime_prezime":

                    let validation = inputValue.trim(); //Trimujemo da ne bi moglo da se pise space na pocetku i na kraju
                    validation = validation.split(" ") //Na ovaj nacin pravimo razmak da bi moglo da se pise ime i prezime
                    if(validation.length <2) {     //Ako ima manje od dve reci ne valja
                        errors[inputName].push("Moras napisati i ime i prezime")  //Ako ima manje od dve reci kazes mu da mora da pise i ime i prezime
                    }
                break;   //Posle case se uvek stavlja break, ako ne zelimo da se nastavlja dole
                    
                case "email":  //Validacija maila
                    if(!validateEmail(inputValue)) {   //Kad stavimo ! okrecemo suprotno
                        errors[inputName].push("Neispravna email adresa");  //Upisujemo u error polje ako nije dobro
                    }
                break;    //Posle case se uvek stavlja break, ako ne zelimo da se nastavlja dole

                case "ponovi_lozinku":
                    let lozinka = document.querySelector("input[name='lozinka']").value   //Izabiramo lozinku
                    if(inputValue !== lozinka) {    // !== znaci ako je razlicito od
                        errors[inputName].push("Lozinke se ne poklapaju");  //Upisujemo u error polje ako nije dobro
                    }

                break;    //Posle case se uvek stavlja break, ako ne zelimo da se nastavlja dole

            }

        } else {
            errors[inputName] = ["polje ne moze imati manje od 5 karaktera"];  //Dodaje se komentar ako ima vise od 4 karaktera
        }
        
        populateErrors();  //Pozivamo greske
    })
});

const populateErrors = () => {   //Funkcija za pozivanje gresaka
    
    for(let elem of document.querySelectorAll("ul")) {     //Treba prvo da ispraznimo listu pre nego sto bilo sta popunjavamo da se ne bi stakovalo, da pise samo jednom
        elem.remove();
    }
    
    
    for(let key of Object.keys(errors)) {   //Za svaki input popunjavamo gresku. Key je recimo ime_prezime gore, a u [] je value
        
        let input = document.querySelector(`input[name="${key}"]`);  //Uzimamo input pa njegov parent element, query element je bez all jer svaki input ima unikatno ime
        let parentElement = input.parentElement;   //Div je parent element svakog inputa
        
        let errorsElement = document.createElement("ul")    //Pravimo listu sa greskama
        parentElement.appendChild(errorsElement);

        
        errors[key].forEach(error => {     //Treba nam petlja kojom prolazimo kroz greske (da se one vide ispod polja gde unosimo)
            let li = document.createElement("li");  //Pravimo jedan item unutar liste
            li.innerText = error;

            errorsElement.appendChild(li); //Apendujemo 
        })

    }
    
}

const validateEmail = email => {  //Funkcija za mail validaciju, posle se poziva u case gore

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {    //OVO JE REGEX ZA MAIL, UVEK SE KORISTI KAD OVO TREBA!!!
    return true;
    }

    return false;
}