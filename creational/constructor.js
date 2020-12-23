class Server {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }

    // розширили функціонал даного класу
    getUrl() {
        return `https://${this.name}.${this.ip}:3000`;
    }
}

const aws = new Server('AWS', '10.10.01.10');

console.log(aws.getUrl());
