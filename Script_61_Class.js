
class myInfo{
    constructor(name, id, age){
        this.name = name
        this.id = id
        this.age = age
    }

    set setName(name){
        this.name = name
    }

    get getName(){
        return this.name
    }

    show() {
        console.log(`Name : ${this.name}, ID : ${this.id}, Age : ${this.age}`);
    }
}


object1 = new myInfo('Shakib', 43, 22)
object1.show()

object1.setName = 'New Name'
console.log(object1.getName);
object1.show()