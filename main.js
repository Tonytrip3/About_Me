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
var question = ['Does Anthony like to play video games? Please use y/n.', 'Do I have a lot of interest in role playing games?', 'Do I have any kids?', 'Is my son cute?', 'Do I have any college degrees?', 'Can you guess how many states I have lived in?', 'Can you guess how many states I have lived in?', 'What is a state I have lived in?'];
var possibleResponses = [['y','n'], ['y','n'], ['y','n'], ['y','n'], ['y','n'], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [ 'california', 'oregon', 'washington']];
var rightAnswers = ['y', 'y', 'y', 'y', 'n', 3, ['california', 'oregon', 'washington']];
var response = [['Nice job, I like to play video games.', 'No way, I like to play video games, who wouldn\'t.'], ['Correct! I do have a lot of interest in RPGs.', 'That\'s wrong. I have a ton of interest in RPGs. They are one of my favorite games.'], ['I do! A single kid.', 'Sorry. I do have a kid.'], ['He is extremely cute.', 'How could you say no!?'], ['Correct! I only have a high school diploma and GED.', 'Nope. I have never attended a year of college.'], ['You got it!', 'Sorry you didn\'t get the right number, it was ' + possibleResponses[5] + '.'], ['Corect! I have lived in ' + guessedState + '.', 'Sorry I have not lived in ' + guessedState + '.']];
var guessCounter = [4,6];
var guessedNumber;
var guessedState;

var askQuestion = function(question,rightAnswers,response,possibleResponses){
  for (var i = 0; i < question.length; i++){
    do{
      var answer = prompt(question[i]);
    } while (!possibleResponses[i].includes(answer));{
      answer = answer.toLowerCase().charAt(0);
      console.log(answer);
      if ([i] === 5){
        do{
          if(guessedNumber !== rightAnswers[i]){
            guessCounter[0]--;
          };
          console.log(`${guessedNumber} was guessed.  ${guessCounter} tries remaining.`);
        } while (possibleResponses[i] !== rightAnswers[i] && guessCounter > 0);{
          if(possibleResponses[i] !== rightAnswers[i] && guessCounter === 0){
            alert(`Sorry you didn\'t get the right number, it was ${rightAnswers[i]}.`);
          } else{
            alert('You got it!');
            correctAnswers++;
          }
        };
      } else if ([i] === 6){
        do{
          if(guessedState !== rightAnswers[i]){
            guessCounter[1]--;
          };
          console.log(`${guessedState} was guessed. ${guessCounter} tries remaining.`);
        } while  (guessedState !== rightAnswers[i] && guessCounter > 0);{
          if(guessedState !== rightAnswers[i] && guessCounter === 0){
            alert(`Sorry I have not lived in ${guessedState}.`);
          } else{
            alert(`Corect! I have lived in ${guessedState}.`);
            correctAnswers++;
          }
        };
      } else if (answer === rightAnswers[i]){
        alert(response[i][0]);
      } else{
        alert(response[i][1]);
      }
    }
  }
};

//Score
var finalScore = function(){
  alert('you have answered ' + correctAnswers + ' questions correctly, out of ' + question.length + ', ' + user + '.');
};
// ========================================================================================================================================================================
// function calls
askQuestion(question,rightAnswers,response,possibleResponses);
finalScore();