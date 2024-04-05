const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) 
    && arg !== null) ? true : false
}
console.log(isObj(true))
console.log(isObj('nitin'))
console.log(isObj(123))
console.log(isObj([1,2,3]))
console.log(isObj({name:'nitin'}))
console.log(isObj(null))

const isTrue = <T>(arg: T): {arg:T, is:boolean} => {
    if(Array.isArray(arg)&& !arg.length){
        return {arg, is:false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {arg, is:false}
    }
    return {arg, is:!!arg}

}

console.log(isTrue(false))
console.log(isTrue('nitin'))

interface hasId{
    id:number
}

const processUser = <T extends hasId>(user:T) => {
    return user
}

console.log(processUser({id:1, name:'nitin'}))

class StateObject<T>{
    constructor(private state:T){}
    getState = () => this.state
    setState = (newState:T) => {
        this.state = newState
    }
}
const state1 = new StateObject({name:'nitin'})
console.log(state1.getState())
state1.setState({name:'nitin', age:25})
console.log(state1.getState())