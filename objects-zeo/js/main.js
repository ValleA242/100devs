//Create a stopwatch object that has four properties and three methods
const stopwatch = {
    stopButton: 'Stop count',
    startButton: 'Start count',
    startTime: 00,
    screenColor: 'green',
    doubleTime: function(x){
        return stopwatch.startTime * 2
    },
    stopTime: function(x){
        return stopwatch.startTime * 1
    },
    resetTime: function(x){
        return stopwatch.startTime * 0
    }
    
}