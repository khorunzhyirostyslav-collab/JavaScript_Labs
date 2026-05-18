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