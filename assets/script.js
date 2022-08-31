// Declared constants
const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');

 
// Declared variables to be used in 'timer' function
var timerContainerElement = document.getElementById('timer-container');
var remainingTime = 60;


// Start button listens for click to execute 'start' function
startButton.addEventListener('click', renderQuestion);
// Begins timer function and displays question 
// let shuffledQuestions, currentQuestionIndex;
// function start() {
//     startButton.classList.add('hide');
//     timer();
//     shuffledQuestions = questions.sort(() => Math.random() - .5);
//     currentQuestionIndex = 0;
//     questionContainer.classList.remove('hide');
//     nextQuestion();

// }
// // Starts game timer displaying it on the screen as the time decrements 
function timer() {
    var i = 0; 
   if (i == 0) {
       i = setInterval(function() {
           remainingTime--;
           timerContainerElement.textContent = remainingTime + " seconds remaining";

           if (remainingTime <= 0) {
               clearInterval(i);
               endGame();
               timerContainerElement.textContent = "0 seconds remaining";
           }
       }, 1000);
   }     
}
// // Occurs at the end of the game, allows user to save Initials on leaderboard
// function endGame() {
//     questionContainer.classList.add('hide');
// }

// function nextQuestion() {
//     reset();
//     showQuestion(shuffledQuestions[currentQuestionIndex])

// }

// // function showQuestion(question){
// //      questionElement.innerText = question.question;
// //      question.answers.forEach(answer => {
// //          const button = document.createElement('button');
// //          button.innerText = answer.text;
// //          button.classList.add('btn');
// //          if (answers.correct = true) {
// //             nextQuestion();
// //          } else {
         
// //          }
// //      })
// // }

// function answer(e) {
//     const selectedButton = e.target;
//     const correct = selectedButton.dataset.correct;
//     setStatusClass(document.body, correct);
//     Array.from(answerButtonsElement.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct);
//     })
// }

// function setStatusClass(element, correct) {
//     clearStatusClass(element);
//     if (correct) {
//         element.classList.add('correct');
//     } else {
//         element.classList.add('incorrect');
//         }
// }

// function clearStatusClass(element) {
//     element.classList.remove('correct');
//     element.classList.remove('incorrect');
// }

let questions = [
    {
        question: 'What is an Array?',
        choiceA: 'A sequence of steps that must be taken to perform a task.',
        choiceB: 'A group of items stored in a single memory location.',
        choiceC: 'A file containing machine language instructions that the computer can directly execute.',
        choiceD: 'An object-oriented language.',
        correct: 'B'
    },
    {
        question: 'What kind of programming language is JavaScript?',
        choiceA: 'Object-based',
        choiceB: 'Object-oriented',
        choiceC: 'Procedural',
        choiceD: 'None of the above',
        correct: 'B'
    },
    {
        question: 'What is the correct way to write a "closing script tag"?',
        choiceA: '<script>',
        choiceB: '<end>',
        choiceC: '</script>',
        choiceD: '</end>',
        correct: 'C'
    },
    {
        question: 'What must always occur after an "if" statement?',
        choiceA: 'else {}',
        choiceB: 'or {}',
        choiceC: 'then {}',
        choiceD: 'next {}',
        correct: 'A'
    }
]
array = [a, b, c, d];
let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0; 

function renderQuestion(){
    timer();
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

function progress() {
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}
function correct() {
    document.querySelector("answer-status").textContent = "Correct!";
}
function wrong() {
    document.querySelector("answer-status").textContent = "Wrong!";
}

// function reset() {
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild);
//     }
// }