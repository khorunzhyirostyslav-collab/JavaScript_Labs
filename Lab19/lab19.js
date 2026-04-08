// Лабораторна робота №19
// Варіант 18

const students = [
    { name: "Олег", age: 17 },
    { name: "Ірина", age: 18 },
    { name: "Максим", age: 16 }
];

const names = students.reduce(function(acc, student) {
    acc.push(student.name);
    return acc;
}, []);

console.log("Початковий масив:");
console.log(students);

console.log("Масив імен:");
console.log(names);