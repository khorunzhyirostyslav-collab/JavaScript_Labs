function sayHello() {
  console.log("Привіт! Це лабораторна робота №8.");
}

sayHello();

function add(a, b) {
  console.log("a + b =", a + b);
}

add(5, 3);
add(10, 20);
add(-2, 7);

function getLastCharacter(str) {
    if (str.length === 0) {
        return "";
    }
    return str[str.length - 1];
}

console.log(getLastCharacter("JavaScript"));
console.log(getLastCharacter("Привіт"));
console.log(getLastCharacter("Hello"));