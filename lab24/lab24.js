const select = document.getElementById("mySelect");
const result = document.getElementById("result");

select.addEventListener("change", function(event) {
    const value = event.target.value;

    if (value === "") {
        result.textContent = "Нічого не обрано";
    } else {
        result.textContent = "Ви обрали: " + value;
    }
});
// --- ДОДАТКОВЕ ЗАВДАННЯ ---
const hoverText = document.getElementById("hoverText");
const tooltip = document.getElementById("tooltip");

// при наведенні
hoverText.addEventListener("mouseover", function (event) {
    tooltip.style.display = "block";
    tooltip.style.left = event.pageX + "px";
    tooltip.style.top = event.pageY + "px";
});

// при русі миші (щоб підказка рухалась)
hoverText.addEventListener("mousemove", function (event) {
    tooltip.style.left = event.pageX + "px";
    tooltip.style.top = event.pageY + "px";
});

// коли курсор пішов
hoverText.addEventListener("mouseout", function () {
    tooltip.style.display = "none";
});