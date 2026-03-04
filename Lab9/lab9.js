// 1) Стрілкова функція: сума двох чисел (з постанови завдання)
const add = (a, b) => a + b;
console.log("add(3, 4) =", add(3, 4)); // 7

// 2) Стрілкова функція з одним параметром
const square = x => x * x;
console.log("square(5) =", square(5)); // 25

// 3) Стрілкова функція з блоком коду
const greet = name => {
  return `Привіт, ${name}!`;
};
console.log(greet("Ростислав"));

//Callback-функція для масивів (крок 3)


// Callback-функція для масивів (крок 3)

// Callback приклад з масивом (map)
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log("doubled =", doubled); // [2, 4, 6]

// Варіант 18
function checkCondition(number, callback) {
    return callback(number);
}

function isEven(n) {
    return n % 2 === 0;
}

console.log("checkCondition(10) =", checkCondition(10, isEven));
console.log("checkCondition(7) =", checkCondition(7, isEven));