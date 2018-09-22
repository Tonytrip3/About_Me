'use strict';
// Global Variables
var correctAnswers = 0;
//Username fillout insurance
var getName = function(){
  var userName;
  do {
    userName = prompt('Welcome to my site, what\'s your name?');
  } while (!userName);{
    alert('Welcome to my about me ' + userName + '.');
    console.log('Current user is ' + userName);
    return userName;
  }
};
var user = getName();

//Question Array Function
var question = ['Does Anthony like to play video games? Please use y/n.', 'Do I have a lot of interest in role playing games?', 'Do I have any kids?', 'Is my son cute?', 'Do I have any college degrees?', 'Can you guess how many states I have lived in?', 'What is a state I have lived in?'];
var possibleResponses = [['y','n'], ['y','n'], ['y','n'], ['y','n'], ['y','n']];
var rightAnswers = ['y', 'y', 'y', 'y', 'n'];
var response = [['Nice job, I like to play video games.', 'No way, I like to play video games, who wouldn\'t.'], ['Correct! I do have a lot of interest in RPGs.', 'That\'s wrong. I have a ton of interest in RPGs. They are one of my favorite games.'], ['I do! A single kid.', 'Sorry. I do have a kid.'], ['He is extremely cute.', 'How could you say no!?'], ['Correct! I only have a high school diploma and GED.', 'Nope. I have never attended a year of college.']];

var askQuestion = function(question,rightAnswers,response,possibleResponses){
  for (var i = 0; i < 5; i++){
    do{
      var answer = prompt(question[i]);
    }
    //test to see if response is a valid response, else repeat
    while (!possibleResponses[i].includes(answer));
    answer = answer.toLowerCase().charAt(0);
    console.log(answer);
    if (answer === rightAnswers[i]){
      alert(response[i] [0]);
      correctAnswers++;
    } else{
      alert(response[i] [1]);
    }
  }
};

//State Number Question
var stateQuestion = function(){
  var stateNumber = 3;
  var guesses = 4;
  var guessedNumber;
  do{
    guessedNumber = parseInt( prompt(question[5]));
    if(guessedNumber !== stateNumber){
      if(guessedNumber > stateNumber && guesses > 0){
        alert('you guessed higher.');
      } else if (guessedNumber < stateNumber && guesses > 0){
        alert('you guessed lower.');
      }
      guesses--;
    };
    console.log(`${guessedNumber} was guessed. ${guesses} tries remaining.`);
  } while (guessedNumber !== stateNumber && guesses > 0);
  if(guesses === 0){
    alert(`Sorry you didn\'t get the right number, it was ${stateNumber}.`);
  } else{
    alert('You got it!');
    correctAnswers++;
  }
};

//Home State Question
var guessesCounter = 6;
var wrongAnswer = false;
var homeStateQuestion = function(){
  var states = [ 'california', 'oregon', 'washington'];
  while (guessesCounter > 0 && wrongAnswer === false){
    var guessedState = prompt(question[6].toLowerCase());
    for (var i = 0; i < states.length; i++){
      if (guessedState === states[i]){
        alert('You got it!');
        correctAnswers++;
        wrongAnswer = true;
      }
    }if (wrongAnswer === false) {
      alert('Please guess again.');
      guessesCounter--;
      console.log(guessesCounter);
    }else if(guessesCounter === 0 && wrongAnswer === false){
      alert('Sorry you didn\'t get the right state.');
    }
  }
};

//Score
var finalScore = function(){
  alert(`You have answered ${correctAnswers} questions correctly, out of ${question.length}, ${user}.`);
};
// ========================================================================================================================================================================
// function calls
askQuestion(question,rightAnswers,response,possibleResponses);
stateQuestion();
homeStateQuestion();
finalScore();