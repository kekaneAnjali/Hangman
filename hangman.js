




// Create an array of words
var myArray=["computer","school","apple","banana","good","bad","and","off","on","cool","this","that","car"];

var gameWordArray;
var dashesArray;
var lives=6;

// Pick a random word
function sartGame(){


var randIndex= Math.floor(Math.random()*13);

var gameWord=myArray[index];
gameWordArray=gameWord.split("");
console.log(gameWordArray);



 dashesArray=[];
var matchMade=false;
for (var index=0;index<gameWordArray.length;index++)
{
    dashesArray.push("-");

}
console.log(dashesArray);
}
function guessWord(){
var letterGuess= val();
for (var index=0;index<gameWordArray.length;index++)
{
    if (letterGuess==gameWordArray[index])
    {
        dashesArray[index]=letterGuess;
        matchMade=true;

    }
}
console.log(gameWordArray.indexOf("-"));
if (!matchMade)
{
    lives=lives-1;
    
}
}

