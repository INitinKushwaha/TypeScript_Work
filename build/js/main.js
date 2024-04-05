"use strict";
class Coder {
    constructor(name, music, age, lang = 'JS') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `hello, I'm ${this.age}`;
    }
}
const nitin = new Coder('Nitin', 'Rock', 21, 'JS');
console.log(nitin.getAge());
// console.log(nitin.age)
// console.log(nitin.music)
// console.log(nitin.lang)
console.log(nitin.name);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getlang() {
        return `I write a ${this.lang} developer`;
    }
}
const sara = new WebDev('Mac', 'Sara', 'Pop', 22);
console.log(sara.getlang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is playing ${this.instrument} ${action}`;
    }
}
const page = new Guitarist('Jimmy Page', 'Guitar');
console.log(page.play('solo'));
class Peeps {
    static getcount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = Peeps.count++;
    }
}
Peeps.count = 0;
const john = new Peeps('John');
const paul = new Peeps('Paul');
const george = new Peeps('George');
console.log(Peeps.getcount());
console.log(paul.id);
// *****************************
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(item => typeof item === 'string')) {
            this.dataState = value;
        }
        else
            throw new Error('Invalid data');
    }
}
const myBand = new Bands();
myBand.data = ['John', 'Paul', 'George', 'Ringo'];
console.log(myBand.data);
myBand.data = [...myBand.data, 'Pete'];
console.log(myBand.data);
