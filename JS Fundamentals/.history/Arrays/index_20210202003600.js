// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 1996, 2002, 2020];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// //Do this instead because it is better practice that when you start with an array that you end with an array
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

// Here are useful Array methods
//Mike this will help you out bro

const years = [1990, 1967, 1996, 2002, 2020];
console.log(years);
const newLength = years.push(1994); // .push adds to the end
console.log(years);
console.log(newLength); // functions return a value .push is a function

years.unshift(1800); // unshift add to the beginning of the array
console.log(years);

years.pop(); //Pop will remove the last element of the array

//you do not need to pass an argument bc it will automatically take away the fiurst
