
class Calculate {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }

    sub() {
        return this.a - this.b;
    }

    multip() {
        return this.a * this.b;
    }

    div() {
        if (this.b === 0) return "Can't divide by zero";
        return this.a / this.b;
    }
}

module.exports = Calculate;