const student = {
    name: "Ростислав",
    group: "3-038",

    showInfo: function () {
        console.log("Ім'я студента:", this.name);
        console.log("Група:", this.group);

        const nestedMethod = () => {
            console.log("=== Вкладений метод ===");
            console.log("Ім'я:", this.name);
            console.log("Група:", this.group);
        };

        nestedMethod();
    }
};

student.showInfo();