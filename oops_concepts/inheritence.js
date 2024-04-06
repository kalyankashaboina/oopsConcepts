console.log("inheritance")

// Inheritance:Inheritance is a mechanaism in which one class can aquire the prpperty of another class


// example1:

class Parent{
    getMobile(){
        console.log("iphone 15 pro max")
    }
}
class child extends Parent{

}

let obji=new Parent()
obji.getMobile()





// example2:

class human{
    constructor(){
        this.age=30;
    }

    getAge(){
        console.log(this.age)
    }
}

class Hi extends human{
    constructor(){
        super()
        this.name="kalyan"
    }
    getName(){
        console.log(this.name)
    }
}

const persons=new Hi();
persons.getName();
persons.getAge()