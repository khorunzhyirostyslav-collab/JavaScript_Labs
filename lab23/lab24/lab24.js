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