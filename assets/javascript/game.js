// PSEUDOCODE ============================================
// start of the of the round, assign random values between 1-12 to each of the 4 pictures, values remain contstant for the round
// number to be matched will also be randomly be generated specific for the round - goalNumber
// totalScore will be at 0 initially
// any time picture is clicked, the value is added to the totalScore
// totalScore will check each time if it is equal to goalNumber
// if totalScore == goalNumber, win a round, add to the winCounter, start another round
// if totalScore > goalNumber, lose a round, add to the lossCounter, start another round
// each round, totalScore is reset


// GLOBAL VARIABLES ======================================
var goalNumber = 0;
var winCounter = 0;
var lossCounter = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;


// FUNCTIONS =============================================

function startRound () {

    totalScore = 0;
    $('#totalScore').html('Total: ' + totalScore);

    $('#winCounter').html('Wins: ' + winCounter);
    $('#lossCounter').html('Losses: ' + lossCounter);

    goalNumber = Math.floor(Math.random() * 100 ) + 12
    $('#goalNumber').html('Goal Number: ' + goalNumber);

    gem1 = Math.floor(Math.random() * 13) + 1
    gem2 = Math.floor(Math.random() * 13) + 1
    gem3 = Math.floor(Math.random() * 13) + 1
    gem4 = Math.floor(Math.random() * 13) + 1

};


function winLoseChecker () {
    if (totalScore === goalNumber) {
        alert('Good Job! You Win!')
        winCounter++;
        $('#winCounter').html('Wins: ' + winCounter)
        startRound();
    } else if (totalScore > goalNumber) {
        alert('Damnit! You Lost!')
        lossCounter++;
        $('#lossCounter').html('Loss: ' + lossCounter)
        startRound();
    } 
}


// MAIN PROCESS ==========================================
$(document).ready(startRound());

$('#gem1').on('click', function() {
    totalScore = totalScore + gem1;
    $('#totalScore').html('Total: ' + totalScore);
    winLoseChecker();
});

$('#gem2').on('click', function() {
    totalScore = totalScore + gem2;
    $('#totalScore').html('Total: ' + totalScore)
    winLoseChecker();
});

$('#gem3').on('click', function() {
    totalScore = totalScore + gem3;
    $('#totalScore').html('Total: ' + totalScore)
    winLoseChecker();
});

$('#gem4').on('click', function() {
    totalScore = totalScore + gem4;
    $('#totalScore').html('Total: ' + totalScore)
    winLoseChecker();
});

// RANDOM TESTING ========================================



