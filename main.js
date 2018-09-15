    "use strict";

    //Variables for the page.
    var userName = prompt('Welcome to my site, what\'s your name?');

    var videoGames;
    var gamesUpper = videoGames.toUpperCase();

    var roleplay;
    var roleplayUpper = roleplay.toUpperCase();

    var children;
    var childrenUpper = children.toUpperCase();

    var cuteness;
    var cuteUpper = cuteness.toUpperCase();

    var stateNumber = 3;
    var guessedCounter = 4;
    var guessedNumber;

    var states;
    var statesUpper = states.toUpperCase();

    var correctAnswers;

    //Username fillout insurance
    while(userName.length == 0){
        userName = prompt('Please give me a name.');
    }
    alert('Welcome to my about me ' + userName + '.')
    console.log('Current user is ' + userName)

    //Video game question
    do{
        gamesUpper = prompt('Does Anthony like to play video games? Please use simple yes or no answers.');
    } while(gamesUpper !== 'yes' && gamesUpper !== 'no' && gamesUpper !== 'y' && gamesUpper !== 'n');

    if(gamesUpper === 'yes' || gamesUpper === 'y'){
        alert('Nice job, I like to play video games.');
      correctAnswers++;  
    } else if(gamesUpper === 'no' || gamesUpper === 'n'){
        alert('No way, I like to play video games, who wouldn\'t.');
    } else {
        alert('Did you know yes and no are the ways to answer?');
    }
    console.log(userName + ' answered ' + gamesUpper)

    //Roleplay question
    do{
        roleplayUpper = prompt('Do I have a lot of interest in role playing games?');
    } while(roleplayUpper !== 'yes' && roleplayUpper !== 'no' && roleplayUpper !== 'y' && roleplayUpper !== 'n');

    if(roleplayUpper === 'yes' || roleplayUpper === 'y'){
        alert('Correct! I do have a lot of interest in RPGs.');
        correctAnswers++;
    } else if(roleplayUpper === 'no' || roleplayUpper === 'n'){
        alert('That\'s wrong. I have a ton of interest in RPGs. They are one of my favorite games.');
    } else{
        alert('Did you know yes and no are the ways to answer?');
    }
    console.log(userName + ' answered ' + roleplayUpper)

    //Kid Question
    do{
        childrenUpper = prompt('Do I have any kids?');
    } while(childrenUpper !== 'yes' && childrenUpper !== 'no' && childrenUpper !== 'y' && childrenUpper !== 'n');
    
    if(childrenUpper === 'yes' || childrenUpper === 'y'){
        alert('I do! A single kid.');
        correctAnswers++;
    } else if(childrenUpper === 'no' || childrenUpper === 'n'){
        alert('Sorry. I do have a kid.')
    } else{
        alert('Did you know yes and no are the ways to answer?');
    }
    console.log(userName + ' answered ' + childrenUpper)

    //Cuteness Question
    do{
        cuteUpper = prompt('Is my son cute?');
    } while(cuteUpper !== 'yes' && cuteUpper !== 'no' && cuteUpper !== 'y' && cuteUpper !== 'n');

    if(cuteUpper === 'yes' || cuteUpper === 'y'){
        alert('He is extremely cute.');
        correctAnswers++;
    } else if(cuteUpper === 'no' || cuteUpper === 'n'){
        alert('How could you say no!?');
    } else{
        alert('Did you know yes and no are the ways to answer?');
    }
    console.log(userName + ' answered ' + cuteUpper)

    //State Number Question
    do{
        guessedNumber = parseInt( prompt('Can you guess how many states I have lived in?'));
        guessedNumber--;
    } while (guessedNumber !== stateNumber)

    if(guessedCounter === 0){
        alert('Sorry you didn\'t get the right number, it was ' + stateNumber);
    } else{
        alert('You got it!');
        correctAnswers++;
    }

    //Home State Question
    // for (var i = 0; i < .length; i++){
    //     if( [i] === )
    // }