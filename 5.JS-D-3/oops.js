//we dont need a class to create an object in javascript
//object creations in jS
//1. Object Literals
//2. Factory Functions
//3. Constructor Functions

let rectangle = {
    width:10, //key:value pairs
    height:20,
    //methods
    area:function(){
        return this.height*this.width;
    },
    perimeter:function(){
        return 2*(this.height+this.width);
    }
}

//accesing the object
console.log(rectangle.height);