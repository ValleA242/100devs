// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let hol = 'Holloween' 
hol = 'Christmas'
console.log(hol.toUpperCase())
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let got = 'got got';
alert(got.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function that(a, b, c, d, e){
    let sum = a + b + c + d + e
    let difference = 100 - sum
    return Math.abs(difference)
}

that(1, 2, 3, 4, 5);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threesComp(x, c, v){
    console.log(`${Math.min(x, c, v)} and ${Math.max(x, c, v)}`)
}

threesComp(1, 2, 3)
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function coin(){
    let randomNum = Math.floor(Math.random() * 2)
    if(randomNum === 1){
        return 'Heads'
    } else {
        return 'Tails'
    }
    
} 

coin();

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function takeNum(x) {
    for(let i = 0; i < x; i++){
        if(i < x){
            console.log(coin());
        }
    }
}

takeNum(5); 