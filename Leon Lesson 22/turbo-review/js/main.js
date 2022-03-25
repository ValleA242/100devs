// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drink = "Water"
console.log(drink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let stringMult = 'apple green purple'
let arr = stringMult.split(" ")
let apple = arr.forEach(x => {
    return (x === 'apple' ? true : false)
});

console.log(apple)


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rPS(){
    let randNum = Math.floor(Math.random() * 3)
    if(randNum === 1){
        return 'Rock'
    } else if(randNum === 2) {
        return 'Scissor'
    } else {
        return 'Paper'
    }
}

console.log(rPS())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function getWinner(choice){
    let botChoice = rPS();
    if( (choice = 'Rock' && botChoice === 'Scissor') || (choice === 'Paper' && botChoice === 'Rock') || (choice === 'Scissor' && botChoice === 'Paper')){
        console.log('You Win')
    } else if (choice === botChoice) {
        console.log('You tied') 

        } else {
            console.log ('You lose')
    }
    
}
 //getWinner('Rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function getWL(arr){
    arr.forEach( choice => getWinner(choice))
}