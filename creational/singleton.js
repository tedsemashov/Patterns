// Використовується там де не треба багато інстансів якщо вже інстанс створений
// Клас має лише один екземляр і надає точку доступу до себе
// https://refactoring.guru/uk/design-patterns/singleton

class Database {
    constructor(data) {
        if(Database.exists) {
            return Database.instance;
        }

        Database.instance = this;
        Database.exists = true;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

const mongo = new Database('MongoDB');
console.log(mongo.getData());

// Отримуємо далі MongoDB бо instance вже існує
const mysql = new Database('MySql');
console.log(mysql.getData());
