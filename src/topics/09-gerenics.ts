

export function whatIsMyType<T>(argument: T) :T {

    return argument;
}


const amIString = whatIsMyType<string>('Hola Mundo');
const amINumber = whatIsMyType<number>(125);
const amIArray = whatIsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));

