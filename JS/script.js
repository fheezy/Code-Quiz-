// VARIABLES
//..for dom elments
var startScreen = document.getElementById("start-screen")
var startBtn = document.getElementById("start-btn")
var quizScreen = document.getElementById("quiz-screen")

//...for quiz variables
var timeLeft = 15;
var currentQuestion = 0;
var questions = [
    {
        text: "what does html stand for?", 
        choices: ["hypertext markup language", "how to make logs", "hi their my lady", "hot tammel my loco"], 
        correct: "hypertext markup language"
    },
    {
        text: "what does css stand for?", 
        choices: ["hypertext markup language", "cascading style sheets", "hi their my lady", "hot tammel my loco"], 
        correct: "cascading style sheets"
    },
]

//FUNCTIONS
//...to start the quiz
function startQuiz(){
    console.log("quiz is starting")
    startScreen.classList.add("hide")
    // need to start the timer
    //display a question
    displayQuestion();
}

//...to display a question 
function displayQuestion(){
    //create an element for the question text
    var questionElem = document.createElement("h2")
    questionElem.innerText = questions[currentQuestion].text
    quizScreen.appendChild(questionElem)
    //loop over the choices and create a button for each one
    questions[currentQuestion].choices.forEach((choice) => {
        console.log(choice)
    })
}


//EVENT LISTINERS
//...for start button
startBtn.addEventListener("click", startQuiz)