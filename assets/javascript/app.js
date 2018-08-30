//Trivia Game Javascript 

//jquery making the start button say something, have to make it start the timer

//Restart button should reload page and restart countdown (on click event)
$(document).ready(function() {
  var counter = 120
  var timer 
  var myQuestions
  var correct = 0
  var incorrect = 0

  function countDown() {
   // counter = counter -1;//
    counter--;
    $("#counterNumber").html(counter);
  // Your code here
}


    $(".styled-start").on("click", function() {
     timer = window.setInterval(countDown, 1000);

    
    });
    $(".styled-submit").on("click", function(){
      clearInterval(timer)
      var question0Answer = $("input[name='question-0']:checked").val()
      myQuestions.question0.correctAnswer//
      if question0Answer === myQuestions.question0.correctAnswer //this means answer is right, increase correct score or incorrect score ++

        console.log(question0Answer)
    })    ;
  });


//Have start button begin countdown (120 seconds) on click function (document.onkeyup)reference function

//Make variables for questions, answers and indicate correct answer/ objects= key/value pairs
 myQuestions = {question0: {correctAnswer: "Trees"},
                question1: {correctAnswer: "Dogs"}, 
                question2: {correctAnswer: "Coulrophobia"},
                question3: {correctAnswer:"Nudity"},
                question4: {correctAnswer:"Sigmund Freud"},
                question5: {correctAnswer:"Parents-in-laws"},
                question6: {correctAnswer:"Papaphobia"}, 
                question7: {correctAnswer: "No Mobile Phone Coverage"},
                question8: {correctAnswer: "4 seconds"},
                question9: {correctAnswer: "Beards"},
              }  




//Keep track of number of correct/incorrect answers for player

// Player has 120 seconds to play the game

//Show player how many correct/incorrect answers they had





//$("h2").on("click", function(event){
    
//})



