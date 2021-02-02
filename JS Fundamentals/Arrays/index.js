const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 1996, 2002, 2020];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

//Do this instead because it is better practice that when you start with an array that you end with an array
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
