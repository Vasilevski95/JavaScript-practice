// 'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;

// if(hasDriversLicence) console.log('I can drive :D')

// const interface = 'Audio' // RESERVER WORDS (CAN BE USED IN THE FUTURE)

// const private = 532; //RESERVED WORDS (CAN BE USED IN THE FUTURE)

// NASLOV: Function

//Definicija: A function is a piece of code that we can reuse over and over again in our code

// {} - Function body - This code in the body will be executed when we run function

// function logger() {
//     console.log('My name is Djordje');
// }

// logger();
// logger();
// logger();

// This process is called invoking the function (also calling / running)
// We can use this function as many time as we want, each time we call it it will be executed

// function fruitProcessor(apples, oranges) {

//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice)

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice
// }

// const mixedJuice = fruitProcessor(25, 20)

// console.log(mixedJuice)

//Parameters () are like variables
// We called this fruitProcessor function with two arguments (5,0), and these arguments are specific (apples, oranges)
//So the actual values of the function parameters which are apples and oranges
//When the function runs apples will be 5, and oranges 0
//Then we use this values to build juice string and then we return that value from the function
//Then we return that value from the function (the result of calling the function fruitProcessor(5, 0) will be the juice value that just returned)
//Then we need to save that value (capture it), and we do that by saving it in the const appleJuice

// const appleOrangeJuice = fruitProcessor(2,4);

// console.log(appleOrangeJuice)
// We are defining specific values, which are the arguments which will get passed into the function as parameters
// What we did was to create a very generic function that works for any number of apples and oranges
// It's really like we're leaving apples and oranges as the blank spaces, and when we call a function we fill in these blank spaces using our arguments

//ASSIGNMENTS

//1
// function describeCountry(country, population, capitalCity) {
//     const description = `${country} has ${population} and its capital city is ${capitalCity}`
//     return description
// }

// const zaFinsku = describeCountry('Finland', '6 million people', 'Helsinki')

// const zaSrbiju = describeCountry('Serbia', '6 million people', 'Belgrade')

// const zaBrazil = describeCountry('Brasil', '214 million people', 'Brasilia')

// console.log(zaFinsku, zaSrbiju, zaBrazil)

//2
// function percentageOfWorld1(population) {
//     return (population/7900) * 100
// }

// const percentageOfWorld2 = function(population) {
//     const result = (population/7900) * 100
//     return result
// }

// const populationSerbia2 = percentageOfWorld2(6);
// const populationPortugal2 = percentageOfWorld2(10.3);
// const populationChina2 = percentageOfWorld2(1441);
// console.log(populationSerbia2, populationPortugal2, populationChina2);

// const populationSerbia1 = percentageOfWorld1(6);
// const populationPortugal1 = percentageOfWorld1(10.3);
// const populationChina1 = percentageOfWorld1(1441);
// console.log(populationSerbia1);
// console.log(populationPortugal1);
// console.log(populationChina1);

// 3
// const percentageOfWorld3 = (population) => {
//     const serbiaPopulation = 6
//     const result = `Serbia has ${serbiaPopulation} million people, so it't about ${(population/7900) * 100} % of world population`
//     return result
// }

// const populationSerbia3 = percentageOfWorld3(6)

// console.log(populationSerbia3)

//4

// function percentageOfWorld1(people) {
//     return (people/7900) * 100
// }

// const describePopulation = (country, population) => {

//     const percentage = percentageOfWorld1(population)

//     return `${country} has ${population} million people, which is about ${percentage}% of the world`
// }

// const populationOfChina = describePopulation('China', 1441)

// const populationOfFrance = describePopulation('France', 67.5)

// const populationOfSerbia= describePopulation('Serbia', 6)

// console.log(populationOfChina)
// console.log(populationOfFrance)
// console.log(populationOfSerbia)

//NASLOV: Function declarations vs expressions

// const age1 = calcAge1(1995);

// function calcAge1(birthYear) {
//     return 2022-birthYear;
// }

// console.log(age1)
//This is function declaration

// const calcAge2 = function(birthYear) {
//     return 2022-birthYear;
// }
// const age2 = calcAge2(1995);

// console.log(age2)
//This is function expression

//Difference:  We can call function decalaration before they are defined in the code

// NASLOV: Arrow functions

// This is a special form of function expression, right from = is a value that we assign to a vatiable
// We dont need curly braces to define a code block, return happens implicitly without writing return

// const calculation1 = calcAge3(1995)
// console.log(calculation1)

// const djole = jaSamDjole => `${jaSamDjole} i vozim biciklu`
// const vozimBiciklu = djole('Ja sam Djordje')
// console.log(vozimBiciklu)

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear
//     const retirement = 65 - age;
//     return `${firstName} has ${retirement} years until retirement`
// }

// const penzija1 = yearsUntilRetirement(1995, 'Djordje')

// const penzija2 = yearsUntilRetirement(1991, 'Marko')

// console.log(penzija1)
// console.log(penzija2)

// NASLOV: Functions calling other functions

// function cutFruitPieces(fruit) {
//     return fruit * 10;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
//     return juice;
// }

// const vocke = fruitProcessor(2,3)

// console.log(vocke)

//CODING CHALENGE #1

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores

// const calcAverage = (x, y, z ) => (x+y+z)/3

// const averageDolphins = calcAverage(44, 23, 71)

// const averageKoalas = calcAverage(65, 54, 49)

// console.log(averageDolphins, averageKoalas)

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins > 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
//     } else if (avgKoalas > 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
//     } else {
//         console.log('No team wins')
//     }
// }

// checkWinner(averageDolphins, averageKoalas)

//CODING CHALENGE #1

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores

// const calcAverage = (a, b, c) => ( a + b + c ) / 3

// let averageDolphins =  calcAverage(44 ,23, 71)

// let averageKoalas =  calcAverage(65, 54, 49)

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if(avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`)
//     } else {
//         console.log('No team wins')
//     }
// }

// checkWinner(averageDolphins, averageKoalas)

// averageDolphins = calcAverage(85,54,41)
// averageKoalas = calcAverage(23,34,27)

// checkWinner(averageDolphins, averageKoalas)

//NASLOV: Introduction to Arrays

// 'use strict';

// const friend1 = 'Michael'

// const friend2 = 'Steven'

// const friend3 = 'Peter'

// const friends = ['Michael', 'Steven', 'Peter']

// console.log(friends)

// console.log(friends[0], friends[2])

// console.log(friends.length)

// console.log(friends[friends.length - 1])

// friends[2] = 'Jay'

// console.log(friends)

// const firstName = 'Djordje'

// const djordje = [firstName, 'Vasilevski', 2022-1995, 'web developer', friends]

// console.log(djordje)
// console.log(djordje.length)

//Exercise

// const calcAge = function(birthYear) {
//     return 2022-birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// calcAge(years) // DOESEN'T WORK

// const age1 = calcAge(years[0])

// const age2 = calcAge(years[1])

// const age3 = calcAge(years[years.length - 1])
// console.log(age1, age2, age3)

// const ages = [calcAge(years[0]),  calcAge(years[1]), calcAge(years[years.length - 1])]
//We can place function in the array

// console.log(ages)

//ASSIGNMENT Arrays

// const populations = [1441, 65.5, 6, 9]

// console.log(populations.length === 4)

// function percentageOfWorld1(population) {
//     return (population/7900) * 100
// }

// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3]),
// ]

// console.log(percentages)



//NASLOV: Basic Array Operations 

// const friends = ['Michael', 'Steven', 'Peter'];


//Add elements
// const newLenght = friends.push('Jay');

// console.log(friends);
// console.log(newLenght);

// friends.unshift('John');

// console.log(friends);

//Remove elements

// friends.pop(); // Removes last element
// const popped = friends.pop(); // Removes last element
// console.log(popped);
// console.log(friends);

// friends.shift()
// console.log(friends);

// friends.push(23)
// console.log(friends.indexOf('Steven')) // indexOf returns the position of the element

// console.log(friends.includes('Steven')) // includes returns true/false if the element is in array

// console.log(friends.includes('Bob'))

// console.log(friends.includes(23))


// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven')
// } else {
//     console.log("You don't have a friend called Steven")
// }


// const neighbours = ['Makedonija', 'Rumunija']

// console.log(neighbours)

// neighbours.push('Utopia')

// console.log(neighbours)

// neighbours.pop()

// console.log(neighbours)

// neighbours[neighbours.indexOf('Makedonija')] = 'Severna Makedonija'

// console.log(neighbours)



// if(neighbours.includes('Germany')) {
//     console.log('Problably a central European Country')
// } else {
//     console.log('Problably not a central European Country :D')
// }


// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns 
// the corresponding tip, calculated based on the rules above (you can check out 
// the code from first tip calculator challenge if you need to). Use the function 
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data 
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from 
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can 
// actually be the returned value of a function! So you can just call a function as array 
// values (so don't store the tip values in separate variables first, but right in the new 
// array) �
// GOOD LUCK �




// const calcTip = function(billValue) {
//     if(billValue >=50 && billValue <=300) {
//         return 0.15 * billValue
//     } else {
//         return 0.20 * billValue
//     }
// }

// console.log(calcTip(100))

// const bills = [125, 560, 44]

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// console.log(tips)

// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2]+ bills[2]]

// console.log(total)


// const jonasArray = [
//     'Djordje',
//     'Vasilevski',
//     2037 - 1995,
//     'Web developer'
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName: 'Marko', 
//     lastName: 'Marinkovic',
//     age: 2038-1995,
//     job: 'Web developer',
//     friends: ['Michael', 'Peter', 'Steven']
// };
//Object literal

// console.log(jonas);
// console.log(jonasArray)

//We have an object that contains 5 key value pairs, and each key has a value (each of these keys is also called a property)
//With this we are able to assign a name to each of this values that we had

//Recap: We use objects to group different variables that belong together, difference between object and arrays is that in objects is that in object order of values does not matter when we want to retrieve them

//ASSIGNMENT: Introduction to Objects

// const myCountry = {
//     country: 'Serbia',
//     capital: 'Belgrade',
//     language: 'Serbian',
//     neighbours: ['Makedonija', 'Rumunija']
// }

// console.log(myCountry);


// const jonas = {
//     firstName: 'Marko', 
//     lastName: 'Marinkovic',
//     age: 2038-1995,
//     job: 'Web developer',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.lastName);

// console.log(jonas['lastName'])

// const nameKey = 'Name';

// console.log(jonas['first' + nameKey]);
//Javascript will take first and concatenate it with everythin in object that contains Name
// console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey) // DOESENT WORK, we need [] notation


// const interestedIn = prompt('What do you want to know about Djordje? Choose between firstName, lastName, age, job, and friends.')


// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request. Choose between firstName, lastName, age, job, and friends.')
// }

// jonas.location = 'Serbia';
// jonas['city'] = 'Nis'

// console.log(jonas);


//Challenge

//'Marko has 3 friends, and his best friend is called Michael'

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)



//ASSIGNMENT: Dot vs Bracket Notation

// const myCountry = {
//     country: 'Finland',
//     population: 6,
//     capital: 'Helsinki',
//     language: 'finnish',
//     neighbours: ['Makedonija', 'Rumunija', 'Crna Gora']
// }


// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

// myCountry.population +=2
// myCountry['population'] -=2
// console.log(myCountry.population)


// const jonas = {
//     firstName: 'Djordje', 
//     lastName: 'Vasilevski',
//     birthYear: 1995,
//     job: 'Web developer',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicence: true,

    // calcAge: function(birthYear) {
    //     return 2037-birthYear;
    // }

    // calcAge: function() {
        
    //     return 2037 - this.birthYear;
    // },

    // calcAge: function() {
    //     this.age = 2023 - this.birthYear;
    //     return this.age; 
    // },

    // getSummary: function() {
    //     return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} drivers licence.`
    // }
// };

// console.log(jonas.calcAge())

// console.log(jonas.getSummary())


//"Jonas is a 46-year old teacher, and he has a/no drivers licence"


// ASSIGNMENT: Object Methods

// const myCountry = {
//     country: 'Finland',
//     population: 6,
//     capital: 'Helsinki',
//     language: 'finnish',
//     neighbours: ['Makedonija', 'Rumunija', 'Crna Gora'],


//     describe: function() {
//         return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//     },

//     checkIsland: function () {
//         this.isIsland = this.neighbours.length === 0 ? true :
//         false;
//     }
// }

// myCountry.describe()

// myCountry.checkIsland()

// console.log(myCountry)


// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
// implement the calculations! Remember: BMI = mass / height ** 2 = mass 
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and 
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
// method on both objects). Store the BMI value to a property, and also return it 
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the 
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
// tall.
// GOOD LUCK 

// const mark = {
//     name: 'Mark',
//     surname: 'Miller',
//     markMass: 78,
//     markHeight: 1.69,

//     calcBMI: function () {
//         this.bmi = this.markMass/this.markHeight ** 2
//         return this.bmi
//     }
// }

// console.log(mark.calcBMI())

// const john = {
//     name: 'John',
//     surname: 'Smith',
//     johnMass: 78,
//     johnHeight: 1.69,

//     calcBMI: function () {
//         this.bmi = this.johnMass/(this.johnHeight * this.johnHeight)
//         return this.bmi
//     }
// }

// console.log(john.calcBMI())

// if (mark.bmi > john.bmi) {
// console.log(`${mark.name}'s BMI (${mark.bmi}) is higher than ${john.name}'s BMI (${john.calcBMI()})`)
// } else if (john.bmi > mark.bmi) {
// console.log(`${john.name}'s BMI (${john.bmi}) is higher than ${mark.name}'s BMI (${mark.calcBMI()})`)
// } else if (john.bmi === mark.bmi) {
//     console.log(`BMI's are equal (${mark.bmi}) = (${john.bmi})`)
// }



// console.log('Lifting weights repetition 1 🏋️‍♀️')
// console.log('Lifting weights repetition 2 🏋️‍♀️')
// console.log('Lifting weights repetition 3 🏋️‍♀️')
// console.log('Lifting weights repetition 4 🏋️‍♀️')
// console.log('Lifting weights repetition 5 🏋️‍♀️')
// console.log('Lifting weights repetition 6 🏋️‍♀️')


// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
// }
//for loop keeps running while condition is true
//1 We want to log string 10 times, first we declare let variable = 1
//2 We add a rep to be less-equal than 10
//3 and with rep++ we increase rep by 1


//ASSIGNMENT Iteration: The for Loop

// for(let voter = 1; voter <=50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`)
// }

//NASLOV: Looping arrays, breaking and continuing

// const djordje = [
//     'Djordje',
//     'Vasilevski',
//     2037 - 1995,
//     'Web developer',
//     ['Michael', 'Peter', 'Steven'],
//     true,
//     ['djole', 'djoleee']
// ];

// const types = []


// console.log(jonas[0])
// console.log(jonas[0])
// ...
// console.log(jonas[4])
//djodje[5]



// for (let i = 0; i < djordje.length; i++) {
//     console.log(djordje[i], typeof djordje[i])
//     Reading from djordje array

//     types[i] = typeof djordje[i]
//     types.push(typeof djordje[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];

// const ages = []

// for(let i = 0; i < years.length; i++) {
//     ages.push(2037-years[i])
// }

// console.log(ages)


//continue and break

// continue is to exit the current iteration of the loop and continue to the next one
// break is uses to completely terminate the whole loop


// const djordje = [
//     'Djordje',
//     'Vasilevski',
//     2037 - 1995,
//     'Web developer',
//     ['Michael', 'Peter', 'Steven'],
//     true,
//     ['djole', 'djoleee']
// ];


// for (let i = 0; i < djordje.length; i++) {
//     if(typeof djordje[i] !== 'string') continue;

//     console.log(djordje[i], typeof djordje[i])
// }
//continue

// for (let i = 0; i < djordje.length; i++) {
//     if(typeof djordje[i] === 'number') break;

//     console.log(djordje[i], typeof djordje[i])
// }
//break

// VEZBA MALO  
// const djordje = [
//     'Djordje',
//     'Vasilevski', 
//     2033-1995,
//     'Web developer', 
//     true,
//     false,
//     ['Michael', 'Marko', 'Jordi']
// ]

// for(let i=0; i<djordje.length; i++) {
//     if(typeof djordje[i] === 'number') break

//     console.log(djordje[i], typeof djordje[i])
// }


//ASSIGNMENT Looping Arrays, Breaking and Continuing

// const populations = [1441, 65.5, 6, 9]


// function percentageOfWorld1(population) {
//     return (population/7900) * 100
// }

// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3]),
// ]

// const percentages2 = []

// for(let i=0; i<percentages.length; i++) {
//     const perc = percentageOfWorld1(populations[i])

//     percentages2.push(perc)
// }

// console.log(percentages2)


// console.log(percentages.length === percentages2.length)

// const djordje = [
//     'Djordje',
//     'Vasilevski', 
//     2033-1995,
//     'Web developer', 
//     ['Michael', 'Marko', 'Jordi'],
//     true
// ]

// 0, 1,...,4

//4,3,...,0

// for (let i = djordje.length -1 ; i>=0 ; i--) {
//     console.log(i, djordje[i])
// }


// for(let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------- Starting exercise ${exercise}`)

//     for( let rep = 1; rep <6; rep++) {
//         console.log(`------------------ Exercise ${exercise}: Starting repetition: ${rep}`)
//     }
// }



//ASSIGNMENT Looping Backwards and Loops in Loops

// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'], 
//     ['Norway', 'Sweden', 'Russia']
// ]

//     for(let i = 0; i < listOfNeighbours.length; i++) {
//     console.log(`Neighbour: ${listOfNeighbours[i]}`)
//         for(let j=0; j < listOfNeighbours[i].length; j++) {
//             console.log(`Neighbour: ${listOfNeighbours[i][j]}`)
//     }
// }


//NASLOV: The while loop

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }


// let rep = 1;

// while(rep < 10) {
//     console.log(`WHILE: Lifting weights repetition${rep} 🏋️‍♀️`)
//     rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1

// while(dice !== 6) {
//     console.log(`You rolled a ${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1
//     if (dice === 6) 
//     console.log(`You rolled a ${dice}`)
// }




// ASSIGNMENT Looping Arrays, Breaking and Continuing

// const populations = [1441, 65.5, 6, 9]


// function percentageOfWorld1(population) {
//     return (population/7900) * 100
// }

// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3]),
// ]

// const percentages2 = []

// for(let i=0; i<percentages.length; i++) {
//     const perc = percentageOfWorld1(populations[i])

//     percentages2.push(perc)
// }

// console.log(percentages2)

// const percentages3 = []

// let i=0

// while(i<percentages.length) {
//     const perc = percentageOfWorld1(populations[i])
//     percentages3.push(perc)
//     i++;
// }

// console.log(percentages3)





// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
// an argument. This function calculates the average of all numbers in the given 
// array. This is a difficult challenge (we haven't done this before)! Here is how to 
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, 
// start by creating a variable 'sum' that starts at 0. Then loop over the 
// array using a for loop. In each iteration, add the current value to the 
// 'sum' variable. This way, by the end of the loop, you have all values 
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the 
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK 


// const bills = [
//     22,295,176,440,37,105,10,1100,86,52
// ]

// const tips = []

// const totals = []

// const calcTip = function(billValue) {
//     if(billValue >=50 && billValue <=300) {
//         return 0.15 * billValue
//     } else {
//         return 0.20 * billValue
//     }
// }

// for(let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]))
//     totals.push(calcTip(bills[i])+bills[i])
// }

// console.log(tips)
// console.log(totals)


// const calcAverage = function(arr) {
//     let sum = 0; 
//     for(let i = 0; i<arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     return sum/arr.length
// }

// console.log(calcAverage(totals))


//+ MOJ BONUS




// The spread operator allows you to pull elements out of an  array
// (=> split the array into a list of its elements) 
// or pull the properties out of an object. Here are two examples




//Spread in arrays

// const oldArray = [1,2,3] 

// const newArray = [...oldArray, 4,5,6,7]
// console.log(newArray)


// Spread in objects

// const oldObject = {
//     name: 'Max'
// }

// const newObject = {
//     ...oldObject,
//    
// }
// console.log(newObject) 
// -> {name:max age:28}




// Destructuring allows you to easily access the values of 
// arrays or objects and assign them to variables.




//Destructuring in arrays

// const array = [1,2,3,5,6,7,8]

// const [a,b,c,d] = array

// console.log(a) 1
// console.log(b) 2
// console.log(c) 3


//Destructuring in objects


// const myObj = {
//     ime: 'Max',
//     godine: 28
// }

// const {ime} = myObj

// console.log(ime)
// console.log(godine)
// console.log(myObj)


// const printName = (personObj) => {
//     console.log(personObj.name)
// }

// printName({name: 'Max', age: 28})


// const printName = ({ime}) => {
//     console.log(ime)
// }

// printName({ime: 'Max', godine: 28})

//By destructuring, we simply pull out the name property and 
//store it in a variable/ argument named name which we then 
// can use in the function body