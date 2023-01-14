function inflationCalculator() {
    let inflationRate = document.querySelector("#inflationRate");
    let money = document.querySelector("#money");
    
    // ParseFloat sluzi za pretvaranje stringa u broj sa zarezom
    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value)

    let years = document.querySelector("#years").value
    years = parseFloat(years);

    // Formula za izracunavanje inflacije.
    let worth = money + (money * (inflationRate / 100));
    console.log(worth);

    //Formula za izracunavanje inflacije.
    for(let i=1; i <years; i++){
        worth += worth * (inflationRate / 100);
    }

    worth = worth.toFixed(2);
    
    console.log(worth);

    let newElement = document.createElement ("div");  //€
    newElement.className = `new-value`;
    newElement.innerText = `Today ${money}€ will be ${worth}€ for ${years} years.`

    document.querySelector(".container").appendChild(newElement);

}