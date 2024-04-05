"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg)
        && arg !== null) ? true : false;
};
console.log(isObj(true));
console.log(isObj('nitin'));
console.log(isObj(123));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'nitin' }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue('nitin'));
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: 'nitin' }));
class StateObject {
    constructor(state) {
        this.state = state;
        this.getState = () => this.state;
        this.setState = (newState) => {
            this.state = newState;
        };
    }
}
const state1 = new StateObject({ name: 'nitin' });
console.log(state1.getState());
state1.setState({ name: 'nitin', age: 25 });
console.log(state1.getState());
