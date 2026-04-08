// Лабораторна робота №19
// Варіант 18
// Завдання: перетворити масив об'єктів у масив певних значень

const students = [
    { name: "Олег", age: 17 },
    { name: "Ірина", age: 18 },
    { name: "Максим", age: 16 }
];

// Отримуємо масив імен за допомогою reduce
const names = students.reduce(function(acc, student) {
    acc.push(student.name);
    return acc;
}, []);

console.log("Початковий масив об'єктів:");
console.log(students);

console.log("Масив імен:");
console.log(names);