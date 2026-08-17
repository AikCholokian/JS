const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.firstName);
console.log(person.age);
console.log(person.fullName);

person.age = 36;

console.log(person.age);

const peter = {
  firstName: "Peter",
  lastName: "Parker",
  age: 19,
};

console.log(peter);
console.log(person);

// console.log(peter.fullName()); ERROR

peter.fullName = function () {
  return `${this.firstName.toUpperCase()} ${this.lastName.toLowerCase()}`;
};

console.log(peter.fullName());

peter["hobby"] = "gaming";

console.log(peter);
let key = "hobby";
console.log(peter.key);
console.log(peter[key]);

peter["my dog"] = "Bobik";
console.log(peter);
console.log(peter["my dog"]);

const mary = new Person(2000, "Mary", "Poppins", 30);
console.log(mary);
console.log(mary.fullName());
const persons = [
  mary,
  peter,
  new Person(3000, "Jack", "Brown", 44),
  {
    id: 4000,
    name: "Bobik",
    golos: function () {
      console.log("gav,gav");
    },
  },
];

console.log(persons);

function Person(id, firstName, lastName, age) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
