// Дозволяє ставити ловушки щоб оприділяти роботу апки, щоб уникнути лишні запити на АПІ наприклад
// https://refactoring.guru/uk/design-patterns/proxy

function networkFetch(url) {
    return `${url} - response from server`;
}

// унікальна колекція Set
const cashe = new Set()
const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0];
        if(cashe.has(url)) {
            return `${url} - response from cashe`
        } else {
            cashe.add(url);
            return Reflect.apply(target, thisArg, args)
        }
    }
})

console.log(proxiedFetch('mclass'));
console.log(proxiedFetch('espanol'));
console.log(proxiedFetch('espanol'));
