console.log("===== Лабораторна робота №6 =====");
console.log("Варіант 18");

let numbers = [3, 5, 2, 3, 7, 5, 3, 2, 8, 5, 7, 3];

console.log("Масив:", numbers);

let count = {};

numbers.forEach(num => {
  count[num] = (count[num] || 0) + 1;
});

console.log("Кількість входжень:");

for (let key in count) {
  console.log(`Число ${key} зустрічається ${count[key]} раз(и)`);
}