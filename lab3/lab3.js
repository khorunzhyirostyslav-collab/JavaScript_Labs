console.log("===== Завдання 1 =====");

// Створення змінних
let myString = "JavaScript";
let myNumber = 25;
let myBoolean = true;
let myUndefined;
let myNull = null;

// Виведення значень
console.log("Значення змінних:");
console.log("myString =", myString);
console.log("myNumber =", myNumber);
console.log("myBoolean =", myBoolean);
console.log("myUndefined =", myUndefined);
console.log("myNull =", myNull);

// Виведення типів
console.log("Типи змінних:");
console.log("typeof myString =", typeof myString);
console.log("typeof myNumber =", typeof myNumber);
console.log("typeof myBoolean =", typeof myBoolean);
console.log("typeof myUndefined =", typeof myUndefined);
console.log("typeof myNull =", typeof myNull);
console.log("\n===== Завдання 2 =====");

// 🔹 1. Рядок → число
let strValue = "123.45";
let numberFromString = Number(strValue);

console.log("Рядок:", strValue, "| тип:", typeof strValue);
console.log("Після Number():", numberFromString, "| тип:", typeof numberFromString);


// 🔹 2. Число → рядок
let numValue = 500;
let stringFromNumber = String(numValue);

console.log("Число:", numValue, "| тип:", typeof numValue);
console.log("Після String():", stringFromNumber, "| тип:", typeof stringFromNumber);


// 🔹 3. Значення → boolean
let value1 = 1;
let value2 = 0;

let bool1 = Boolean(value1);
let bool2 = Boolean(value2);

console.log("Boolean(1):", bool1, "| тип:", typeof bool1);
console.log("Boolean(0):", bool2, "| тип:", typeof bool2);
console.log("\n===== Завдання 3 =====");

// 🔹 Неявне перетворення в математичних виразах

let result1 = "5" - 2;   // рядок - число
let result2 = "5" * 2;   // рядок * число
let result3 = "5" / 2;   // рядок / число

console.log('"5" - 2 =', result1, "| тип:", typeof result1);
console.log('"5" * 2 =', result2, "| тип:", typeof result2);
console.log('"5" / 2 =', result3, "| тип:", typeof result3);


// 🔹 Неявне перетворення при конкатенації

let result4 = "5" + 2;   // тут буде рядок
let result5 = 10 + "20"; // теж рядок

console.log('"5" + 2 =', result4, "| тип:", typeof result4);
console.log('10 + "20" =', result5, "| тип:", typeof result5);
//"5" + 2 → "52"
//10 + "20" → "1020"
