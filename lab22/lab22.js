const title = document.getElementById("title");

title.addEventListener("mouseover", function () {
    title.style.color = "red";
});

title.addEventListener("mouseout", function () {
    title.style.color = "black";
});