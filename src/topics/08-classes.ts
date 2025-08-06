export class Person {

    constructor(
        public firstName: string,
        public lastName: string,
        private address: string = 'No Address',
    ) {}
    }
export class Heroe {
    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,

    ) {
        // this.person = person;
    }
}

const tony = new Person('Tony', 'Stark', 'Sahagún');
const ironman = new Heroe('Iron Man', 45, 'Tony Stark', tony);

console.log(ironman);




