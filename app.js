//  Person constructor prototype
//  Definition of constructor for Person
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

//  Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

//  Calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Create a person
const person1 = new Person("Navid", "Hejazi", "10-10-2010");
// Access the greeting() via person1
console.log(person1.greeting());
//  Get the age of person
console.log(person1.calculateAge());

// Customer constructor prototype and prototypal inheritance

function Customer(firstName, lastName, dob, phone, membership) {
  // Inherit firstName, lastName, dateOfBirth (properties) from person
  Person.call(this, firstName, lastName, dob);

  //  Specific properties for customer
  this.phone = phone;
  this.membership = membership;
}

//  Inherit the person prototypes
/* With The bottom line we can inherit from Person's prototypes
but we have a problem. constructor related to customer turn into 
person and we should return it customer(line 46)   */
Customer.prototype = Object.create(Person.prototype);

// Return  costumer' constructor to customer
Customer.prototype.constructor = Customer;

// create a customer
const customer1 = new Customer(
  "Tom",
  "Smith",
  "10-10-2020",
  "555-888-999",
  "standard"
);
console.log(customer1);
console.log(customer1.birthday);
console.log(customer1.greeting());
console.log(customer1.calculateAge());
