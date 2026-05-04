const colorSelect = document.getElementById("colorSelect");
const colorBox = document.getElementById("colorBox");

colorSelect.addEventListener("change", function () {
    colorBox.style.backgroundColor = colorSelect.value;
});
// --- ДОДАТКОВЕ ЗАВДАННЯ ---
// Створюємо контейнер для нових елементів
const container = document.createElement("div");
document.body.appendChild(container);

// Лічильник елементів
let count = 1;

// Таймер: кожні 3 секунди додає новий елемент
setInterval(function () {
    const newElement = document.createElement("p");
    newElement.textContent = "Новий елемент № " + count;
    container.appendChild(newElement);
    count++;
}, 3000);