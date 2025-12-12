const tea = {
    name: "Ginger Tea",
    price : 20,
    isHot : true
}


//defining type for object
// let coffee: {
//     name: string,
//     price: number,
//     isHot: boolean
// }

// coffee  = {
//     name: "Lemon Tea",
//     price : 25,
//     isHot : false 
// }


type Tea = {
    name: string,
    price: number,
    ingredients: string[]
}

const masalaTea: Tea = {
    name: "Masala Tea",
    price: 30,
    ingredients: ["ginger", "cardamom", "clove", "tea leaves"]
}


// duck typing / structural typing
type Cup = {size : string };
let smallCup: Cup = { size: "200ml" };
let bigCup: Cup = { size: "500ml" , material: "ceramic" } as Cup; // type assertion to ignore extra property

smallCup = bigCup; // valid assignment since both are of type Cup

type Brew = {BrewTime: number}; 
const coffee = {BrewTime: 5, temperature: 90, type: "Espresso"} as Brew; // type assertion to ignore extra properties

const chaiBrew : Brew = coffee; // valid assignment due to structural typing


type user = {
    username: string,
    password: string
}

const u : user = {
    username: "admin",
    password: "admin123"
}

type Item = {name: string,quantity: number};
type Address = {street: string, zip: number};

type order= {id: string , item: Item[], shippingAddress: Address};

type Chai = {
    name: string,
    price: number,
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("updating chai with : ", updates);
    
}

updateChai({price: 35});
updateChai({})// this is also valid , but may not be useful in real scenarios

type TeaOrder = {
    teaName?: string,
    quantity?: number,
}

const placeTeaOrder = (order: Required<TeaOrder>) => {
    console.log("Placing tea order: ", order);
}

placeTeaOrder({teaName: "Green Tea", quantity: 2});

// placeTeaOrder({teaName: "Black Tea"}); // Error: Property 'quantity' is missing
// placeTeaOrder({}); // Error: Property 'teaName' and 'quantity' are missing


type ChaiDetails = {
    name: string,
    price: number,
    isHot: boolean
    ingredients: string[]
}

type BasicChaiInfo = Pick<ChaiDetails, "name" | "price">;

const getChaiInfo = (chai: BasicChaiInfo) => {
    console.log(`Chai: ${chai.name}, Price: ${chai.price}`);
}

type FullChaiInfo = Omit<ChaiDetails, "ingredients">;

const displayChaiDetails = (chai: FullChaiInfo) => {
    console.log(`Chai Details - Name: ${chai.name}, Price: ${chai.price}, Is Hot: ${chai.isHot}`);
}

// Pick type can be used to create objects with only certain properties
// Omit type can be used to create objects without certain properties
// These utility types help in creating flexible and reusable code structures.