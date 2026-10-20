var buttonColors = ["green", "red", "yellow", "blue"];
var buttonPattern = [];
var level = 0;
var pause = true;
var step = 0;

$(document).on("keypress", function () {
  if (pause) {
    $("body").css("background-color", "darkslateblue");
    nextLevel();
    pause = false;
    console.log("Game Start!");
  }
});

function updateText() {
  $("h1").text("Level " + level);
}

function checkMatch(color) {
  if (color === buttonPattern[step]) {
    step++;
    console.log("Step: " + step + " level: " + level);
    if(step === buttonPattern.length){
      nextLevel();
    };
  } else {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    gameOver();
  }
}

function nextLevel() {
  step = 0;
  level++;
  updateText();
  pause = true;
  setTimeout(()=>nextSequence(), 500);
}


function nextSequence() {
  pause = false;
  var randomNum = Math.floor(Math.random() * 4);
  var randomCol = buttonColors[randomNum];
  buttonPattern.push(randomCol);
  playSound(randomCol);
  updateText();
  console.log(buttonPattern);
}

$(".btn").click(function () {
  if (!pause){
    var color = $(this).attr("id");
    pressButton(color);
    checkMatch(color);
  };
});

function pressButton(color) {
  playSound(color);
}

function playSound(color) {
  //Makes the button flash
  $("#" + color).fadeOut(200).fadeIn(200);
  console.log(color);
  
  //Makes the sound
  switch (color) {
    case "red":
      var audio = new Audio("sounds/red.mp3");
      audio.play();
      break;
    case "blue":
      var audio = new Audio("sounds/blue.mp3");
      audio.play();
      break;
      case "yellow":
        var audio = new Audio("sounds/yellow.mp3");
        audio.play();
        break;
        case "green":
          var audio = new Audio("sounds/green.mp3");
      audio.play();
      break;
      default:
        console.log(this);
        break;
      }
    }
    
    function gameOver() {
      $("h1").text("Game Over! you lasted " + level + " rounds! Press any key to restart!");
      $("body").css("background-color", "darkred")
      level = 0;
      step = 0;
      pause = true;
      buttonPattern = [];
    }