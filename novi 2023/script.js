"use strict";
// let djole = "Sub";

// let godine = 28;

// let mesec = "5";

// mesec = parseInt(mesec);

// let imeIprezime = "Djordje Vasilevski";

// console.log(`Zovem se ${imeIprezime} i imam ${godine} godina`);

// console.log(godine + mesec);

// let prviBroj = 15;

// let drugiBroj = 30;

// let treciTmp;

// console.log("Prvi broj je: " + prviBroj);
// console.log("Drugi broj je: " + drugiBroj);

// treciTmp = prviBroj;
// prviBroj = drugiBroj;
// drugiBroj = treciTmp;

// console.log("Prvi broj je: " + prviBroj);
// console.log("Drugi broj je: " + drugiBroj);

// let godine = 18;

// console.log("Ove godine imam " + godine + " godina");

// godine += 2;

// console.log("Za dve godine cu imati " + godine + " godina");

// let prviBroj = 9;

// let drugiBroj = 9;

// if (prviBroj < drugiBroj) {
//   console.log("Prvi broj je manji od drugog");
// } else if (drugiBroj < prviBroj) {
//   console.log("Drugi broj je manji od prvog");
// } else {
//   console.log("Brojevi su jednaki");
// }

// let mesec = 4;

// switch (mesec) {
//   case 1:
//     console.log("Januar");
//     break;
//   case 2:
//     console.log("Februar");
//     break;
//   case 3:
//     console.log("Mart");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("Maj");
//     break;
//   case 6:
//     console.log("Jun");
//     break;
//   case 7:
//     console.log("Jul");
//     break;
//   case 8:
//     console.log("Avgust");
//     break;
//   case 9:
//     console.log("Septembar");
//     break;
//   case 10:
//     console.log("Oktobar");
//     break;
//   case 11:
//     console.log("Novembar");
//     break;
//   case 12:
//     console.log("Decembar");
//     break;
//   default:
//     console.log("Ovaj mesec na postoji");
//     break;
// }

// const imena = [
//   "Djole",
//   "Marko",
//   "Milana",
//   "Andrijana",
//   "Aleksandar",
//   "Stefan",
//   "Ivan",
//   "Radomir",
//   "Jelena",
//   "Jana",
// ];

// for (ime of imena) {
//   console.log(ime);
//   if (ime === "Andrijana") {
//     console.log("Imamo Andrijanu u nizu 'imena'");
//     break;
//   }
// }

// let broj = 0;

// while (broj < 100) {
//   console.log(broj);
//   broj++;
// }

// let novcanice = 50;

// let brojac = 0;

// while (brojac < novcanice) {
//   brojac++;
//   console.log(brojac);
// }

// let novcanice = [5, 10, 500, 1000, 200, 100, 20, 50];

// let brojNovcanica = 0;

// while (brojNovcanica < novcanice.length) {
//   console.log("-----------");
//   console.log("Uslov prosao");
//   console.log(
//     `Novcanica na poziciji [${brojNovcanica}]: ${novcanice[brojNovcanica]}`
//   );
//   brojNovcanica++;
// }

// let novcanice = [5, 10, 500, 1000, 200, 100, 20, 50, 10000];
// let ukupnoNovca = 0;

// for (let novcanica of novcanice) {
//   console.log(novcanica);
//   ukupnoNovca += novcanica;
// }

// console.log("Ukupno imamo " + ukupnoNovca + "Eura.");

// let automobili = ["Porche", "Audi", "BMW", "Lamborghini"];

// for (let automobil of automobili) {
//   console.log(automobil);
// }

// automobili.forEach(function (automobil) {
//   console.log(automobil);
// });

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const splicedElements = myArray.splice(2, 5, 555, 777, 999);

// console.log(splicedElements);

// console.log(myArray);

// myArray[0] = "Djole";

// myArray[1] = 1120;

// myArray[2] = false;

// console.log(myArray);

// console.log(myArray.length);

// console.log(myArray[myArray.length - 1]);

// console.log(myArray[1]);

// const pushedOnArray = myArray.push("djole");
// console.log(myArray);

// const poppedFromArray = myArray.pop();
// console.log(myArray);

// myArray.shift("Djole");
// console.log(myArray);

// myArray.unshift("Milojko");
// console.log(myArray);

// const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// niz.reverse();

// console.log(niz);

// const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArray = niz.join();

// const newestArray = newArray.split("4");

// console.log(newArray);

// console.log(newestArray);

// const myArray1 = ["A", "B", "C", "D", "E"];

// const myArray2 = ["F", "G", "H"];

// const newArray = myArray2.concat(myArray1);

// console.log(newArray);

// const myArray = [4, 2, 3, 4];

// const myFunc = (a, b, c) => {
//   return a + b + c;
// };

// console.log(myFunc(...myArray));

// const myArray1 = ["A", "B", "C", "D", "E"];

// const myArray2 = ["F", "G", "H"];

// const newArray = [...myArray1, ...myArray2];

// console.log(newArray);

// let automobili = {
//   prvi: "Audi",
//   drugi: "BMW",
//   treci: "Mitsubishi",
//   cetvrti: "Lambo",
// };
// console.log(automobili);

// let automobili = {
//   Mercedes: ["2020", "E250", "25000"],
//   Audi: ["2018", "R8", "35000"],
//   Porsche: ["2022", "Cayen", "40000"],
//   BWM: ["2021", "M3", "55000"],
// };

//Pristupanje objektima:
// console.log(automobili.Porsche);

// for (let automobil in automobili) {
//   const kola = automobili[automobil];
//   console.log(
//     `${automobil} - marka: ${kola[1]}, godiste: ${kola[0]}, cena: ${kola[2]} eura. `
//   );
// }

// let osoba = {
//   ime: "Djordje",
//   prezime: "Vasilevski",
//   godiste: 1995,
//   zanimanje: "Web developer",
// };

// console.log(
//   `Moje ime je ${osoba.ime} ${osoba.prezime}, rodjen sam ${osoba.godiste}, a po zanimanju sam ${osoba.zanimanje}`
// );

//IIFE - Immediately invoked function expression

// (function myIFFE() {
//   num++;
//   console.log(num);
//   return num !== 5 ? myIFFE(num) : console.log("FINISHED");
// })((num = 0));

//Objects
//Key value pairs in curly braces
//This refers to the object, so then we can pull another values from the object with the keyword 'this'

// const myObj = {
//   ime: "Djordje",
// };

// const mySecondObject = {
//   alive: true,
//   answer: 42,
//   beverage: ["Coffee", "Iced Tea"],
//   hobbies: {
//     morning: "Running",
//     afternoon: "Swimming",
//     night: "Reading",
//   },
//   action: function () {
//     return `Time for ${this.hobbies.morning}`;
//   },
// };

// console.log(mySecondObject.action());

// const vehicle = {
//   wheels: 4,
//   engine: function () {
//     return "vroooom!";
//   },
// };

// const truck = Object.create(vehicle);
// truck.doors = 2;
// console.log(truck);
// console.log(vehicle.wheels); //Inheritance
// console.log(vehicle.engine());

// const car = Object.create(vehicle);
// car.doors = 4;
// console.log(car.doors);
// car.engine = function () {
//   return "Whoooosh!";
// };
// console.log(car.engine());

// const tesla = Object.create(car);
// console.log(tesla.doors);
// tesla.engine = function () {
//   return "Shhhh";
// };

// console.log(tesla.engine());

// const band = {
//   guitar: "Jimmy Page",
//   vocal: "Robert Plant",
//   bass: "John Paul Jones",
//   drums: "John Bonham",
// };

// console.log(band.hasOwnProperty("drums"));
// console.log(band);
// console.log(Object.keys(band));
// console.log(Object.values(band));

// for (let guy in band) {
//   console.log(`${guy} is ${band[guy]}`);
// }

// const band = {
//   guitar: "Jimmy Page",
//   vocal: "Robert Plant",
//   bass: "John Paul Jones",
//   drums: "John Bonham",
// };

//Destructuring

// const { guitar, vocal, bass, drums } = band;

// console.log(guitar);

// function singer({ vocal }) {
//   return `${vocal} sings`;
// }

// console.log(singer(band));

//OBJECTS bro code

//Object - A container for properties/methods
//Properties - Values/variables that describe what the object has
//Methods - Function that describes what an object do

// const covek = {
//   ime: "Rick",
//   godine: 27,

//   eat: function () {
//     return `${covek.ime} is eating.`;
//   },

//   drink: function () {
//     return "Rick is drinking a lot...";
//   },
// };

//dot notation

//bracket notation
// console.log(covek["ime"]);

//CLASSES
//Class - A blueprint for creating objects
//Define properties and/or method
// Properties are unique characteristics of an objects (variable/value)
//Methods are functions that belong to objects (what kind of actions does an object perform)

// class Car {
//   drive() {
//     console.log("You are driving a car!");
//   }

//   brake() {
//     console.log("You are stepping on a brake!");
//   }
// }

// const porsche = new Car();
// porsche.brake();

// class Pizza {
//   constructor(pizzaType, pizzaSize) {
//     this.type = pizzaType;
//     this.size = pizzaSize;
//     this.crust = "original";
//   }

//   getCrust() {
//     return this.crust;
//   }

//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }

//   baking() {
//     console.log(
//       `Baking a ${this.size} size and ${this.crust} crust pizza with ${this.type}`
//     );
//   }
// }

// const bakingPizza = new Pizza("pepperoni", "small");

// bakingPizza.setCrust("thin");

// bakingPizza.baking();

// console.log(bakingPizza.getCrust());

// class Driving {
//   constructor(carName, carType, carEngine) {
//     this.car = carName;
//     this.type = carType;
//     this.engine = carEngine;
//     this.motors = [];
//   }

//   getCar() {
//     return this.car;
//   }

//   setCar(carName) {
//     this.car = carName;
//   }

//   getType() {
//     return this.type;
//   }

//   setType(carType) {
//     this.type = carType;
//   }

//   getMotors() {
//     return this.motors;
//   }

//   setMotors(motor) {
//     this.motors.push(motor);
//   }

//   drive() {
//     return `I'Am driving a ${this.car}, and the type of that car is ${this.type}, with a ${this.engine} engine, we might replace it with ${this.motors}`;
//   }
// }

// const carDrive = new Driving("porsche", "cayen", "V8");

// carDrive.setCar("Lambo");

// carDrive.setType("Murcielago");

// carDrive.setMotors("V12");
// carDrive.setMotors("V10");

// console.log(carDrive.getMotors());

// console.log(carDrive.drive());

// class Pizza {
//   constructor(pizzaType, pizzaTopping) {
//     this.type = pizzaType;
//     this.topping = pizzaTopping;
//     this.bakery = [];
//   }

//   getMyBakery() {
//     return this.bakery;
//   }

//   setMyBakery(bakers) {
//     this.bakery.push(bakers);
//   }

//   getMySause() {
//     return this.sause;
//   }

//   setMySause(myNewSause) {
//     this.sause = myNewSause;
//   }

//   baking() {
//     return console.log(
//       `I'Am baking ${this.type} with ${this.topping}, with ${this.sause} over it and baked in ${this.bakery}`
//     );
//   }
// }

// const bakingPizza = new Pizza("margarita", "sausage");

// bakingPizza.setMySause("ketchup");

// bakingPizza.setMyBakery("oven");
// bakingPizza.setMyBakery("tray");

// bakingPizza.baking();

// console.log(bakingPizza.getMyBakery());

// console.log(bakingPizza.getMySause());

// class Pizza {
//   constructor(pizzaType, pizzaSlices) {
//     this.type = pizzaType;
//     this.topping = "sausage";
//     this.slices = 8;
//   }

//   getMySause() {
//     return this.sause;
//   }

//   setMySause(sauses) {
//     this.sause = sauses;
//   }
// }

// class SpecialityPizza extends Pizza {
//   constructor(pizzaType, pizzaSlices) {
//     super(pizzaType, pizzaSlices);
//     this.type = "carbonara";
//   }

//   slicedPizza() {
//     console.log(
//       `My ${this.type} with ${this.topping} is sliced ${this.slices} times`
//     );
//   }
// }

// const mySpeciality = new SpecialityPizza();

// mySpeciality.slicedPizza();

//Factory functions

// function pizzaFactory(pizzaSize) {
//   const type = "margarita";
//   const size = pizzaSize;

//   return {
//     bake: () => console.log(`Baking ${type} that is ${size} size.`),
//   };
// }

// const myPizza = pizzaFactory("medium");

// myPizza.bake();

// class Pizza {
//   sause = "tomato";
//   #size = "large";
//   constructor(pizzaType) {
//     this.type = pizzaType;
//     this.topping = "sausage";
//   }

//   getMySause() {
//     return this.sause;
//   }

//   setMySause(pizzaSauses) {
//     this.sause = pizzaSauses;
//   }

//   baking() {
//     return console.log(
//       `I'Am baking a ${this.#size} ${this.type} pizza with ${
//         this.topping
//       } and ${this.sause} sause. `
//     );
//   }
// }

// const myPizza = new Pizza("carbonara");

// myPizza.baking();
// console.log(myPizza.getMySause());

/*JSON - JavaScript object notation

JSON is used to send and receive data
JSON is a text format that is completely language independent
Meaning JSON is used to send and receive data in many languages not just JS
*/

// const myObj = {
//   name: "Djordje",
//   hobbies: ["eat", "sleep", "code"],
//   hello: function () {
//     console.log("hello");
//   },
// };

// console.log(myObj);
// console.log(myObj.name);
// myObj.hello();
// console.log(typeof myObj);

// const sendJSON = JSON.stringify(myObj);
// console.log(sendJSON);
// console.log(typeof sendJSON);
// console.log(sendJSON.name);

// const receiveJSON = JSON.parse(sendJSON);
// console.log(receiveJSON);
// console.log(typeof receiveJSON);

// variable = "DJORDJE";
// console.log(variable); -> Reference error

// Object..create() -> Syntax error

// const ime = "Djordje";
// ime = "Marko"; // Type error (Assignment to constant variable)

// const makeError = () => {
//   try {
//     const ime = "Djordje";
//     ime = "Marko";
//   } catch (err) {
//     console.table(err);
//   }
// };

// makeError();

//Leetcode 1. Two Sum -> best solution

//DOM - Document Object Model

/*
With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

The HTML DOM (Document Object Model)
When a web page is loaded, the browser creates a Document Object Model of the page.

The HTML DOM model is constructed as a tree of Objects
*/

// const view1 = document.getElementById("view1");
// console.log(view1);

// const view2 = document.querySelector("#view2");
// console.log(view2);

// view1.style.display = "flex";

// view2.style.display = "none";

// const views = document.getElementsByClassName("view");

// console.log(views);

// const sameViews = document.querySelectorAll(".view");

// console.log(sameViews);

// const divs = document.querySelectorAll("div");
// console.log(divs);

// const sameDivs = document.getElementsByTagName("div");
// console.log(sameDivs);

// const evenDivs = document.querySelectorAll("div:nth-of-type(2n)");

// console.log(evenDivs);

// for (let i = 0; i < evenDivs.length; i++) {
//   evenDivs[i].style.backgroundColor = "red";
//     evenDivs[i].style.width = "200px";
//     evenDivs[i].style.height = "200px";
// }

// const changeNav = document.querySelector("nav h1");
// console.log(changeNav);

// changeNav.textContent = "Hello World!";

// const navBar = document.querySelector("nav");
// navBar.innerHTML = `<h1>Hello!</h1> <p>This is aligned text!</p>`;

// console.log(navBar);

// navBar.style.justifyContent = "space-evenly";

// console.log(evenDivs[0]);
// console.log(evenDivs[0].parentElement);
// console.log(evenDivs[0].parentElement.children);
// console.log(evenDivs[0].parentElement.childNodes);
// console.log(evenDivs[0].parentElement.hasChildNodes());
// console.log(evenDivs[0].parentElement.lastChild);
// console.log(evenDivs[0].parentElement.lastElementChild);
// console.log(evenDivs[0].parentElement.firstChild);
// console.log(evenDivs[0].parentElement.firstElementChild);
// console.log(evenDivs[0].nextSibling);
// console.log(evenDivs[0].nextElementSibling.nextElementSibling);

// view1.style.display = "none";
// view2.style.display = "flex";
// view2.style.flexDirection = "row";
// view2.style.flexWrap = "wrap";
// view2.style.margin = "10px";

// while (view2.lastChild) {
//   view2.lastChild.remove();
// }

// const createDivs = (parent, iterator) => {
//   const newDiv = document.createElement("div");
//   newDiv.textContent = iterator;
//   newDiv.style.backgroundColor = "#000";
//   newDiv.style.width = "100px";
//   newDiv.style.height = "100px";
//   newDiv.style.margin = "10px";
//   newDiv.style.display = "flex";
//   newDiv.style.justifyContent = "center";
//   newDiv.style.alignItems = "center";
//   parent.append(newDiv);
// };

// for (let i = 0; i <= 10; i++) {
//   createDivs(view2, i);
// }

// createDivs(view2, 10);

// const view = document.querySelector("#view2");

// console.log(view);
