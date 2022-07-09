// VARIABLES
//DOM Variables 
var startScreen = document.getElementById("start-screen");
var startButton = document.getElementById("start-btn");
var questionScreen = document.getElementById("question-screen");
var questionTitle = document.getElementById("question-screen-title");
var questionChoices = document.getElementById("question-screen-choices");
var timeLeft = document.getElementById("time");
var initialsButton = document.getElementById("initials-button");
var initialsText = document.getElementById("initials-text");
var feedback = document.getElementById("feedback");

 //Quiz Variables
 var currentQuestion = 0;
 var time = questionList.length * 15;
 var timerId;


//FUNCTIONS
//Entry point to begin looping through quiz questions
function startQuiz(){
   
    // hide instructions and show questions
    startScreen.setAttribute("class","hide");
    questionScreen.classList.remove("hide");

    // start clock tick function and execute every 1 second
    timerId = setInterval(clockTick, 1000);
    timerId.textContent = time;
    
    //display first question
    getQuestion();

}

//...to display a question 
function getQuestion(){
    //question from array
    var currentQuestion = questionList[currentQuestionIndex];

    questionTitle.textContent = currentQuestion.title;

    //delete any old questions choices
    questionChoices.innerHTML = "";

    //choices to loop over
    currentQuestion.choices.forEach(function(choice, i) {
       
	//buttons
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class","choice");
        choiceNode.setAttribute("value",choice);

        choiceNode.textContent = i + 1 + "." + choice;
        
        choiceNode.onclick = questionClick;

        //page display
        questionChoices.appendChild(choiceNode);
    });
    }

//if guessed wrong
function questionClick() {
    if(this.value !== questionList[currentQuestionIndex].answer) {
        //time penalized by 20
        time -= 20;

        if (time < 0){
            time = 0;
        }
        //display time & if its correct or wrong
        timeLeft.textContent = time;
        feedback.textContent = "WRONG";
        feedback.style.color = "red";
        feedback.style.fontSize = "350%";
    } else {
        feedback.textContent = "CORRECT";
        feedback.style.color = "green";
        feedback.style.fontSize = "350%";
    }
    // feedback flash
    feedback.setAttribute("class","feedback");
    setTimeout(function(){
        feedback.setAttribute("class","feedback hide");
    }, 1000);

    // Questions after next
    currentQuestionIndex++;

   // timer check
   if (currentQuestionIndex === questionList.length) {
       quizEnd();
   } else {
       getQuestion();
   }
}

function quizEnd() {
    clearInterval(timerId)

    // show the end screen
    var lastScreen = document.getElementById("last-screen");
    lastScreen.removeAttribute("class");

    //final score
    var finalScore = document.getElementById("final-score");
    finalScore.textContent = time;

    //question section(hide)
    questionScreen.setAttribute("class", "hide");
}

function saveHighscore() {

    console.log("saveHighscore()");

    console.log(localStorage);

    var initials = initialsText.value.trim();
    if (initials.length == 2 || initials.length == 3) {
	
	//saved scores from local storage
        var highscoresString = localStorage.getItem("highscores") || "[]";
        var highscores = JSON.parse(highscoresString || "[]");
        console.log(highscoresString);
        console.log(highscores);

        //new score format
        var newScore = {
            score: time,
            initials: initials
        };
        console.log(newScore);

        //storage
	    highscores.push(newScore);
        var highscoresString = JSON.stringify(highscores);
        console.log(highscoresString);
        console.log(highscores);
        window.localStorage.setItem("highscores",JSON.stringify(highscores));

        // redirected to score sheet
        window.location.href = "score.html";
    }
}

function clockTick() {
    time--;
    timeLeft.textContent = time;

    //user ran out of time
    if (time <= 0) {
        quizEnd();
      }
}

//intials 
// startBtn.onclick = saveHighscore;

// --- EVENT LISTENERS --- //
startButton.onclick = startQuiz;
initialsButton.onclick = saveHighscore;
