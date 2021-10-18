const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Welcome to the password validator tool!")
reader.question("Please enter a password for validation: ", function(input){
    password = input 

    if (password.length >= 10) {
        console.log("Your password is long enough!")
    } else {
        console.log("Your password is not long enough.")
    }
})