

export interface Passenger {
    name: string;
    children?: string[];
}


const passenger1: Passenger = {
    name: 'Keith',
}

const passenger2: Passenger = {
    name: 'Juan',
    children: ['Kevin', 'Andrea']
}

const printChildren = ( passenger: Passenger ) => {

    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, howManyChildren );
}

printChildren(passenger1);