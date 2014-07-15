/* Create a classification of an object that describes a person in Javascript. It's constructor should take a name, parent name, and optional age. 
The object should have a #isDead method that returns a boolean based on if the age is set or not. */



 function Person (name, parentName, age) {
    this.name = name;
    this.parentName = parentName;
    this.age = age;

    if (this.age > 120 || this.age < 0) {
    	return this.name + " is Dead";
    }  
    else {
    	   return this.name + " as " + this.age + "years old and his parent is " + this.parentName; 
  }
}

