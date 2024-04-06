// utility types

// Partial

interface Assignment {
    studentId: string,
    titile: string,
    grade: number,
    verified?: boolean,
}

const updateAssignment = (assignment: Assignment, 
    update: Partial<Assignment>) :Assignment=> {
    return {...assignment, ...update};
    }

const assign1: Assignment = {
    studentId: "123",
    titile: "Assignment 1",
    grade: 100
}
console.log(updateAssignment(assign1, {grade: 90}));
console.log(updateAssignment(assign1, {verified: true}));
const assignGraded :Assignment=updateAssignment(assign1, {grade: 95});
console.log(assignGraded)
// Readonly and Required
const recordassignment = (
    assign:Required<Assignment>):
    Assignment => {
        return assign;
    }

const assignverified: Readonly<Assignment> = {
    ... assignGraded, verified: true}

recordassignment({...assignverified, verified: false});

// Record

const hexColorMap: Record<string, string> = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff"
}

type students = "Nitin" | "Rahul" | "Rohit"
type LetterGrade = "A" | "B" | "C" | "D" | "F"

const finalGrades: Record<students, LetterGrade> = {
    Nitin: "A",
    Rahul: "B",
    Rohit: "C"
}
console.log(finalGrades.Nitin);

interface Grade {
    assign1 :number,
    assign2 :number,
}

const grades: Record<students, Grade> = {
    Nitin: {assign1: 100, assign2: 90},
    Rahul: {assign1: 90, assign2: 80},  
    Rohit: {assign1: 80, assign2: 70}
}
console.log(grades.Nitin.assign1);

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score :AssignResult = {
    studentId: "123",
    grade: 100
}
type assignRreview = Omit<Assignment, "grade"| "verified">

const preview :assignRreview = {
    studentId: "123",
    titile: "Assignment 1"
}

// Exclude and Extract

type adjestedGrade = Exclude<LetterGrade, "F">

type highGrade = Extract<LetterGrade, "A" | "B">

// NonNullable
type AllPossibleGrades = 'Nitin' | 'Rahul' | 'Rohit' | 'A' | 'B' | 'C' | 'D' 

type NameOnly = NonNullable<AllPossibleGrades>

// ReturnType

type newAssign = {titile: string, grade: number}

const createnewAssign = (title: string, grade: number): newAssign => {
    return {titile: title, grade: grade}
}

type AssignType = ReturnType<typeof createnewAssign>

const newAssign1: AssignType = {
    titile: "Assignment 1",
    grade: 100
}
console.log(newAssign1);

// parameters

type AssignParams = Parameters<typeof createnewAssign>

const assignParams: AssignParams = ["Assignment 1", 100]
console.log(assignParams);

// Awaited - help us with the return type of an async function

interface User {
    id: number,
    name: string,
    email: string
}

const fetchUser = async (id: number): Promise<User> => {
   const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`
 ).then(res => {
    return res.json()
}).catch(err => {
    if(err instanceof Error) {
        console.error(err.message)
    })
    return data
}
type fetchedUser = Awaited<ReturnType<typeof fetchUser>>

fetchUser(1).then(user => {
    console.log(user)
}

