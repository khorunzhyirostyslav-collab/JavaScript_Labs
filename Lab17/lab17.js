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

// --- ДОДАТКОВЕ ЗАВДАННЯ ---

const points = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 5, y: 6 }
];

console.log("Масив координат:");
console.log(points);

// Перетворення у формат "x, y"
const formattedPoints = points.map(function(point) {
    return point.x + ", " + point.y;
});

console.log("Координати у форматі 'x, y':");
console.log(formattedPoints);