//highscore sheet, all functions will be stored here over the highscore so i can pull it with other files just by tagging the file

function printHighscores() {

  console.log("printHighscore()");

        // either get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")||"[]");
    console.log(highscores);
  
    // sort highscores 
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      // li tag for each high score
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
  
      // display on page
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
  }
  
function clearHighscores() {
 window.localStorage.removeItem("highscores");
 window.location.reload();
}
  
// attach clear event to button
document.getElementById("clear").onclick = clearHighscores;  
// run function when page loads
printHighscores();
  
