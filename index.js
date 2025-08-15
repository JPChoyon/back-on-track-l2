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


