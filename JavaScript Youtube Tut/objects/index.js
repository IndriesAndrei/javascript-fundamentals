// object => group of properties and methods
// properties -> what an object has
// methods -> what an object can do

const car = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive: function() {
        console.log("You drive the car");
    },
    brake: function() {
        console.log("You step on the brakes");
    } 
}

// get object properties/methods
console.log(car.model);
car.drive();

// =======================
// this keyword -> reference to a particular object (the object depends on the immediate context)
const newCar = {
    model: "Corvette",
    color: "blue",
    year: 2024,

    drive: function() {
        console.log(`You drive the ${this.model}`);
    }
}

console.log(newCar.model);
newCar.drive();

// ========= classes -> blueprints for creating objects (define what properties and methods they will have) ========
class Player {
    // define properties that all Player objects will have
    score = 0;

    // methods
    pause() {
        console.log("You paused the game");
    }

    exit() {
        console.log("You exited the game");
    }
}

const player1 = new Player();
console.log("player 1 score is:", player1.score);
player1.pause();
player1.exit();

// ===== constructor -> special method of a class, it's job it's to accept arguments and assigns properties
class Student {
    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    // method
    study() {
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Andrei Indries", 40, 100);
const student2 = new Student("Patrick", 28, 70);
console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
student2.study();

// ========= stattic -> belongs to the class, not the objects
class Car {
    // get the number of cars we have instantiated, only the Car class has the number of cars
    static numberOFCars = 0;

    constructor(model) {
        this.model = model;
        Car.numberOFCars += 1;
    }

    // to all objects start in the same time
    static startRace() {
        console.log("3..2..1..GO!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Ford");
const car3 = new Car("BMW");

console.log('Number of cars', Car.numberOFCars);
Car.startRace();

// ============ inheritance -> child class can inherit all methods and properties from another class

// parent class
class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

// children classes
class Rabbit extends Animal {
    name = "rabbit";

    run() {
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal {
    name = "fish";

    swim() {
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal {
    name = "hawk";

    fly() {
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit;
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();

// ========== super keyword -> refers to the parent class (commonly used to invoke constructor of a parent class)
class NewAnimal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class NewRabbit extends NewAnimal {
    constructor (name, age, runSpeed) {
        // accessing constructor from the parent class
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class NewFish extends NewAnimal {
    constructor (name, age, swimSpeed) {
        // accessing constructor from the parent class
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

const newRabbit = new NewRabbit("rabbit", 1, 40);
const newFish = new NewFish("fish", 2, 20);

console.log(newRabbit.name);

// =========== getters and setters ============
// get -> binds an object property to a function when that property is accessed
class MyCar {
    constructor(power) {
        // protected property
        this._gas = 25;
        this._power = power;
    }

    // getter
    get power() {
        return `${this._power}hp`;
    }

    get gas() {
        return `${this._gas}L`;
    }

    // setter (_gas becomes writable)
    set gas(value) {
        if (value > 50) {
            value = 50;
        } else if (value < 0) {
            value = 0;
        }
        this._gas = value;
    }
}

let myCar = new MyCar(400);
car.gas = 50;
console.log(myCar.power);
console.log(myCar.gas);