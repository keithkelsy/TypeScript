interface Product {
    description: string;
    price: number;

}

const phone: Product = {
    description: 'Nokia A2',
    price: 100
}

const tablet: Product = {
    description: 'iPad',
    price: 300
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}


function taxCalculation(options: TaxCalculationOptions): number[] {

    let total = 0;
    options.products.forEach( ({price}) => {
        total += price;
    })

    return [total, total * options.tax];

}

const shoppingCart = [phone, tablet];
const tax = 0.15;


const [total, taxTotal] = taxCalculation ({
    products: shoppingCart,
    tax
});


console.log('Precio total: ', total);
console.log('Tax total: ', taxTotal);
export { };