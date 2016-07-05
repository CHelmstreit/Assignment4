//ASSIGNMENT 4

//STEP 1
/*
var ANIMAL = ANIMAL || {};

var Cat = function () {

};

var Dog = function () {

};
*/

//STEP 2
/*
var Cat = function () {

};

function Dog () {

};
*/

//STEP 3
/*
var Dog = function () {

};

*/

//STEP 4
/*
function Animal() {
    console.log('The Animal has been created.');
    };
*/

//STEP 5
/*
function Animal() {
    console.log('The Animal has been created.');
};
var dog = new Animal();
console.log(dog.constructor);
*/

//STEP 6
/*
function Animal(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
    console.log('The Animal has been created.');
};
*/

//STEP 7
/*
function Animal(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
    console.log('The Animal has been created.');
};

var dog = new Animal('dog', 'shiba', 'orange', '24 in.', '30 in.');
for (var property in dog) {
    console.log(property);
};
*/

//STEP 8
/*
function Animal(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
    console.log('The Animal has been created.');
    this.speak = function (color) {
        return 'The ' + color + ' dog is barking!';
    }
};

var dog = new Animal('dog', 'shiba', 'orange', '24 in.', '30 in.');
console.log(dog.speak('orange'));
*/

//STEP 9
/*
function Animal(type, breed, color, height, length) {
    console.log('The Animal has been created.');
    var _type = type;
    var _breed = breed;
    var _color = color;
    var _height = height;
    var _length = length;
    
    this.checkType = function () {
        if (_type === 'dog') {
            return 'The dog made a noise!';
        } else {
            return 'The ' + type + ' made a noise!';
        };
    };
    Animal.prototype.speak = function (color) {
        return 'The ' + type + ' made a noise!';
    };

    var dog = new Animal('dog', 'shiba', 'orange', '24 in.', '30 in.');
    console.log(dog.speak('dog'));
*/

//STEP 10
/*
function findWords(str) {
    return str.split('ruby').length;
}

alert(findWords('Destination unknown Ruby ruby ruby ruby SoHo'));
*/

//THE RECIPE CARD
/*
function recipeCard(name, servings, ingredients) {
    this._name = name;
    this._servings = servings;
    this._ingredients = ingredients;
    this.showCard = function () {
        console.log(this._name);
        console.log('Serves: ' + this._servings);
        console.log('Ingredients: ' + this._ingredients);
    }
}

var shoyuChicken = new recipeCard('Shoyu Chicken', '2', ['\n-2 (of each) chicken thighs and breasts', '\n-1 cup water', '\n-1 cup brown sugar', '\n-1 cup soy sauce', '\n-2 tsp minced garlic', '\n-1 tsp ground ginger']);
shoyuChicken.showCard();
*/

//THE READING LIST
/*
var Book = function (title, authour, alreadyRead) {
    this._title = title;
    this._author = authour;
    this._alreadyRead = alreadyRead;
    this._showList = function () {
        console.log(this._title + 'by ' + this._author + ', Already read? ' + this._alreadyRead);
    };
}
var jsForDummies = new Book('JavaScript for Dummies', 'Emily Vander Veer', false);
var starWars = new Book('Star Wars: Bloodline', 'Claudia Gray', true);
var GoT = new Book('Game of Thrones series', 'George RR Martin', false);
var goosebumps = new Book('Goosebumps', 'RL Stein', true);
var abnw = new Book('A Brave New World', 'Aldous Huxley', true);

var bookArray = [jsForDummies, starWars, GoT, goosebumps, abnw];

for (var read in bookArray) {
    if (bookArray[read]._alreadyRead === true) {
        console.log('You already read ' + bookArray[read]._title + ' by ' + bookArray[read]._author)
    } else {
        console.log('You still need to read ' + bookArray[read]._title + ' by ' + bookArray[read]._author)
    }

}
*/
