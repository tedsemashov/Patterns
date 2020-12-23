// створюємо функцію яка послідовно отримує доступ до інформації
// функції генератори
// https://refactoring.guru/uk/design-patterns/iterator

function* generator(array) {
    let index = 0

    while (index < array.length) {
        yield array[index++]
    }
}

const gen = generator(['This', 'is', 'iterator']);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


