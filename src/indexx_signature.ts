// index signature`\

interface TransactionOnj{
    [index:string]:number
    Pizza:number
    Book:number
    Job:number
}



const todaysTransaction:TransactionOnj = {
    Pizza: 5,
    Book: 10,
    Job: 15
}
console.log(todaysTransaction.Book)

const todatsNet = (transaction : TransactionOnj) : number => {
    let total =0
    for(const item in transaction){
        total += transaction[item]
    }
    return total
}
console.log(todatsNet(todaysTransaction))

todaysTransaction.Pizza = 20

console.log(todatsNet(todaysTransaction))

console.log(todaysTransaction['nitin'])

//************************************** */

interface student{
    [key:string]:any
    name : string,
    GPA:number,
    classes?:number[]
}

const student1:student = {
    name:'nitin',
    GPA:7.05,
    classes:[100,200]
}

// console.log(student1.test) undefined

for(const item in student1){
    console.log(`${item}: ${student1[item]}`)
}

for(const item in student1){
    console.log(item)
}

Object.keys(student1).map(key =>{
    console.log(student1[key as keyof student])
})

const logsstudentkey = (student1:student,key:keyof student) :void =>{
    console.log(`student${key}: ${student1[key]}`)
}

logsstudentkey(student1,'name')

//************************************** */

interface Incomes{
    [key:string]:number
}

type Streams = 'salary' | 'bonus' | 'sidehuste'

// type Incomes = Record<Streams,number>