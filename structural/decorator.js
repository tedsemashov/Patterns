// Дозволяє динамічно додавати нову функціональнфсть із допомогою обгортки (HOC)
// https://refactoring.guru/uk/design-patterns/decorator

class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

// Decorator (типу HOC)
function aws(server) {
    server.isAWS = true;
    server.awsInfo = function () {
        return server.url;
    };
    return server;
}

// Обгорнутий сервер в декоратор
const s1 = aws(new Server('12.34.56', 8080));
console.log(s1.isAWS);
console.log(s1.awsInfo());
