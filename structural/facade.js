// Простий (спрощений) інтерфейс для взаємодії між класами (JQuery)
// https://refactoring.guru/uk/design-patterns/facade

class Complains {
    constructor() {
        this.complains = []
    }

    reply(complaint) {}

    add(complaint) {
        this.complains.push(complaint);
        return this.reply(complaint);
    }
}

class ProductComplaints extends Complains {
    reply({ id, customer, details }) {
        return `Product: ${id}: ${customer} (${details})`;
    }
}

class ServiceComplaints extends Complains {
    reply({ id, customer, details }) {
        return `Service: ${id}: ${customer} (${details})`;
    }
}

// Facade
class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now();
        let complaint;

        if(type === 'service') {
            complaint = new ServiceComplaints();
        } else {
            complaint = new ProductComplaints();
        }

        return complaint.add({ id, customer, details });
    }
}

const registry = new ComplaintRegistry();
console.log(registry.register('Ted', 'service', 'WTF'));
console.log(registry.register('Sasha', 'product', 'WTF again'));
