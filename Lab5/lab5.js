// Лабораторна робота №5
console.log("=== Лабораторна робота №5: Цикли ===");

// --------------------------
// Завдання 3 — do...while
console.log("----- Завдання 3 -----");

let number;

do {
    number = parseFloat(prompt("Введіть позитивне число:"));
} while (isNaN(number) || number <= 0);

console.log("Ви ввели позитивне число:", number);
