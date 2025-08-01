
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const keith: Character = {
    name: 'Keith',
    hp: 89,
    skills: ['Speed', 'Witcher']
}

const alejo: Character = {
    name: 'Alejandro',
    hp: 25,
    skills: ['Speaker', 'Social'],
    hometown: 'Medellin'
}

console.log({alejo, keith});


