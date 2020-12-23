// https://refactoring.guru/uk/design-patterns/factory-method
// Визначає загальний інтерфейс для створення об’єктів у суперкласі,
// дозволяючи підкласам змінювати тип створюваних об’єктів.

class SimpleProduct {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
 }

 class StandardProduct {
     constructor(name) {
         this.name = name
         this.cost = 150
     }
 }

 class PremiumProduct {
     constructor(name) {
         this.name = name
         this.cost = 500
     }
 }

 // створюємо фабрику
class ProductFactory {
    static list = {
        simple: SimpleProduct,
        standard: StandardProduct,
        premium: PremiumProduct
    };

    create(name, type = 'simple') {
        const ProductClass = ProductFactory.list[type] || ProductFactory.list.simple;
        const product = new ProductClass(name);

        // розширили функціонал обєкта product
        product.type = type;
        product.define = () => {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }
        return product;
    }
}

const factory = new ProductFactory();

const products = [
  factory.create('Ted', 'premium'),
  factory.create('Ted2', 'simple'),
  factory.create('Ted3', 'standard')
];

products.forEach(product => product.define());
