console.log("----- Завдання 3 (do...while): введіть позитивне число -----");

let number;
let canceled = false;

do {
    const input = prompt("Введіть позитивне число (Cancel — скасувати):");

    if (input === null) {
        canceled = true;
        break;
    }

    number = Number(input);

} while (!Number.isFinite(number) || number <= 0);

if (canceled) {
    console.log("Завдання 3 скасовано (Cancel).");
} else {
    console.log("Ви ввели позитивне число:", number);
}
// ----- Завдання 4 (for...in): ключі та значення об'єкта -----

console.log("----- Завдання 4: ключі та значення об'єкта -----");

const student = {
    name: "Ростислав",
    age: 16,
    course: "JavaScript",
    city: "Кривий Ріг"
};

for (let key in student) {
    console.log(key + ":", student[key]);
}
// ----- Завдання 5 (for...of): масив у зворотному порядку -----

console.log("----- Завдання 5: масив у зворотному порядку -----");

const numbers = [1, 2, 3, 4, 5, 6];

const reversed = [];

for (let value of numbers) {
    reversed.unshift(value); // додаємо елемент на початок
}

for (let value of reversed) {
    console.log(value);
}
// ----- Завдання 6 (forEach): вивести всі елементи масиву -----

console.log("----- Завдання 6: forEach -----");

const fruits = ["Apple", "Banana", "Orange", "Grape"];

fruits.forEach(function(item, index) {
    console.log("Елемент №" + index + ":", item);
});
// ----- Завдання 7 (map): створити масив квадратів чисел -----

console.log("----- Завдання 7: map -----");

const nums = [1, 2, 3, 4, 5];

const squares = nums.map(function(num) {
    return num * num;
});

console.log("Початковий масив:", nums);
console.log("Масив квадратів:", squares);


console.log("----- Метод filter(): числа більше 10 -----");

const numbersArray = [5, 12, 8, 20, 3, 15, 7, 30];

const greaterThanTen = numbersArray.filter(function(num) {
    return num > 10;
});

console.log("Початковий масив:", numbersArray);
console.log("Числа більше 10:", greaterThanTen);
// ----------------------------------------
// Таблиця множення для числа 9
// ----------------------------------------

console.log("\n--- Додаткове завдання: Таблиця множення для 9 ---");

const tableNumber = 9;

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}