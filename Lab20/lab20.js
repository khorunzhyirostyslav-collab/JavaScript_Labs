const student = {
    name: "Ростислав",
    group: "3-038",

    showInfo: function () {
        console.log("Ім'я студента:", this.name);
        console.log("Група:", this.group);
    }
};

const anotherStudent = {
    name: "Олег",
    group: "3-101"
};

student.showInfo();

console.log("=== Використання call ===");

student.showInfo.call(anotherStudent);