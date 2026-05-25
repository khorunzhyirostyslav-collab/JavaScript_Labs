// Лабораторна робота №31-32
// Варіант 18
// Асинхронність і Проміси у JavaScript

const loadBtn = document.getElementById("loadBtn");
const result = document.getElementById("result");

function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const success = Math.random() > 0.3;

            if (success) {
                resolve("Дані успішно отримано через 1 секунду.");
            } else {
                reject("Помилка отримання даних.");
            }
        }, 1000);
    });
}

loadBtn.addEventListener("click", function () {
    result.textContent = "Завантаження даних...";

    fetchData()
        .then(function (data) {
            result.textContent = data;
        })
        .catch(function (error) {
            result.textContent = error;
        })
        .finally(function () {
            console.log("Операцію завершено.");
        });
});