const people = [
  { name: "Jhankar", age: 25, gender: "male" },
  { name: "Hamid", age: 22, gender: "male" },
  { name: "hasnain", age: 30, gender: "male" },
  { name: "Tandra", age: 27, gender: "male" },
];

function maleName(arr) {
  return arr
    .filter(person => person.gender === "male")
    .map(person => person.name);
}

console.log(maleName(people));  // Output: [ 'Jhankar', 'Hamid', 'hasnain',]


const books = [
  { title: "Node js", author: "Jhankar", year: 2000 },
  { title: "Hate Khori", author: "Jhankar", year: 2010 }
];

function bookTitle(arr) {
  return arr.map(book => book.title);
}

console.log(bookTitle(books)); // Output: [ 'Node js', 'Hate Khori' ]

const square = a => a * a;     
const double = a => a * 2;     
const addFive = a => a + 5;    

function composed(num) {
  return addFive(double(square(num)));
}

console.log(composed(3)); // Output: 23


const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2010 },
  { make: "Ford", model: "Focus", year: 2018 }
];

cars.sort((a, b) => a.year - b.year);
console.log(cars);
// output: [
// { make: 'Honda', model: 'Civic', year: 2010 },
// { make: 'Toyota', model: 'Corolla', year: 2015 },
// { make: 'Ford', model: 'Focus', year: 2018 }
// ]

let peopleList = [
  { name: "John", age: 25 },
  { name: "Anna", age: 22 }
];

function updateAge(arr, personName, newAge) {
  const person = arr.find(person => person.name === personName);
  if (person) {
    person.age = newAge;
  }
}

updateAge(peopleList, "Anna", 30);
console.log(peopleList); // Output: [ { name: 'John', age: 25 }, { name: 'Anna', age: 30 } ]
