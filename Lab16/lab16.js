// Лабораторна робота №16
// Варіант 18
// Завдання: вивести всі парні числа у масиві

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Парні числа у масиві:");

numbers.forEach(function(num) {
    if (num % 2 === 0) {
        console.log(num);
    }
});
// --- ДОДАТКОВЕ ЗАВДАННЯ ---

console.log("Перетворення чисел у рядки:");

const stringNumbers = [];

numbers.forEach(function(num) {
    stringNumbers.push(String(num));
});

console.log(stringNumbers);