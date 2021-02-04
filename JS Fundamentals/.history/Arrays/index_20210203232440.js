// // const calcAge = function (birthYear) {
// //   return 2037 - birthYear;
// // };

// // const years = [1990, 1967, 1996, 2002, 2020];

// // const age1 = calcAge(years[0]);
// // const age2 = calcAge(years[1]);
// // const age3 = calcAge(years[years.length - 1]);
// // console.log(age1, age2, age3);

// // //Do this instead because it is better practice that when you start with an array that you end with an array
// // const ages = [
// //   calcAge(years[0]),
// //   calcAge(years[1]),
// //   calcAge(years[years.length - 1]),
// // ];

// // console.log(ages);

// // Here are useful Array methods
// //Mike this will help you out bro

// const years = [1990, 1967, 1996, 2002, 2020];
// console.log(years);
// const newLength = years.push(1994); // .push adds to the end
// console.log(years);
// console.log(newLength); // functions return a value .push is a function

// years.unshift(1800); // unshift add to the beginning of the array
// console.log(years);

// years.pop(); //Pop will remove the last element of the array
// console.log(years);

// //you do not need to pass an argument bc it will automatically take away the first

// years.shift(); // shift removes the first element of an array
// console.log(years);

// console.log(years.indexOf(2002)); //indexof returns the index of the passed through number

// //includes is an es6 features
// //includes will return a boolean value
// console.log(years.includes(2002));
// // the above returns true bc it contains 2002
// // includes does not do type coersion, '2002' and 2002 are not the same type

// Coding Challenge

const billAmount = [125, 555, 44];
const tips = [];
const totalAmount = [];

function calcBill(bill) {
  if (bill >= 50 && bill <= 300) {
    totalAmount.push(bill * 1.15);
    tips.push(totalAmount[totalAmount.length - 1] - bill);
    return bill * 1.15;
  } else {
    return bill * 1.2;
  }
}

calcBill(100);
console.log(tips, totalAmount);

const tip = function calcTip() {};

let arr = ["17", "21", "23"];
let i = 0;

while (i <= arr.length) {
  console.log(`it will be ${arr[i]} degrees in ${i} days`);
  i++;
}

// function printForecast(arr) {
//   for (i = 0; i <= arr.length; i++) {
//     console.log(`it will be ${arr[i]} degrees in ${arr[i] + 1} days`);
//   }
// }

// printForecast();
