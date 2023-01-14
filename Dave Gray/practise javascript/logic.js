// let myNumber = 50;
// while (myNumber < 50) {
//   myNumber += 2;
//   console.log(myNumber);
// }

// do {
//   console.log(myNumber);
// } while (myNumber < 50);

// let ime = "Djordje";

// for (let i = 0; i < ime.length; i++) {
//   console.log(ime.charAt(i));
// }

// let ime = "Djordje";
// let counter = 0;
// let myLetter;

// while (counter <= 3) {
//   myLetter = ime[counter];
//   console.log(myLetter);
//   if (counter === 1) {
//     counter += 1;
//     continue;
//   }
//   if (myLetter == "o") break;
//   counter++;
// }

// console.log(counter);

// let ime = "Djordje";

// console.log(ime.toUpperCase());

// function sum(num1, num2) {
//   if (num2 === undefined) {
//     return num1 + num1;
//   }
//   return num1 + num2;
// }

// console.log(sum(10, 4));

//1
// function sliceEmail(email) {
//   return email.slice(0, email.indexOf("@"));
// }

//2
// const sliceEmail = function(email) {
//   return email.slice(0, email.indexOf("@"));
// }

//3
// const sliceEmail = (email) => {
//   return email.slice(0, email.indexOf("@"));
// };

// console.log(sliceEmail("djordje@gmail.com"));
// console.log(sliceEmail("milan@gmail.com"));
// console.log(sliceEmail("marko@gmail.com"));

// const getRightCase = (ime) => {
//   return ime.charAt(0).toUpperCase() + ime.slice(1).toLowerCase();
// };

// console.log(getRightCase("djorDje"));

// const array1 = ["a", "b", "c", "d", "e", "f"];
// const array2 = ["x", "y", "z", "a"];

// const commonLetter2 = (arr1, arr2) => {
//   return arr1.some((item) => arr2.includes(item));
// };

// console.log(commonLetter2(array1, array2));

// const commonLetter = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) return true;
//     }
//   }
//   return false;
// };

// console.log(commonLetter(array1, array2));

//O(a*b)

//Better solution

// const commonLetter2 = (arr1, arr2) => {
//loop through first array and create object where properties === items in the array
//loop through second array and check if item in second array exists on created object
// };

// let hello = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const reverseArrays = (arr) => {
//   let first = 0;
//   let last = arr.length - 1;
//   while (first < last) {
//     let hold = arr[first];
//     arr[first] = arr[last];
//     arr[last] = hold;
//     first++;
//     last--;
//   }
//   return arr;
// };

// console.log(reverseArrays(hello));

// Naive
// function hasPairWithSum(arr, sum) {
//   var len = arr.length;
//   for (var i = 0; i < len - 1; i++) {
//     for (var j = i + 1; j < len; j++) {
//       if (arr[i] + arr[j] === sum) return true;
//     }
//   }

//   return false;
// }

// Better
// function hasPairWithSum2(arr, sum) {
//   const mySet = new Set();
//   const len = arr.length;
//   for (let i = 0; i < len; i++) {
//     if (mySet.has(arr[i])) {
//       return true;
//     }
//     mySet.add(sum - arr[i]);
//   }
//   return false;
// }

// console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 9));

// function mergeSortedArrays2(array1, array2) {
//   let mergedArray = array1.concat(array2);
//   return mergedArray;
// }

// console.log(mergeSortedArrays2([0, 3, 4, 31], [3, 4, 6, 30]));

// function mergeSortedArrays(array1, array2) {
//   const mergedArray = [];
//   let array1Item = array1[0];
//   let array2Item = array2[0];
//   let i = 1;
//   let j = 1;

//We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
//   if (array1.length === 0) {
//     return array2;
//   }
//   if (array2.length === 0) {
//     return array1;
//   }

//   while (array1Item || array2Item) {
//     if (array2Item === undefined || array1Item < array2Item) {
//       mergedArray.push(array1Item);
//       array1Item = array1[i];
//       i++;
//     } else {
//       mergedArray.push(array2Item);
//       array2Item = array2[j];
//       j++;
//     }
//   }
//   return mergedArray;
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));

// const marko = [2, 7, 11, 15];

// const milan = 17;

// var twoSum = function (nums, target) {
//   for (let i = 0; i <= nums.length - 1; i++) {
//     for (let j = i + 1; j <= nums.length - 1; j++) {
//       if (nums[i] + nums[j] === target) {
//         let djole = [i, j];
//         return djole;
//       }
//     }
//   }
// };

// console.log(twoSum(marko, 17));

// const broj = "123454321";

// var isPalindrome = function () {
//   for (let i = 0; i < broj.length; i++) {
//     if (broj[i] !== broj[broj.length - i - 1]) {
//       console.log(broj[i]);
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isPalindrome());

// const x = 1;
// x = 2;

// console.log(x);

//Global scope

// var x = 1;
// let y = 2;
// const z = 3;

// {
//   let x = 1;
// }

// console.log(x);

//Local scope

// function myFunction() {
//   const x = 2;
//   console.log(y);

//Local scope

//   {
//     let y = 1;
//   }
// }

// myFunction();

// let myNumber = Number(prompt("Pick a number"));

// console.log("Your number is the square root of " + myNumber * myNumber);

// let myNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(myNumber)) {
//   console.log("My number is square root of " + myNumber * myNumber);
// }
