// One to many dependencies
// Спостерігачі слідкують за предметом і змінюються відповідно до його змін
// https://refactoring.guru/uk/design-patterns/observer

class Subject {
    constructor() {
        this.observers = []
    }

    subscribe(observer) {
        this.observers.push(observer)
    }
    //  Для кожного наглядача викликається функція апдейт
    init(action) {
        this.observers.forEach(observer => {
            observer.update(action)
        })
    }
}

class Observer {
    constructor(state = 1) {
        this.initialState = state;
        this.state = state;
    }

    update(action) {
        switch (action.type) {
            case 'INCREMENT':
                this.state = ++this.state
                break
            case 'DECREMENT':
                this.state = --this.state
                break
            case 'ADD':
                this.state += action.payload
                break
            default:
                this.state = this.initialState
        }
    }
}

const stream = new Subject()

const obs1 = new Observer();
const obs2 = new Observer(42);

stream.subscribe(obs1);
stream.subscribe(obs2);

stream.init({ type: 'INCREMENT'})
stream.init({ type: 'INCREMENT'})
stream.init({ type: 'DECREMENT'})
stream.init({ type: 'ADD', payload: 10})

console.log(obs1.state)
console.log(obs2.state)
