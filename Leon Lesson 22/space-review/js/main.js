//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arra = [1, 2, 3 , 4, 5]
let sum = arra.reduce((x, y) => x + y, 0)
console.log(sum)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function errOtherSquared(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            newArr.push(Math.pow(arr[i], 2))
        } 
    } return newArr
}

errOtherSquared([1, 2, 3 , 4, 5])

//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
