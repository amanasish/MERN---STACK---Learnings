class Rectangle{
    height
    width
    constructor(h,w){
        this.height=h
        this.width=w
    }

    area(){
        return this.height*this.width;
    }
}

const rect1 = new Rectangle(10,20);
console.log(rect1.area());