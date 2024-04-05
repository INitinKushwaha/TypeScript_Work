"use strict";
// index signature`\
const todaysTransaction = {
    Pizza: 5,
    Book: 10,
    Job: 15
};
console.log(todaysTransaction.Book);
const todatsNet = (transaction) => {
    let total = 0;
    for (const item in transaction) {
        total += transaction[item];
    }
    return total;
};
console.log(todatsNet(todaysTransaction));
todaysTransaction.Pizza = 20;
console.log(todatsNet(todaysTransaction));
console.log(todaysTransaction['nitin']);
const student1 = {
    name: 'nitin',
    GPA: 7.05,
    classes: [100, 200]
};
// console.log(student1.test) undefined
for (const item in student1) {
    console.log(`${item}: ${student1[item]}`);
}
for (const item in student1) {
    console.log(item);
}
Object.keys(student1).map(key => {
    console.log(student1[key]);
});
const logsstudentkey = (student1, key) => {
    console.log(`student${key}: ${student1[key]}`);
};
logsstudentkey(student1, 'name');
// type Incomes = Record<Streams,number>
