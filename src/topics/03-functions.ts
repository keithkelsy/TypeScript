// const addNumber = (a: number, b:number) => {
//     return a + b;
// }


// function addNumberNormal(a: number, b: number):string {
//     return `${a + b}`;
// }

// const multiply = (firstNumber: number, secondNumber?: number, base: number = 2) => {
//     return firstNumber * base;
// }

// // const resultado1: number = addNumber(2, 2);
// // const resultado2: string = addNumberNormal(2, 2);
// // const resultado3: number = multiply(5);


// // console.table({resultado1, resultado2, resultado3});

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const keith: Character = {
    name: 'Keith',
    hp: 30,
    showHp() {
        console.log(`Cantidad de vida ${ this.hp }`);
    }

}

healCharacter(keith, 10);
healCharacter(keith, 50);

keith.showHp();

export {};