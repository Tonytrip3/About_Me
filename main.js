"use strict";

//Global Variables
// var userName;
// var videoGames;
// var roleplay;
// var children;
// var cuteness;
// var college;
 var correctAnswers = 0;

var question = ["Does Anthony like to play video games? Please use y/n.", "Do I have a lot of interest in role playing games?", "Do I have any kids?", "Is my son cute?", "Do I have any college degrees?"];
var rightAnswers = ['y', 'y', 'y', 'y', 'no']
var response = [
  ["Nice job, I like to play video games.", "No way, I like to play video games, who wouldn't."],
  ["Correct! I do have a lot of interest in RPGs.", "That's wrong. I have a ton of interest in RPGs. They are one of my favorite games."],
  ["I do! A single kid.", "Sorry. I do have a kid."],
  ["He is extremely cute.", "How could you say no!?"],
  ["Correct! I only have a high school diploma and GED.", "Nope. I have never attended a year of college."]
];
var possibleResponses = [['y','n'],['y','n'],['y','n'],['y','n'],['y','n']]

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

askQuestion(question,rightAnswers,response,possibleResponses);
// ];
// //Username fillout insurance
// var getName = function(){
//   var userName;
//   do {
//     userName = prompt("Welcome to my site, what's your name?");
//   } while (!userName);
//   alert("Welcome to my about me " + userName + ".");
//   console.log("Current user is " + userName);
//   return userName;
// };
// //Video game question
// var videoGamesQuestion = function(){
// do {
//   videoGames = prompt("Does Anthony like to play video games? Please use simple yes or no answers.");
// } while (videoGames !== "yes" && videoGames !== "no" && videoGames !== "y" && videoGames !== "n");

// if (videoGames === "yes" || videoGames === "y") {
//   alert("Nice job, I like to play video games.");
//   correctAnswers++;
// } else if (videoGames === "no" || videoGames === "n") {
//   alert("No way, I like to play video games, who wouldn't.");
// } else {
//   alert("Did you know yes and no are the ways to answer?");
// }
// console.log(
//   userName + " answered " + videoGames + " they have answered " + correctAnswers + " Correctly.");
// };
// //Roleplay question
// var roleplayQuestion = function(){
// do {
//   roleplay = prompt("Do I have a lot of interest in role playing games?");
// } while (
//   roleplay !== "yes" && roleplay !== "no" && roleplay !== "y" && roleplay !== "n");

// if (roleplay === "yes" || roleplay === "y") {
//   alert("Correct! I do have a lot of interest in RPGs.");
//   correctAnswers++;
// } else if (roleplay === "no" || roleplay === "n") {
//   alert("That's wrong. I have a ton of interest in RPGs. They are one of my favorite games.");
// } else {
//   alert("Did you know yes and no are the ways to answer?");
// }
// console.log(userName + " answered "+ roleplay +" they have answered "+ correctAnswers +" Correctly.");
// };
// //Kid Question
// var childrenQuestion = function(){
// do {
//   children = prompt("Do I have any kids?");
// } while (children !== "yes" && children !== "no" && children !== "y" && children !== "n");

// if (children === "yes" || children === "y") {
//   alert("I do! A single kid.");
//   correctAnswers++;
// } else if (children === "no" || children === "n") {
//   alert("Sorry. I do have a kid.");
// } else {
//   alert("Did you know yes and no are the ways to answer?");
// }
// console.log(userName +" answered " + children +" they have answered " + correctAnswers +" Correctly.");
// };
// //Cuteness Question
// var cutenessQuestion = function(){
// do {
//   cuteness = prompt("Is my son cute?");
// } while ( cuteness !== "yes" && cuteness !== "no" && cuteness !== "y" && cuteness !== "n");

// if (cuteness === "yes" || cuteness === "y") {
//   alert("He is extremely cute.");
//   correctAnswers++;
// } else if (cuteness === "no" || cuteness === "n") {
//   alert("How could you say no!?");
// } else {
//   alert("Did you know yes and no are the ways to answer?");
// };
// console.log( userName + " answered " + cuteness +" they have answered " + correctAnswers +" Correctly.");
// };
// //College Question
// var collegeQuestion = function(){
// do {
//   college = prompt("Do I have any college degrees?");
// } while ( college !== "yes" && college !== "no" && college !== "y" && college !== "n");

// if (college === "yes" || college === "y") {
//   alert("Nope. I have never attended a year of college.");
// } else if (college === "no" || college === "n") {
//   alert("Correct! I only have a high school diploma and GED.");
//   correctAnswers++;
// } else {
//   alert("Did you know yes and no are the ways to answer?");
// }
// console.log( userName + " answered " + college +" they have answered " + correctAnswers +" Correctly.");
// };
// //State Number Question
// var stateQuestion = function(){
// var stateNumber = 3;
// var guessedCounter = 4;
// var guessedNumber;
// do{
//     guessedNumber = parseInt( prompt('Can you guess how many states I have lived in?'));
//     if(guessedNumber !== stateNumber){
//       guessedCounter--;
//     };
//     console.log(guessedNumber + ' was guessed. ' + guessedCounter + ' tries remaining.');
// } while (guessedNumber !== stateNumber && guessedCounter>0);

// if(guessedCounter === 0){
//     alert('Sorry you didn\'t get the right number, it was ' + stateNumber + '.');
// } else{
//     alert('You got it!');
//     correctAnswers++;
// }
// };
// // //Home State Question
// var homeStateQuestion = function(){
//   var states = [ "california", "oregon", "washington"];
//   var stateGuess = prompt("What is a state I have lived in?");
//   console.log("The user has guessed " + stateGuess)
//   var correct = states.includes(stateGuess.toLowerCase());
//     if(correct){
//       alert("Corect! I have lived in " + stateGuess + ".");
//       correctAnswers++;
//     } else {
//       alert("Sorry I have not lived in " + stateGuess + ".");
//     } 
// };   
// // ========================================================================================================================================================================
// // function calls
// userName = getName();
// videoGamesQuestion();
// roleplayQuestion();
// childrenQuestion();
// cutenessQuestion();
// collegeQuestion();
// stateQuestion();
// homeStateQuestion();
