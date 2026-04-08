// Лабораторна робота №18
// Варіант 18
// Завдання: відфільтрувати масив слів, залишивши лише ті, що містять цифри

const words = ["apple", "banan4", "grape", "p3ach", "melon", "kiwi7", "plum"];

const wordsWithDigits = words.filter(function(word) {
    return /\d/.test(word);
});

console.log("Початковий масив:");
console.log(words);

console.log("Слова, що містять цифри:");
console.log(wordsWithDigits);