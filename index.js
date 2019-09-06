const Dog = require('./dog');
const Cat = require('./cat');

let dog = new Dog('Milu');
dog.sayHi();

let tom = new Cat();

dog.eat(tom);
console.log(dog)