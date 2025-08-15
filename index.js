const people = [
  { name: "Jhankar", age: 25, gender: "male" },
  { name: "Hamid", age: 22, gender: "male" },
  { name: "hasnain", age: 30, gender: "male" },
  { name: "Tandra", age: 27, gender: "male" },
];

function getMaleNames(arr) {
  return arr
    .filter(person => person.gender === "male")
    .map(person => person.name);
}

console.log(getMaleNames(people));  // Output: [ 'Jhankar', 'Hamid', 'hasnain',]
