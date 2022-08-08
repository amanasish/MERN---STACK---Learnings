//1. read from the file all user data
//2. filter the data that you want to except the one that you want to update
//3. enter the data you want to update
//4. add the data to the existing array what we have extracted 
//5. we need write it back to the file

const prompt = require('prompt-sync')();
const fs = require('fs');

//constructor func
function User(id,name,email,phone){
    this.id=id;
    this.name=name;
    this.email=email;
    this.phone=phone;

}

exports.updateUser = (id)=>{
    let userArr = JSON.parse(fs.readFileSync("user.json"));
    // let userArr=[];
    userArr = userArr.filter(user=>user.id !=id)
    //for new one
        const name = prompt(`Enter user name ?`);
        const email = prompt(`enter user email ?`);
        const phone = prompt(`Enter user phone ?`);
        const userObj = new User(id,name,email,phone);
        userArr=[...userArr,userObj];
        fs.writeFile("user.json",JSON.stringify(userArr),(err)=>{

            //call back function
            if(err)
                console.log(`Something went wrong`)
            else
                console.log(`User(s) with ${id} updated successfully`)
        })
    
    }
