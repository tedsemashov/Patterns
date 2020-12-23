// https://refactoring.guru/uk/design-patterns/prototype

const car = {
    wheels: 4,

    init() {
        console.log(`We have ${this.wheels} wheels, and my owner is ${this.owner}!`)
    }
}

// Розширяємо основний обєкт за допомогою додаткових пропертів
// використовуючи прототип
const carWithOwner = Object.create(car, {
    owner: {
        value: 'Ted'
    }
})

// Використали метод прототипа
carWithOwner.init();
