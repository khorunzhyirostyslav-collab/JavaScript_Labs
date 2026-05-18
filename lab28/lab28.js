let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToWishlist(item) {
    if (!wishlist.includes(item)) {
        wishlist.push(item);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        showWishlist();
    } else {
        alert("Цей елемент вже є в обраному!");
    }
}

function showWishlist() {
    const wishlistBlock = document.getElementById("wishlist");

    if (wishlist.length === 0) {
        wishlistBlock.innerHTML = "Список порожній";
        return;
    }

    wishlistBlock.innerHTML = "";

    wishlist.forEach(function(item) {
        const p = document.createElement("p");
        p.textContent = item;
        wishlistBlock.appendChild(p);
    });
}

function clearWishlist() {
    localStorage.removeItem("wishlist");
    wishlist = [];
    showWishlist();
}

showWishlist();
// Додаткове завдання:
// збереження інформації про останній візит

const lastVisitBlock = document.getElementById("lastVisit");

const lastVisit = localStorage.getItem("lastVisit");

if (lastVisit) {

    lastVisitBlock.textContent =
        "Ваш останній візит: " + lastVisit;

} else {

    lastVisitBlock.textContent =
        "Це ваш перший візит.";

}

const currentDate = new Date().toLocaleString();

localStorage.setItem("lastVisit", currentDate);