export class Person {

    constructor(
        public name: string,
        private address: string = 'No Address'
    ) {}
    }

class Heroe extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,

    ) {
        super(realName, 'New York');
    }
}

const ironman = new Heroe('Iron Man', 45, 'Tony');

console.log(ironman);

