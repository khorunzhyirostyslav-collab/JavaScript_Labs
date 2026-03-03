// ===== Лабораторна робота №7 =====
// Тема: Робота з методами масивів
// Варіант 18

console.log("===== Лабораторна робота №7 =====");
console.log("Тема: Робота з методами масивів");
console.log("Варіант 18");

// ----------------------------------------
// 2) includes(): перевірка наявності числа 10
// ----------------------------------------
console.log("\n--- Завдання 2: includes(10) ---");

const numbers = [3, 12, 7, 10, 5, 18, 2, 10, 9];
console.log("Масив чисел:", numbers);

const hasTen = numbers.includes(10);
console.log("Чи є число 10 у масиві? ->", hasTen ? "Так" : "Ні");

// ----------------------------------------
// 3) filter + map + reduce
// ----------------------------------------
console.log("\n--- Завдання 3: filter + map + reduce ---");

// filter(): вибрати числа > 10
const greaterThanTen = numbers.filter(n => n > 10);
console.log("Числа > 10:", greaterThanTen);

// map(): квадрати всіх чисел
const squares = numbers.map(n => n * n);
console.log("Квадрати чисел:", squares);

// reduce(): сума всіх елементів
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Сума всіх елементів:", sum);
// ----------------------------------------
// Додаткове завдання (5 балів)
// Використати fill() для заповнення масиву значенням 0
// ----------------------------------------

console.log("\n--- Додаткове завдання: fill() ---");

// створюємо копію початкового масиву
let filledArray = [...numbers];

console.log("Початковий масив:", filledArray);

// заповнюємо масив нулями
filledArray.fill(0);

console.log("Масив після fill(0):", filledArray);