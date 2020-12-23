// структура, а дочірні класи реалізовують конкретний функціонал
// https://refactoring.guru/uk/design-patterns/template-method

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {}

    work() {
        return `${this.name} do ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} have salary ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    // Дочірній клас перезаписав батьківський
    responsibilities() {
        return 'Coding, Meeting';
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    // Дочірній клас перезаписав батьківський
    responsibilities() {
        return 'Testing';
    }
}

const dev = new Developer('Ted', 10000);

console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Marta', 8000);

console.log(tester.getPaid())
console.log(tester.work())
