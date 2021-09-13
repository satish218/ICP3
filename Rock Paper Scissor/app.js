const rock=1;
const paper=2;
const scissor=3;
let computerChoice = 0;
let countScore=0;
let yourScore=0;
let compScore=0;
let tieScore=0;
let gamesPlayed=0
//system generates a random number and based on that system will choose among rock, paper, scissor
function getRandomNumber () {
    let random=Math.floor(Math.random()*(4-1)+1);
    if (random==1) {
        document.getElementById('sysytem-choice').innerHTML='System picked: Rock'
    }else if (random==2) {
        document.getElementById('sysytem-choice').innerHTML='System picked: Paper'
    } else {
        document.getElementById('sysytem-choice').innerHTML='System picked: Scissor'
    }
    totalGames()
    return random;
}
//Result function when user picks Rock. System choice is compared against rock and result is displayed
function rockfn (){
    computerChoice=getRandomNumber();
    if (computerChoice==rock){
        document.getElementById('result').innerHTML='Tie'
        count()
        document.getElementById('result').style.color='#ff6900'
        return document.getElementById('result').innerHTML
    }else if (computerChoice==paper) {
        countScore=1;
        count()
        document.getElementById('result').innerHTML='Computer wins'
        document.getElementById('result').style.color='#ff0000'
        return document.getElementById('result').innerHTML
    }else {
        countScore=2;
        count()
        document.getElementById('result').innerHTML='you win'
        document.getElementById('result').style.color='#034f04'
        return document.getElementById('result').innerHTML
    }
}
//Result function when user picks paper. System choice is compared against Paper and result is displayed
function paperfn (){
    computerChoice=getRandomNumber();
    if (computerChoice==paper){
        document.getElementById('result').innerHTML='Tie'
        count()
        document.getElementById('result').style.color='#ff6900'
        return document.getElementById('result').innerHTML
    }else if (computerChoice==scissor) {
        countScore=1;
        count()
        document.getElementById('result').innerHTML='Computer wins'
        document.getElementById('result').style.color='#ff0000'
        return document.getElementById('result').innerHTML
    }else {
        countScore=2;
        count()
        document.getElementById('result').innerHTML='you win'
        document.getElementById('result').style.color='#034f04'
        return document.getElementById('result').innerHTML
    }
}
//Result function when user picks scissor. System choice is compared against Scissor and result is displayed
function scissorfn (){
    computerChoice=getRandomNumber();
    if (computerChoice==scissor){
        document.getElementById('result').innerHTML='Tie'
        count()
        document.getElementById('result').style.color='#ff6900'
        return document.getElementById('result').innerHTML
    }else if (computerChoice==rock) {
        countScore=1;
        count()
        document.getElementById('result').innerHTML='Computer wins'
        document.getElementById('result').style.color='#ff0000'
        return document.getElementById('result').innerHTML
    }else {
        countScore=2;
        count()
        document.getElementById('result').innerHTML='you win'
        document.getElementById('result').style.color='#034f04'
        return document.getElementById('result').innerHTML
    }
}
//function to update the win and lose scores
function count() {
    if (countScore==2){
        yourScore+=1
        document.getElementById('your-score').innerHTML='Your Score: '+yourScore
        countScore=0
        return document.getElementById('your-score').innerHTML
    }else if (countScore==1){
        compScore+=1;
        document.getElementById('comp-score').innerHTML='System Score: '+compScore
        countScore=0
        return document.getElementById('comp-score').innerHTML
    }else {
        tieScore+=1;
        document.getElementById('tie').innerHTML='Tie: '+tieScore
        return document.getElementById('tie').innerHTML
    }
}
//total number of games played in a session.
function totalGames() {
    gamesPlayed=yourScore+compScore+tieScore+1;
    document.getElementById('total-games').innerHTML='Total Games Played: '+gamesPlayed;
    return document.getElementById('total-games').innerHTML
}
//Restarts game from start again with all scores set to zero
function reset() {
    countScore=0;
    yourScore=0;
    document.getElementById('your-score').innerHTML='Your Score: '+yourScore
    compScore=0;
    document.getElementById('comp-score').innerHTML='System Score: '+compScore
    tieScore=0;
    document.getElementById('tie').innerHTML='Tie: '+tieScore
    gamesPlayed=0
    document.getElementById('total-games').innerHTML='Total Games Played: '+gamesPlayed;
    document.getElementById('sysytem-choice').innerHTML='System Picked: '
    document.getElementById('result').innerHTML='Start the game'
}