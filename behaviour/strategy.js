// https://refactoring.guru/uk/design-patterns/strategy
// Створити спільну стратегію щоб винести спільний метод

// Абстракція
class Vehicle {
    travelTime() {
        return this.timeTaken
    }
}

class  Bus extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 10
    }
}

class  Taxi extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 5
    }
}

class  Car extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 3
    }
}

// Спільна стратегія
class Commute {
    travel(transport) {
        return transport.travelTime()
    }
}

const commute = new Commute();

console.log(commute.travel(new Taxi()))
console.log(commute.travel(new Bus()))
console.log(commute.travel(new Car()))

