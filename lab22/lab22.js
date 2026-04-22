const colorSelect = document.getElementById("colorSelect");
const colorBox = document.getElementById("colorBox");

colorSelect.addEventListener("change", function () {
    colorBox.style.backgroundColor = colorSelect.value;
});