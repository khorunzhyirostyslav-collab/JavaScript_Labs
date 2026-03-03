console.log("----- Робота з методами масиву -----");

let arr = [1, 2, 3];

console.log("Початковий масив:", JSON.stringify(arr));

arr.push(4);
console.log("Після push(4):", JSON.stringify(arr));

arr.pop();
console.log("Після pop():", JSON.stringify(arr));

arr.unshift(0);
console.log("Після unshift(0):", JSON.stringify(arr));

arr.shift();
console.log("Після shift():", JSON.stringify(arr));

console.log("----- Оголошення масивів різними способами -----");

// 1 Через літерал
let arr1 = [10, 20, 30];
console.log("Масив через літерал:", arr1);

// 2 Через конструктор Array
let arr2 = new Array(40, 50, 60);
console.log("Масив через new Array():", arr2);

// 3 Ще варіант через Array()
let arr3 = Array(70, 80, 90);
console.log("Масив через Array():", arr3);
// Перетворення масиву рядків в один рядок
// ----------------------------------------

console.log("\n--- Додаткове завдання ---");

const words = ["JavaScript", "це", "дуже", "цікава", "мова"];

console.log("Масив рядків:", words);

// Об'єднання елементів у один рядок
const result = words.join(" ");

console.log("Об'єднаний рядок:", result);