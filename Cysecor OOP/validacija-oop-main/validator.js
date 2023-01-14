class Validator {  //Kad je klasa ne mora da se pise function posle
    constructor(config) {   //Konstruktor prima config (konfiguraciju)
        this.elementsConfig = config;  //config iz constructor ubacujemo u elementsConfig
        this.errors = {}  //Greske
        
        this.generateErrorsObject();  //Generisemo greske, ovo je funkcija pa treba da se napravi dole
        this.inputListener(); //Treba nam kad nesto napisemo u polju da dobijemo povratnu informaciju
    }

    generateErrorsObject() {
        for(let field in this.elementsConfig) {  //Za svako polje mi pravimo da u objektu ima niz u kome smestamo greske
            this.errors[field] = [];
        }
    }

    inputListener() {
        let inputSelector = this.elementsConfig; //Uzimamo elementsConfig jer su tu upisani nazivi polja

        for(let field in inputSelector) {  //Petljom prolazimo kroz polja i pravimo listener za svaki od njih

            let el = document.querySelector(`input[name="${field}"]`);

            el.addEventListener("input", this.validate.bind(this));  //input nije naziv taga, nego listener kao sto je klik kao skrol  //bind(this) pisemo da bi smo mogli da dobijemo polje koje smo promenili 
        }
    }

    validate(e) {  //Validate je funkcija koja ce da validira inpute, (e) nam je za onaj element koji menjamo
        let elFields = this.elementsConfig;  //Uzimamo sva polja

        let field = e.target;  //Sad uzimamo trenutno polje
        let fieldName = field.getAttribute ("name");   //Uzimamo od trenutnog polja fieldName
        let fieldValue = field.value;  //Isto trenutnog

        this.errors[fieldName] = [];   //Ovde cemo da upisemo greske za svako polje (ako postoje)

        if(elFields[fieldName].required) {  //Prvo smo proverili da li je required ako jeste, onda tek proveramo da li ima nesto unutar polja, ako ne nema potrebe da se proverava (to je iz script.js)
            if(fieldValue === " ") {
                this.errors[fieldName].push("Polje je prazno");
            }
        }

        if(elFields[fieldName].email) {    //Isto ovo gore samo za mail
            if(!this.validateEmail(fieldValue)) {
                this.errors[fieldName].push("Neispravna email adresa");
            }
        }

        if(fieldValue.length < elFields[fieldName].minlength || fieldValue.length > elFields[fieldName].maxlength) {   //Ako je manje od minimalnog ili vece od maksimalnog, to je greska u oba slucaja
            this.errors[fieldName].push(`Polje mora imati minimalno ${elFields[fieldName].minlength} i maksimalno ${elFields[fieldName].maxlength} karaktera`);  //U samom kodu pise
        }

        if(elFields[fieldName].matching) {  //Da vidimo da li se lozinke poklapaju
            let matchingEl = document.querySelector(`input[name="${elFields[fieldName].matching}"]`);  //Za ponovi_lozinku je matching u script.js

            if(fieldValue !== matchingEl.value) {  //Ako je razlicito od onog elementa koji smo stavili da se poklapa, onda je greska
                this.errors[fieldName].push("Lozinke se ne poklapaju");
            }

            if(this.errors[fieldName].length === 0) {  //Na ovaj nacin popunjavamo greskama
            this.errors[fieldName] = [];
            this.errors[elFields[fieldName].matching] = [];
            }
        }
        
        this.populateErrors(this.errors);  //Kada se zavrsi validacija polja, treba da se ispisu greske ovako
    }

    populateErrors(errors) {
        for(const elem of document.querySelectorAll("ul")) {
            elem.remove();
        }

        for(let key of Object.keys(errors)) {
            let parentElement = document.querySelector(`input[name="${key}"]`).parentElement;
            let errorsElement = document.createElement("ul");
            parentElement.appendChild(errorsElement);

            errors[key].forEach(error => {
                let li = document.createElement ("li")
                li.innerText = error;

                errorsElement.appendChild(li);
            });
        }
    }

    validateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {   //Regex za validaciju maila
            return (true);
        }
        return false;    
    }
    
}



