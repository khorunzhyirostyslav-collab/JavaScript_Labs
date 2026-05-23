// Лабораторна робота №30
// Варіант 18
// Перевірка вихідного дня та виведення дати і часу

const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function () {

    // Створюємо об'єкт Date з поточною датою та часом
    const now = new Date();

    // Отримуємо день місяця
    const dayNumber = now.getDay();

    const days = [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота"
];

const dayName = days[dayNumber];

    // Форматування дати
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();

    // Форматування часу
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    // Формуємо рядок дати і часу
    const currentDateTime =
        `${day}.${month}.${year} ${hours}:${minutes}`;

    // Перевірка вихідного дня
    if (dayNumber === 0 || dayNumber === 6) {
        result.textContent =
            `${currentDateTime} — ${dayName}. Сьогодні вихідний день.`
    } else {
        result.textContent =
            `${currentDateTime} — ${dayName}. Сьогодні робочий день.`
    }
});