// Writing an object into code like this is the easiest way to make an object

const michael = {
  firstName: "Michael",
  lastName: "Canon",
  age: 24,
  job: "developer",
  friends: ["May", "Teemo", "Jet", "Frank"],
};

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
