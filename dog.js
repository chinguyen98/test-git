const chalk = require('chalk');

function Dog(name) {
    this.stomach = [];
    this.name = name;
};

Dog.prototype.eat = function (cat) {
    this.stomach.push(cat);
};

Dog.prototype.sayHi = function () {
    console.log('Iam' + chalk.blue(this.name));
};

module.exports = Dog;