// Завдання 1

let temperature = 28;

if (temperature < 10) {
    console.log("Погода холодна ❄️");
} else if (temperature >= 10 && temperature <= 25) {
    console.log("Погода тепла 🌤");
} else {
    console.log("Погода спекотна 🔥");
}
// Завдання 2

let number = 12;

let result = (number % 2 === 0) 
    ? "Число парне ✅" 
    : "Число непарне ❌";

console.log(result);
// Завдання 3

let day = "Понед";

switch(day) {
    case "Понеділок":
        console.log("Сьогодні початок робочого тижня 📚");
        break;

    case "Вівторок":
        console.log("Продовжуємо працювати 💻");
        break;

    case "Середа":
        console.log("Середина тижня ⚖️");
        break;

    case "Четвер":
        console.log("Тиждень майже завершився 🚀");
        break;

    case "П’ятниця":
        console.log("Останній робочий день 🎉");
        break;

    case "Субота":
    case "Неділя":
        console.log("Вихідний день 😎");
        break;

    default:
        console.log("Невірно введений день ❌");
}
// Завдання 4

let password = prompt("Введіть пароль:");

if (password === "admin123") {
    console.log("Доступ дозволено ✅");
} else {
    console.log("Доступ заборонено ❌");
}


