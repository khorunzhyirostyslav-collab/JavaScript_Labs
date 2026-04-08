// Лабораторна робота №20
// Варіант 18
// Завдання: створити об'єкт із вкладеним методом та перевірити this

const student = {
    name: "Ростислав",
    group: "3-038",

    showInfo: function () {
        console.log("Ім'я студента:", this.name);
        console.log("Група:", this.group);

        const nestedMethod = () => {
            console.log("Перевірка this у вкладеному методі:");
            console.log("Ім'я через this:", this.name);
            console.log("Група через this:", this.group);
        };

        nestedMethod();
    }
};

student.showInfo();