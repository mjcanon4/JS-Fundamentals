// Writing an object into code like this is the easiest way to make an object

const michael = {
  firstName: "Michael",
  lastName: "Canon",
  age: 24,
  job: "developer",
  friends: ["May", "Teemo", "Jet", "Frank"],
  hasDriversLicense: true,
};

function calcBirthYear() {
  this.birthYear = 2021 - this.age;
  return this.birthYear;
}

// In arrays, order matters alot because that is how you access them

// Use arrays for ordered information, objects for unstructured data

// learning dot and bracket notation

console.log(michael);

console.log(michael.lastName);

// The line above is using dot notation

console.log(michael["lastName"]);

// the code above is using bracket notation to access the michael object

const nameKey = "Name";
console.log(michael["first" + nameKey]);
console.log(michael["last" + nameKey]); // Can put any expression here, does not work for dot notation

const interestedIn = prompt(
  "What do you want to know about Michael, choose between firstName, lastName, age, job and friends"
);

console.log(michael[interestedIn]); // THIS WILL NOT WORK WITH DOT NOTATION

if (michael[interestedIn]) {
  console.log([michael[interestedIn]]);
} else if (!michael[interestedIn]) {
  console.log("What you search cannot be found");
}

michael.location = "USA";

console.log(
  `${michael.firstName} has ${michael.friends.length} friends and his best friend is ${michael.friends[0]}`
);

// TOO EASY BRUH

console.log(`${michael.firstName} was born in ${michael["calcBirthYear"]()}`);
