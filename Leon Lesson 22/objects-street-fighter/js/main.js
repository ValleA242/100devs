//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function Fighter ( charName, charMove, charSpecial) {
    this.name = charName
    this.move = charMove
    this.special = charSpecial

    this.callSpecial = function specialMove(){
        console.log ("shorooken")
    }

    this.callMove = function specialMove(){
        console.log('Hadooken')
    }

    this.entrySaying = function catchPhrase(){
        console.log('Do your worst')
    }
}