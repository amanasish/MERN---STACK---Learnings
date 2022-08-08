const prompt = require('prompt-sync')();
const fs = require('fs');

//constructor func
function User(id,name,email,phone){
    this.id=id;
    this.name=name;
    this.email=email;
    this.phone=phone;

}

exports.addUser = ()=>{
    const howManyUsers = prompt('Enter How many users ?');
    let userArr=[];
    for(let i=0;i<howManyUsers;i++){
        const id = prompt(`Enter user id ?`);
        const name = prompt(`Enter user name ?`);
        const email = prompt(`enter user email ?`);
        const phone = prompt(`Enter user phone ?`);
        //object
        const user = new User(id,name,email,phone);
        //pushing
        userArr=[...userArr,user];
    }
    //synconous way
    //fs.writeFileSync("user.json",JSON.stringify(userArr));
    //asyncronous
    fs.writeFile("user.json",JSON.stringify(userArr),(err)=>{

        //call back function
        if(err)
            console.log(`Something went wrong`)
        else
            console.log(`User(s) saved successfully`)
    })

}

/*{
    id,
    name,
    email,
    phone
}
*/