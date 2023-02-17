const character = "shruti";
console.log(character);
const inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach((inputs) => {
  console.log(inputs);
});

let age = 33;
let isBlackBelt = false;
let nameString = "Shruti";

//nameString = 44;
//SInce we are not defining any kind of type to diameter, we can basically pass anything and it wont give us any error

const circ1 = (diameter) => {
  return diameter * Math.PI;
};
console.log(circ1("Hi"));
//SO the above way is an issue, So in Typescript we can say it is number and then use it
const circ = (diameter: number) => {
  return diameter * Math.PI;
};
console.log(circ(10));
//Typescript allows to check and clean the code before it is being developed and shipped.
//But JS does not do that.

//Arrays and Objects
let names = ["John", "DOe"];
names.push("Mary");
//names.push(10);
//When we declare a new array then the types of its elememts cannot be changed at a later stage.

//We can use a mixed arrays bt we need to declare it before we can do that.
