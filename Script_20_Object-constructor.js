
// creating an Object
var object1 = {
    Name : "Shakib",
    Age : 22,
    gpa : 4.38,
    language : ["Hindi, Bengal, English "]
}
//printing an Object

console.log("\n"+object1.Name);
console.log(object1.Age);
console.log(object1.gpa);
console.log(object1.language);
console.log("\n");

//creating an constructor
function Info(Name, Age, gpa, language){
    this.Name = Name;
    this.Age = Age;
    this.gpa = gpa;
    this.language = language;

    //constructors function
    this.show = function(){
        console.log("[ "+this.Name+", "+this.Age+", "+this.gpa+", "+this.language+" ]");
    }   
}

var object2 = new Info("Shakib", 22, 4.38, ["Bengali", "English","Hindi"]);
object2.show();