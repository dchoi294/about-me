'use strict';

//------------------------------------------------------------Lab 2

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
    console.log('You got it right!');
    correctNumb++;
  } else if(favColor === 'no' || favColor === 'n'){
    alert('You are wrong, my favorite color is black');
    console.log('You are wrong, my favorite color is black');
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
    console.log('Wrong answer!');
    wrongNumb++;
  } else {
    noneAnswer++;
  }
}

function question_3(){
  let guessAge = prompt('Am I over 25?').toLowerCase();
  if(guessAge === 'yes' || guessAge === 'y') {
    alert('Shhhh, do not tell anyone else!');
    console.log('Shhhh, do not tell anyone else!');
    correctNumb++;
  } else if(guessAge === 'no' || guessAge === 'n'){
    alert('Wrong!!!');
    console.log('Wrong!!!');
    wrongNumb++;
  } else {
    noneAnswer++;
  }
}

function question_4(){
  let guessMovie = prompt('Do I love LotR?!').toLowerCase();
  if(guessMovie === 'yes' || guessMovie === 'y') {
    alert('How did you get it right?! Awesome! I love LotR series!');
    console.log('How did you get it right?! Awesome! I love LotR series!');
    correctNumb++;
  } else if(guessMovie === 'no' || guessMovie === 'n'){
    alert('No, I fell in love with LotR series!!');
    console.log('No, I fell in love with LotR series!!');
    wrongNumb++;
  } else {
    noneAnswer++;
  }
}

function question_5(){
  let guessPet = prompt('Do I own a pet right now?').toLowerCase();
  if(guessPet === 'no' || guessPet === 'n') {
    alert('Yeah, unluckily, I do not have a pet right now.');
    console.log('Yeah, unluckily, I do not have a pet right now.');
    correctNumb++;
  } else if(guessPet === 'yes' || guessPet === 'y'){
    alert('No, I do not own a pet.');
    console.log('No, I do not own a pet.');
    wrongNumb++;
  } else {
    noneAnswer++;
  }
}


////-----------------------------------------------------------------Lab2


let guessNumb = prompt('Guess my favorite number! The hint is the number is between 1 to 100!');
let count = 1;
let countDown = 4;

while(countDown > 0) {
  if(guessNumb === 22){
    alert('You got it right!! It took ' + count + ' attempts to get the answer!');
    console.log('You got it right!! It took ' + count + ' attempts to get the answer!');
    countDown = 0;
  }
  else if(guessNumb >= 23) {
    guessNumb = prompt('Your number is too high! Guess again! You got ' + countDown + ' times left to guess!');
    console.log('Your number is too high! Guess again! You got ' + countDown + ' times left to guess!');
    count++;
    countDown--;
  } else if(guessNumb <= 21) {
    guessNumb = prompt('Your number is too low! Guess again! You got ' + countDown + ' times left to guess!');
    console.log('Your number is too low! Guess again! You got ' + countDown + ' times left to guess!');
    count++;
    countDown--;
  } else if(countDown === 1) {
    if(guessNumb >= 23){
      guessNumb = prompt('You number is too high! And you got your last chance. Ready to give your last shot!?');
      console.log('You got your last chance. Ready to give your last shot!?');
    } else if(guessNumb <= 21) {
      guessNumb = prompt('Your number is too low! You got your last chance. Ready to give your last shot!?');
      console.log('You got your last chance. Ready to give your last shot!?');
    }
    countDown--;
  } else {
    guessNumb = prompt('Guess again! You got ' + countDown + ' times left to guess!');
    console.log('Guess again! You got ' + countDown + ' times left to guess!');
    count++;
    countDown--;
  }
}

if(countDown === 0){
  alert('You had 4 attempts and still got wrong! It was 22.');
  console.log('You had 4 attempts and still got wrong! It was 22.');
}

let answersFood = ['chicken',' pizza',' pho'];
let userFood = prompt('Guess one of my top 3 favorite food!').toLowerCase();
let boolean = false;

for (let i = 0; i < answersFood.length; i++) {
  if(userFood === answersFood[i]) {
    alert('You got it right! And here are my top 3 favorite food were ' + answersFood);
    boolean = true;
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


////    Lab 2

if(count === 0) {
  alert('Wow! You got it right at once!');
  console.log('Wow! You got it right at once!');
} else if(count !== 0) {
  alert('You got it right! You guessed ' + count + ' times. Just letting you know.');
  console.log('You got it right! You guessed ' + count + ' times. Just letting you know.');
} else if(countDown === 4) {
  alert('You have used all of your chances to guess my favorite number! You will never know my favorite number is 2!!');
  console.log('You have used all of your chances to guess my favorite number! You will never know my favorite number is 2!!');
}



if(correctNumb === 5) {
  alert('Amazing, ' + userName + '! You got all five questions about me right! You know about me so well.');
  console.log('Amazing, ' + userName + '! You got it all right! You know about me so well.');
} else if(wrongNumb === 5) {
  alert('Woah, ' + userName + '! You got it all five questions about me wrong, but it is okay, we got plenty of time to know each other!');
  console.log('Woah, ' + userName + '! you got it all wrong, but it is okay, we got plenty of time to know each other!');
} else if(correctNumb <= 4 && noneAnswer === 0){
  alert(userName + 'you answered ' + correctNumb + ' question correct, and ' + wrongNumb + ' wrong.');
  console.log(userName + 'you answered ' + correctNumb + ' question correct, and ' + wrongNumb + ' wrong.');
} else {
  alert(userName + 'you answered ' + correctNumb + ' question correct, ' + wrongNumb + ' wrong, and did not answer correctly ' + noneAnswer + ' questions!');
  console.log(userName + 'you answered ' + correctNumb + ' question correct, ' + wrongNumb + ' wrong, and did not answer correctly ' + noneAnswer + ' questions!');
}
