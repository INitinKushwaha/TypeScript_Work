"use strict";
// utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assignment, update) => {
    return Object.assign(Object.assign({}, assignment), update);
};
const assign1 = {
    studentId: "123",
    titile: "Assignment 1",
    grade: 100
};
console.log(updateAssignment(assign1, { grade: 90 }));
console.log(updateAssignment(assign1, { verified: true }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
// Readonly and Required
const recordassignment = (assign) => {
    return assign;
};
const assignverified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordassignment(Object.assign(Object.assign({}, assignverified), { verified: false }));
// Record
const hexColorMap = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff"
};
const finalGrades = {
    Nitin: "A",
    Rahul: "B",
    Rohit: "C"
};
console.log(finalGrades.Nitin);
const grades = {
    Nitin: { assign1: 100, assign2: 90 },
    Rahul: { assign1: 90, assign2: 80 },
    Rohit: { assign1: 80, assign2: 70 }
};
console.log(grades.Nitin.assign1);
const score = {
    studentId: "123",
    grade: 100
};
const preview = {
    studentId: "123",
    titile: "Assignment 1"
};
const createnewAssign = (title, grade) => {
    return { titile: title, grade: grade };
};
const newAssign1 = {
    titile: "Assignment 1",
    grade: 100
};
console.log(newAssign1);
const assignParams = ["Assignment 1", 100];
console.log(assignParams);
const fetchUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error) {
            console.error(err.message);
        }
    });
    return data;
});
fetchUser(1).then(user => {
    console.log(user);
});
