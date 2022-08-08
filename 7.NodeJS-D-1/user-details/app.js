//create an user 
// update an user and also add users 
//list users
//delete user


const createUSer = require('./create');
const updateUser = require('./update');
const prompt = require('prompt-sync')();

const operation = prompt(`Which operation you want to performe ?`)
/*
    add
    update
    list
    delete
*/

switch(operation){
    case 'add':
                createUSer.addUser();
                break;
    case 'update':
                const id = prompt(`Enter the user id that ypu want to update?`);
                updateUser.updateUser(id);
                break;
    case 'delete':
                break;
    default:
                console.log(`No operation is going to be performed`)
                break;
}
