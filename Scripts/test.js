let animals = {
    animal1: "rabbit",
};

let rabbits = {
    colour: "white",
};
rabbits.__proto__ = animals;
// console.log(rabbit.setPrototypeOf);
// console.log(rabbit.getPrototypeOf);


// console.log(rabbit.getOwnPropertyDescriptor);
console.log(Object.defineProperty(rabbits, colour, { value: "Hello" }));
console.log(Object.getOwnPropertyDescriptor(animal, animal1));

