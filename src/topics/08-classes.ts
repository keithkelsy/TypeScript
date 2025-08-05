

export class Person {
    public name: string;
    private address: string;

    constructor() {
        this.name = 'Keith';
        this.address = 'Medellin';
    }
}

const spiderman = new Person();

console.log(spiderman.name);
console.log(spiderman.address);