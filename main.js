    "use strict";

    //Variables for the page.
    var userName = prompt('Welcome to my site, what\'s your name?');
    console.log('User' + userName)

    var videoGames = prompt('Does Anthony like to play video games? Please use simple yes or no answers.');
    var gamesUpper = videoGames.toUpperCase();

    var roleplay = prompt('Do I have a lot of interest in role playing games?');
    var roleplayUpper = roleplay.toUpperCase();

    var children = prompt('Do I have any kids?')
    var childrenUpper = children.toUpperCase();

    var cuteness = prompt('Is my son cute?')
    var cuteUpper = cuteness.toUpperCase();

    alert('Welcome to my about me' userName + '.')
    console.log('Current user is' + userName)

    //Video game question
    if(gamesUpper === 'yes' || gamesUpper === 'y'){
        alert('Nice job, I like to play video games.');
    } else if(gamesUpper === 'no' || gamesUpper === 'n'){
        alert('No way, I like to play video games, who wouldn\'t.');
    } else {
        alert('Did you know yes and no are the ways to answer?');
    }
    console.log(userName + 'answered' + gamesUpper)

    //Roleplay question
    if(roleplayUpper === 'yes' || roleplayUpper === 'y'){
        alert('Correct! I do have a lot of interest in RPGs.');
    } else if(roleplayUpper === 'no' || roleplayUpper === 'n'){
        alert('That\'s wrong. I have a ton of interest in RPGs. They are one of my favorite games.');
    } else{
        alert('Did you know yes and no are the ways to answer?');
    }
    console.log(userName + 'answered' + roleplayUpper)

    //Kid Question
    if(childrenUpper === 'yes' || childrenUpper === 'y'){
        alert('I do! A single kid.');
    } else if(childrenUpper === 'no' || childrenUpper === 'n'){
        alert('Sorry. I do have a kid.')
    } else{
        alert('Did you know yes and no are the ways to answer?');
    }
    console.log(userName + 'answered' + childrenUpper)

    //Cuteness Question
    if(cuteUpper === 'yes' || cuteUpper === 'y'){
        alert('He is extremely cute.');
    } else if(cuteUpper === 'no' || cuteUpper === 'n'){
        alert('How could you say no!?');
    } else{
        alert('Did you know yes and no are the ways to answer?');
    }
    console.log(userName + 'answered' + cuteUpper)