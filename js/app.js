'use strict';

let userName = prompt('What is your name?');
alert('Hello, ' + userName + '!');
console.log('Hello' + userName + '! It is time to answer my questions. You better get it right! Please answer by y/n or yes/no!');

let correctNumb = 0;
let wrongNumb = 0;
let noneAnswer = 0;

question_1();
question_2();
question_3();
question_4();
question_5();
question_6();
question_7();


function question_1(){
  let favColor = prompt('Do I like color blue?').toLowerCase();
  if(favColor === 'yes' || favColor === 'y') {
    alert('You got it right!');
    correctNumb++;
  } else if(favColor === 'no' || favColor === 'n'){
    alert('You are wrong, my favorite color is black');
    wrongNumb++;
  } else {
    noneAnswer++;
  }
}


function question_2(){
  let guessCity = prompt('Do I live in seattle?').toLowerCase();
  if(guessCity === 'yes' || guessCity === 'y'){
    alert('Wow, you got it right!');
    correctNumb++;
  } else if(guessCity === 'no' || guessCity === 'n'){
    alert('Wrong answer!');
    wrongNumb++;
  } else {
    noneAnswer++;
  }
}

function question_3(){
  let guessAge = prompt('Am I over 25?').toLowerCase();
  if(guessAge === 'yes' || guessAge === 'y') {
    alert('Shhhh, do not tell anyone else!');
    correctNumb++;
  } else if(guessAge === 'no' || guessAge === 'n'){
    alert('Wrong!!!');
    wrongNumb++;
  } else {
    noneAnswer++;
  }
}

function question_4(){
  let guessMovie = prompt('Do I love LotR?!').toLowerCase();
  if(guessMovie === 'yes' || guessMovie === 'y') {
    alert('How did you get it right?! Awesome! I love LotR series!');
    correctNumb++;
  } else if(guessMovie === 'no' || guessMovie === 'n'){
    alert('No, I fell in love with LotR series!!');
    wrongNumb++;
  } else {
    noneAnswer++;
  }
}

function question_5(){
  let guessPet = prompt('Do I own a pet right now?').toLowerCase();
  if(guessPet === 'no' || guessPet === 'n') {
    alert('Yeah, unluckily, I do not have a pet right now.');
    correctNumb++;
  } else if(guessPet === 'yes' || guessPet === 'y'){
    alert('No, I do not own a pet.');
    wrongNumb++;
  } else {
    noneAnswer++;
  }
}

function question_6(){
  let guessNumb = prompt('Guess my favorite number! The hint is the number is between 1 to 100!');
  let count = 1;
  let countDown = 3;

  while(countDown > 0) {
    if(guessNumb === '22') {
      alert(`You got it right!! It took ${count} attempts to get the answer!`);
      console.log(`You got it right!! It took ${count} attempts to get the answer!`);
      countDown = -1;
      correctNumb++;
    } else if(guessNumb >= 23) {
      guessNumb = prompt(`Your number is too high! Guess again! You got ${countDown} times left to guess!`);
      console.log(`Your number is too high! Guess again! You got ${countDown} times left to guess!`);
      count++;
      countDown--;
    } else if(guessNumb <= 21) {
      guessNumb = prompt(`Your number is too low! Guess again! You got ${countDown} times left to guess!`);
      console.log(`Your number is too low! Guess again! You got ${countDown} times left to guess!`);
      count++;
      countDown--;
    } else if(countDown === 1) {
      if(guessNumb >= 23){
        guessNumb = prompt('You number is too high! And you got your last chance. Ready to give your last shot!?');
        console.log('You number is too high! And you got your last chance. Ready to give your last shot!?');
      } else if(guessNumb <= 21) {
        guessNumb = prompt('You number is too high! And you got your last chance. Ready to give your last shot!?');
        console.log('You number is too high! And you got your last chance. Ready to give your last shot!?');
      }
      countDown--;
    } else {
      guessNumb = prompt(`Guess again! You got ${countDown} times left to guess!`);
      console.log(`Guess again! You got ${countDown} times left to guess!`);
      count++;
      countDown--;
    }
  }

  if(countDown === 0){
    alert('You have used all of your chances to guess my favorite number! You will never know my favorite number is 22!!');
    console.log('You have used all of your chances to guess my favorite number! You will never know my favorite number is 22!!');
    wrongNumb++;
  }
}


function question_7() {
  let answersFood = ['chicken',' pizza',' pho'];
  let userFood = prompt('Guess one of my top 3 favorite food!').toLowerCase();
  let boolean = false;

  for (let i = 0; i < answersFood.length; i++) {
    if(userFood === answersFood[i]) {
      alert(`You got it right! And here are my top 3 favorite food were ${answersFood}`);
      boolean = true;
      correctNumb++;
    }
  }
  if(boolean === false) {
    for(let count = 7; count > 0; count--){
      userFood = prompt('Wrong food! You got ' + (count-1) + ' more chance to guess!');
      for (let i = 0; i < answersFood.length; i++) {
        if(userFood === answersFood[i]) {
          alert('You got it right! And here are my top 3 favorite food were ' + answersFood);
          count = 0;
        }
      }
    }
  }

}


if(correctNumb === 7) {
  alert(`Amazing, ${userName}! You got all ${correctNumb} questions about me right! You know about me so well.`);
} else if(wrongNumb === 7) {
  alert(`Woah, ${userName}! You got all questions about me wrong, but it is okay, we got plenty of time to know each other!`);
} else if(correctNumb <= 6 && noneAnswer === 0){
  alert(`${userName}, you answered ${correctNumb} questions correct, and ${wrongNumb} wrong.`);
} else {
  alert(userName + 'you answered ' + correctNumb + ' question correct, ' + wrongNumb + ' wrong, and did not answer correctly ' + noneAnswer + ' questions!');
}
