console.log("encapsulation")


// Encapsulation:Binding the datavariables nad methods in a class
// sample:
// class{
    // datavariables
        // +
        // methods(behaviour)
// }


class Hero{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
getName(){
    console.log(this.name)
}
getAge(){
    console.log(this.age)
}
getSalary(){
    console.log(this.salary)
}
}



let objs=new Hero("Jhon",23,30000)

objs.getName();
objs.getAge();
objs.getSalary();




// DEFINATION:It is an mechanism of binding data varibales and methods together and hides them from other class





