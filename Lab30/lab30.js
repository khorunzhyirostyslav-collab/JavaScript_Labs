// Лабораторна робота №30
// Варіант 18
// Перевірити, чи поточна дата — вихідний день

const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
    const today = new Date();

    const day = today.getDay();

    if (day === 0 || day === 6) {
        result.textContent = "Сьогодні вихідний день.";
    } else {
        result.textContent = "Сьогодні робочий день.";
    }
});