// Ефективно передавати і працювати з даними через об'єкти (завантаження зображень) -
// кешування, зберігання памяті
// https://refactoring.guru/uk/design-patterns/flyweight

class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    create(model, price) {
        const candidate = this.getCar(model);
        if(candidate) return candidate;

        const newCar = new Car(model, price);
        this.cars.push(newCar);

        return newCar;
    }

    getCar(model) {
        return this.cars.find(car => car.model === model);
    }

}

const factory = new CarFactory();

const bmwX6 = factory.create('bmw', 10000);
const audi = factory.create('audi', 15000);
// Get from cash
// Закешував попереднє значення і повернув його, зберіг ресурси компа на обрахунки
const audiA3 = factory.create('audi', 8000);

console.log(bmwX6);
console.log(audi);
console.log(audiA3);
console.log(audi === audiA3);
