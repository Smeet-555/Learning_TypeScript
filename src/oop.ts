class tea {
    flavor: string = ""; // initialize flavor as an empty string
    price: number = 0;   // initialize price as 0

    constructor() {
        // Constructor can be used for additional setup if needed
    }
}

const greenTea = new tea();
greenTea.flavor = "Green";
greenTea.price = 3.5;

console.log(`Flavor: ${greenTea.flavor}, Price: $${greenTea.price}`);

const blackTea = new tea();
blackTea.flavor = "Black";
blackTea.price = 4.0;

console.log(`Flavor: ${blackTea.flavor}, Price: $${blackTea.price}`);



class coffee {
    public flavor: string = "Mocha"; // public property
    private secretIngredient: string = " caramel"; // private property

    reveal(){
        return this.secretIngredient;
    }
}


class latte extends coffee {
    public milkType: string = "Whole Milk"; // public property

    showDetails() {
        return `Flavor: ${this.flavor}, Milk Type: ${this.milkType}, Secret Ingredient  : ${this.reveal()}`;
    }
}

const myLatte = new latte();
console.log(myLatte.showDetails());


// readonly properties example
class smoothie {
    readonly size: string;

    constructor(size: string) {
        this.size = size; // can only be assigned in the constructor
    }
}

const mySmoothie = new smoothie("Large");
console.log(`Smoothie Size: ${mySmoothie.size}`);

// mySmoothie.size = "Medium"; // This line would cause a compile-time error

// getters and setters example
class juice {
    private _flavor: string = "";

    get flavor(): string {
        return this._flavor;
    }

    set flavor(value: string) {
        this._flavor = value;
    }
} 

// static properties and methods example
class water {
    static type: string = "H2O";

    static describe() {
        return `Water is composed of two hydrogen atoms and one oxygen atom. Its chemical formula is ${this.type}.`;
    }
}

console.log(water.describe());

// abstract classes example 
abstract class beverage {
    abstract serve(): string;
}

class soda extends beverage {
    serve(): string {
        return "Serving a cold soda!";
    }
}

// composition example
class cup {
    volume: number; 

    constructor(volume: number) {
        this.volume = volume;
    }
}

class icedTea {
    teaType: string;
    cup: cup;

    constructor(teaType: string, cupVolume: number) {
        this.teaType = teaType;
        this.cup = new cup(cupVolume);
    }

    serve() {
        return `Serving a ${this.cup.volume}ml of iced ${this.teaType} tea.`;
    }
}