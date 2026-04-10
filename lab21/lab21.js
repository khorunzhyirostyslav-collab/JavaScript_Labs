// Лабораторна робота №21
// Тема: Прототипи та класи
// Варіант 18
// Завдання: додати у "Бібліотека" метод додатиКнигу() для додавання книги до масиву

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    showInfo() {
        return `${this.title} - ${this.author}, ${this.year}`;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    showBooks() {
        console.log(`Бібліотека: ${this.name}`);
        console.log("Список книг:");

        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.showInfo()}`);
        });
    }
}

// Створення книг
const book1 = new Book("Кобзар", "Тарас Шевченко", 1840);
const book2 = new Book("Лісова пісня", "Леся Українка", 1911);
const book3 = new Book("Тигролови", "Іван Багряний", 1944);

// Створення бібліотеки
const library = new Library("Моя бібліотека");

// Додавання книг у бібліотеку
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Виведення результату
library.showBooks();