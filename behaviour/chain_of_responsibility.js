// https://refactoring.guru/uk/design-patterns/chain-of-responsibility
//
class MySum {
    constructor(initialValue = 10) {
        this.sum = initialValue;
    }

    add(value) {
        this.sum += value;
        // вертає контекст який містить метод add(). Тому можемо далі викликати цей метод
        return this;
    }
}

const sum1 = new MySum();

// chain of responsibility pattern
console.log(sum1.add(8).add(10).add(9).sum);
