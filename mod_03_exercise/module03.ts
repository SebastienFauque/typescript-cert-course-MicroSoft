interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
}

let myIceCream: IceCream = {
    flavor: "vanilla",
    scoops: 2
}

console.log(myIceCream)

function tooManyScoops(dessert: IceCream) {
    if (dessert.scoops >= 4) {
       return dessert.scoops + ' is too many scoops!';
    } else {
       return 'Your order will be ready soon!';
    }
 }
 
console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));


// Interface extension
interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean; 
    // instructions?: boolean; // Error as Sundae's instructions is boolean while IceCreams is string.
    instructions?: string;
}

let mySundae: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
}

console.log(tooManyScoops(mySundae))