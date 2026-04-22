console.log("JS працює");

const title = document.getElementById("title");

title.addEventListener("mouseover", function () {
    console.log("наведено");
    title.style.color = "red";
});

title.addEventListener("mouseout", function () {
    console.log("прибрано");
    title.style.color = "black";
});

const input = document.getElementById("textInput");
const count = document.getElementById("count");

input.addEventListener("input", function () {
    count.textContent = input.value.length;
});