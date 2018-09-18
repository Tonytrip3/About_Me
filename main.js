'use strict';

// Global Variables
 var correctAnswers = 0;
//Username fillout insurance
var getName = function(){
  var userName;
  do {
    userName = prompt("Welcome to my site, what's your name?");
  } while (!userName);
  alert("Welcome to my about me " + userName + ".");
  console.log("Current user is " + userName);
  return userName;
};
var user = getName();
//Question Array Function
var question = ["Does Anthony like to play video games? Please use y/n.", "Do I have a lot of interest in role playing games?", "Do I have any kids?", "Is my son cute?", "Do I have any college degrees?"];
var rightAnswers = ['y', 'y', 'y', 'y', 'n'];
var response = [
 ["Nice job, I like to play video games.", "No way, I like to play video games, who wouldn't."],
 ["Correct! I do have a lot of interest in RPGs.", "That's wrong. I have a ton of interest in RPGs. They are one of my favorite games."],
 ["I do! A single kid.", "Sorry. I do have a kid."],
 ["He is extremely cute.", "How could you say no!?"],
 ["Correct! I only have a high school diploma and GED.", "Nope. I have never attended a year of college."]
];
var possibleResponses = [['y','n'],['y','n'],['y','n'],['y','n'],['y','n']];

var askQuestion = function(question,rightAnswers,response,possibleResponses){
 for (var i = 0; i<question.length; i++){
   do{
   var answer=prompt(question[i])
 }
   //test to see if response is a valid response, else repeat
   while (!possibleResponses[i].includes(answer));
   answer = answer.toLowerCase().charAt(0);
   console.log(answer);
   if (answer===rightAnswers[i]){
     alert(response[i] [0]);
     correctAnswers++;
   } else{
     alert(response[i] [1])
   }
 }
};
//State Number Question
var stateQuestion = function(){
  var stateNumber = 3;
  var guesses = 4;
  var guessedNumber;
  do{
    guessedNumber = parseInt( prompt('Can you guess how many states I have lived in?'));
    if(guessedNumber !== stateNumber){
      guesses--;
    };
    console.log(guessedNumber + ' was guessed. ' + guessedCounter + ' tries remaining.');
  } while (guessedNumber !== stateNumber && guessedCounter>0);
  if(guesses === 0){
    alert('Sorry you didn\'t get the right number, it was ' + stateNumber + '.');
  } else{
    alert('You got it!');
    correctAnswers++;
  }
};
//States I Have Lived In Question
// var homeStateQuestion = function(){
//   var states = [ "california", "oregon", "washington"];
//   var guessedCounter = 6;
//   var guessedState;
//   do{
//     guessedState = parseInt( prompt('What is a state I have lived in?'));
//     if(guessedState !== states[i]){
//     guessedCounter--;
//     };
//     console.log(guessedState + ' was guessed. ' + guessedCounter + ' tries remaining.');
//   } while  (guessedState !== states[i] && guessedCounter>0);
//   if(guessedCounter === 0){
//     alert("Sorry I have not lived in " + stateGuess + ".");
//   } else{
//     alert("Corect! I have lived in " + stateGuess + ".");
//     correctAnswers++;
// }
// };
//Score
var finalScore = function(){
  alert("you have answered " + correctAnswers + " questions correctly, out of " + question.length + ", " + user + ".");
};   
// ========================================================================================================================================================================
// function calls
askQuestion(question,rightAnswers,response,possibleResponses);
stateQuestion();
homeStateQuestion();
finalScore();