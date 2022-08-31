var startButton = document.querySelector('#start_btn');
var quizContainer = document.querySelector("quiz-container");
var timeRemaining = document.querySelector("time-remaining");
var seconds = document.querySelector("#seconds");
var time = document.querySelector('#time');
var questionsDiv = document.querySelector('#questions');
var wrapper = document.querySelector('wrapper');

var index = 0;
var timer = 60;
var holdInterval = 0;
var penalty = 10;
var createUL = document.createElement('ul');
var timerCount;
var score = 0; 
var correct = false;  

var questions = [
   {
       question: "What is an array?",
       answer: "A group of items stored in a single memory location.",
       options: [
           "A sequence of steps that must be taken to perform a task.",
           "A group of items stored in a single memory location.",
           "A file containing machine language instructions that the computer can directly execute.",
           "An object-oriented language."
       ]
   },
   {
       question: "What kind of programming language is JavaScript?",
       answer: "Object-oriented",
       options: [
           "Object-based",
           "Object-oriented",
           "Procedural",
           "None of the above"
       ]
   },
   {
       question: 'What is the correct way to write a "closing script tag"?',
       answer: "</script>",
       options: [
           "<script>",
           "<end>",
           "</script>",
           "</end>"
       ]
   },
   {
       question: 'What must always occur after an "if" statement?',
       answer: "else {}",
       options: [
           "else {}",
           "or {}",
           "then {}",
           "next {}"
       ]
   },
];

// WHEN I click the start button


// THEN a timer starts and I am presented with a question
startButton.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            timer--;
            time.textContent = "Time: " + timer;

            if (timer <= 0) {
                clearInterval(holdInterval);
                gameOver();
                time.textContent = "Game Over";
            }
        }, 1000);
    }
    startGame(index);
});

function startGame(index) {
   questionsDiv.innerHTML = "";
   createUL.innerHTML = "";

   for (var i = 0; i < questions.length; i++) {
      var currentQuestion = questions[index].question;
      var choices = questions[index].options;
      questionsDiv.textContent = currentQuestion;
  }

  choices.forEach(function (items) {
   var listItem = document.createElement('li');
   listItem.textContent = items;
   questionsDiv.appendChild(createUL);
   createUL.appendChild(listItem);
   listItem.addEventListener('click', (validate));
})
}

function validate(event) {
   var element = event.target;

   if (element.matches('li')) {

      var createDiv = document.createElement('div');
      createDiv.setAttribute('id', 'createDiv');
   
      if (element.textContent == questions[index].answer) {
          score++;
          createDiv.textContent = 'Correct!';
      } else {
          timer = timer - penalty;
          createDiv.textContent = 'Incorrect!';
      }

}
index++;

if (index >= questions.length) {
    gameOver();
    createDiv.textContent = "Game Over! You got  " + score + "/" + questions.length + " correct!";
} else {
    startGame(index);
}
questionsDiv.appendChild(createDiv);

}

function gameOver() {
   questionsDiv.innerHTML = "";
   time.innerHTML = "";

   var createH1 = document.createElement('h1');
   createH1.setAttribute('id', 'createH1');
   createH1.textContent = 'Game Over!'

   questionsDiv.appendChild(createH1);

   var p = document.createElement("p");
   p.setAttribute('id', 'newP');

   questionsDiv.appendChild(p);

   if (timer >= 0) {
       var createP = document.createElement('p');
       clearInterval(holdInterval);
       p.textContent = "Your final score is: " + score;

       questionsDiv.appendChild(createP);
   }
}

// function startTimer() {
//    timer = setInterval(function() {
//       timerCount--;
//       timerElement.textContent = timerCount;
//       if (timerCount >= 0) {
//          if (!correct) {
//             timerCount -= 10; 
//          }
//       }
//       if(timerCount === 0) {
//          clearInterval(timer);
//          gameOver();
//       }
//    }, 1000); 
// }
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score