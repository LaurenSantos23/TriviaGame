//Trivia Game Javascript 

//Restart button should reload page and restart countdown (on click event)
$(document).ready(function() {
  var counter = 120
  var timer 
  var myQuestions = {
    question0: "Trees",
    question1: "Dogs", 
    question2: "Coulrophobia",
    question3: "Nudity",
    question4: "Sigmund Freud",
    question5: "Papaphobia", 
    question7: "No Mobile Phone Coverage",
    question8: "4 seconds",
    question9: "Beards",
  }  
  var correct = 0
  var incorrect = 0
//Have start button begin countdown (120 seconds) on click function (document.onkeyup)reference function

// Player has 120 seconds to play the game

  function countDown() {
   // counter = counter -1;//
    counter--;
    $("#counterNumber").html(counter);
 
}


    $(".styled-start").on("click", function() {
     timer = window.setInterval(countDown, 1000);

    
    });
    $(".styled-submit").on("click", function(){
      clearInterval(timer)
      var question0Answer = $("input[name='question-0']:checked").val()
      myQuestions.question0.correctAnswer//
      if (question0Answer === myQuestions.question0) {//this means answer is right, increase correct score or incorrect score ++

        console.log(question0Answer)
      }
    })    ;
  });


//Keep track of number of correct/incorrect answers for player


//Show player how many correct/incorrect answers they had





