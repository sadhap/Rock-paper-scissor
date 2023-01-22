'use strict';
//document value............

const player1= document.getElementById('rps-1');//score : 
const player2 = document.getElementById('rps-2');//score : 
const current0El = document.getElementById('current--0');//current score 
const current1El = document.getElementById('current--1');
const rock_1 = document.getElementById('rock');
const paper_2 = document.getElementById('paper');
const scissor_3 = document.getElementById('scissor');
const btn1 = document.getElementById('rock-1');
const btn2 = document.getElementById('paper-2');
const btn3 = document.getElementById("scissor-3");
const NumOfImg = document.getElementById('NumOfImg');
const result_div = document.querySelector('.result');
const current = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const name1El = document.getElementById('name--1');
const name2El = document.getElementById('name--2');
const winner1 =document.getElementById('player--0');
const winner2 = document.getElementById('player--1');

//global variable..............
let userScore = 0;
let computerScore = 0;

//initial value...............
const init = function(){
current0El.innerHTML= 0;
current1El.innerHTML= 0;
player1.innerHTML= "START😋";
player2.innerHTML= "START😋";
winner1.classList.remove("player--active");
winner1.classList.remove('player--active');
winner2.classList.remove('player--active1');
winner1.classList.remove('draw');
winner2.classList.remove('draw');
result_div.innerHTML = "⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕";
};
///function...........
function myFunction() {
    let person = prompt("Please enter your name");
    let nme  = person.length;
    if (nme) {
        result_div.innerText = `${person}😉lets start the game`;
    }else{
        result_div.innerText = "☹please enter your name first";
    };
  };

document.getElementById("restart").addEventListener('click', () => {window.location.reload()});

// btn1.addEventListener('click',()=>{
//    const  NumOfImg = 1;
// player1.innerText="ROCK✊";
// });


//randomvalue for computer..........
function randomComputer(){
    const choices = ['rock👊', 'paper✋', 'scissor🖖'];
    const randomNumber =  Math.trunc(Math.random()*3);
    console.log(choices);
    console.log(randomNumber);
    // paper_2.innerHTML = choices;
    player2.innerHTML = choices[randomNumber];
   return choices[randomNumber];
 
   
};
//function
function game(select){
    //if(0<10 && 0<10) = true;
    player1.innerText = select;
    if(userScore < 10 && computerScore < 10){
        // result_div.innerHTML = computerValue;
        result_div.innerHTML = '';
        const computerValue = randomComputer();
        // result_div.innerHTML = `hiiiii`;
        switch (select + computerValue) {
            case 'paper✋rock👊':
            case 'rock👊scissor🖖':
            case 'scissor🖖paper✋':
                userWin();
                break;
            case 'rock👊paper✋':
            case 'scissor🖖rock👊':
            case 'paper✋scissor🖖':
                computerWin();
                break;
            case 'rock👊rock👊':
            case 'scissor🖖scissor🖖':
            case 'paper✋paper✋':
                draw();
                break;
        }
    }
}

function userWin(){
    // let winName = person;
userScore++;
current.innerText = userScore;
    console.log("hii da");
    winner1.classList.remove('draw');
    winner2.classList.remove('draw');
    result_div.innerHTML = "⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕";
    if(userScore == 10) {
       
        // name1El.innerText = player2 ===0 ? "😍Player 1":"😭player 1";
        name1El.innerText = result_div === 0 ? "😭player 2":"😍player 1";
        name2El.innerText = result_div === 0 ? "😍player 1":"😭player 2";
        winner1.classList.add("player--active");
        result_div.innerText = "YOU WON THE MATCH😍";
    }
 
}
function computerWin() {
    computerScore++;
   current1.innerText = computerScore;
   winner1.classList.remove('draw');
winner2.classList.remove('draw');
result_div.innerHTML = "⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕⭕";
    if(computerScore == 10) {
        result_div.innerHTML= " oh! computter won the match";
        name2El.innerText = result_div === 0 ? "😭player 2":"😍player 2";
        name1El.innerText = result_div === 0 ? "😍player 1":"😭player 1";
        winner2.classList.add("player--active1");
    }
}
// user  + computer = same value------->draw match

function draw() {
result_div.innerHTML = "Draw Game😵";
winner1.classList.add("draw");
winner2.classList.add('draw');
}
btn1.addEventListener('click', () => game('rock👊'));
btn2.addEventListener('click', () => game('paper✋'));
btn3.addEventListener('click', () => game('scissor🖖'));
document.getElementById("clear").addEventListener('click', function() {
    current.innerText = 0;
    current1.innerText = 0;
 });
init();