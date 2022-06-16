// VARIABLES
//..for dom elments
var startScreen = document.getElementById("start-screen");
var startBtn = document.getElementById("start-btn");
var quizScreen = document.getElementById("quiz-screen");
var question = document.getElementById("questions");
var choices = document.getElementById("choices");
var timeLeft = document.getElementById("Time");
var submitBtn = document.getElementById("submit");
var intials = document.getElementById("intials")

//...for quiz variables
// var timeLeft = 15;
// var currentQuestion = 0;
// var questions = [
//     {
//         text: "what does html stand for?",  
//         choices: ["hypertext markup language", "how to make logs", "hi their my lady", "hot tammel my loco"], 
//         correct: "hypertext markup language"
//     },
//     {
//         text: "what does css stand for?", 
//         choices: ["hypertext markup language", "cascading style sheets", "hi their my lady", "hot tammel my loco"], 
//         correct: "cascading style sheets"
//     },
// ]

//FUNCTIONS
//...to start the quiz
function startQuiz(){
    // console.log("quiz is starting")
    var startScreen = document.getElementById("pop-up-screen");
    startScreen.setAttribute("class","hide");
    // startScreen.classList.add("hide")

    // need to start the timer
timerId = setInterval(clockTick, 1000);
// starting time
timerId.textContent = time;
    
    //display a question
    getQuestion();
}

//...to display a question 
function getQuestion(){
    //question from array
    var currentQuestion = question[currentQuestionIndex];

    var title = document.getElementById("question-title");
    title.textContent = currentQuestion.title;

    //delete any old questions choices
    choices.innerHTML = "";

    //choices to loop over
    currentQuestion.choices.forEach(function(choice, i) {
        //buttons
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class","choice");
        choiceNode.setAttribute("value",choice);

        choiceNode.textContent = i + 1 + "." + choice;
        
        choiceNode.onclick = questionClick;

        //page display
        choices.appendChild(choiceNode);
    });
    }

    // //create an element for the question text
    // var questionElem = document.createElement("h2")
    // questionElem.innerText = questions[currentQuestion].text
    // quizScreen.appendChild(questionElem)
    // //loop over the choices and create a button for each one
    // questions[currentQuestion].choices.forEach((choice) => {
    //     var choiceElem = document.createElement("button");
    //     choiceElem.setAttribute("class","choice-btns");
    //     choiceElem.innerText = choice;
    //     quizScreen.appendChild(choiceElem);
    //     console.log(choice)
    //     // create elemnets for the choice text 
    //     //use inner text method to insert text element 
    //     //use appendchild 
    // })
// }


//EVENT LISTINERS
// //...for start button
// startBtn.addEventListener("click", startQuiz)