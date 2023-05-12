const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)

const questionElement = document.getElementById("question");

const inputElement = document.getElementById("input");

const formElement = document.getElementById("form")

const scoreElement = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreElement.innerText = 'score: ' + score

questionElement.innerText = 'What is '+ num1 + ' multiplied by ' + num2 + '?'

const correctAns = num1 * num2;

formElement.addEventListener("submit", ()=>{
    const userAns = +inputElement.value
    if(userAns === correctAns){
        score++;
        updateLocalStorage()
    } else {
        score--;
        updateLocalStorage()
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}