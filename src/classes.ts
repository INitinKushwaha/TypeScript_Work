class Coder{
    constructor(
        public readonly name:string,
        public music:string,
        private age:number,
        protected lang:string = 'JS'
        ) {
            this.name = name;
            this.music = music;
            this.age = age;
            this.lang = lang;
    }
    getAge(){
        return `hello, I'm ${this.age}`
    }
}
const nitin = new Coder('Nitin','Rock',21,'JS')
console.log(nitin.getAge())
// console.log(nitin.age)
// console.log(nitin.music)
// console.log(nitin.lang)
console.log(nitin.name)

class WebDev extends Coder{
    constructor(
        public computer : string,
        name:string,
        music:string,
        age:number,
    ) {
        super(name,music,age)
        this.computer = computer;
    }
    public getlang(){
        return `I write a ${this.lang} developer`
    }
}
const sara = new WebDev('Mac','Sara','Pop',22)
console.log(sara.getlang())

// console.log(sara.age)
// console.log(sara.lang)

// *****************************

interface Musician{
    name : string,
    instrument: string,
    play(action:string):string
}

class Guitarist implements Musician{
    constructor(
        public name : string,
        public instrument : string
    ) {
        this.name = name;
        this.instrument = instrument;
    }
    public play(action:string){
        return `${this.name} is playing ${this.instrument} ${action}`
    }
}

const page = new Guitarist('Jimmy Page','Guitar')
console.log(page.play('solo'))

class Peeps {
    static count: number = 0
    static getcount():number{
        return Peeps.count
    }

    public id:number
    constructor(
        public name : string
    ) {
        this.name = name;
        this.id = Peeps.count++
    }
}

const john = new Peeps('John')
const paul = new Peeps('Paul')
const george = new Peeps('George')
console.log(Peeps.getcount())
console.log(paul.id)

// *****************************

class Bands{
    private dataState : string[]

    constructor(){
        this.dataState = []
    }
    public get data():string []{
        return this.dataState
    }
    public set data(value:string[]){
      if(Array.isArray(value) && value.every(item => typeof item === 'string')){
          this.dataState = value
      }else throw new Error('Invalid data')
    }
}

const myBand = new Bands()
myBand.data = ['John','Paul','George','Ringo']
console.log(myBand.data)

myBand.data =[...myBand.data,'Pete']
console.log(myBand.data)