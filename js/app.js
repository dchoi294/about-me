'use strict';

let userName = prompt('What is your name?');
alert('Hello, ' + userName + '!');
console.log('Hello' + userName + '! It is time to answer my questions. You better get it right! Please answer by y/n or yes/no!');

let correctNumb = 0;
let wrongNumb = 0;
let noneAnswer = 0;

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
