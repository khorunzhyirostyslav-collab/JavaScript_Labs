// Лабораторна робота №17
// Варіант 18
// Завдання: додати до кожного елемента масиву нову властивість

const students = [
    { name: "Олег", age: 17 },
    { name: "Ірина", age: 18 },
    { name: "Максим", age: 16 }
];

const updatedStudents = students.map(function(student) {
    return {
        ...student,
        status: "студент"
    };
});

console.log("Початковий масив:");
console.log(students);

console.log("Новий масив після використання map:");
console.log(updatedStudents);