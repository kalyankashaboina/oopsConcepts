var a="abstraction"
console.log(a)



// Abstarction:shwing essential information and hiding unnessary/senstive data


// Exapmple probelm:
class ATM{
    constructor(Withdraw){
        this.balance=1000;
        this.minimum=500;
        this.withdraw=Withdraw
    }
getBalance(){
    if((this.balance-this.withdraw)>=this.minimum){
        console.log("withdrw sucessful")
    }
    else{console.log("withdraw failed")}
}

}

let obj=new ATM(600)
obj.minimum=400;


obj.getBalance()
console.log(obj.minimum)
// the problem here is we can manupulate the varibles inside class from externally

// to stop this we use abstraction





class ATMs{
    constructor(Withdraw){
        this.balance=1000;
        
        this.withdraw=Withdraw
    }
getBalance(){
    this.minimum=500;
    if((this.balance-this.withdraw)>=this.minimum){
        console.log("withdrw sucessful")
    }
    else{console.log("withdraw failed")}
}

}

let obj1=new ATMs(600)
// if u want to manupulate/override  or access the element it is not posssibl  in this senario 
// because the minium is in getbalanece method
// by using abstraction we can settle this problem
// so that we are moving minimum from constructor to get balnce method
// so that it can only have functional scope or it can accesed inside that method only

console.log(obj1.minimum)



// DEFINATION:The purpose of abstraction is hiding the unnessary details from the user








