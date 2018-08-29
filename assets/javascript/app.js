//Trivia Game Javascript 

//jquery making the start button say something, have to make it start the timer
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
     // myQuestions.question0.correctAnswer//
     if question0Answer === myQuestions.question0.correctAnswer //this means answer is right, increase correct score or incorrect score ++
      
      console.log(question0Answer)
    })    ;
  });


//Have start button begin countdown (120 seconds) on click function (document.onkeyup)reference function

//Make variables for questions, answers and indicate correct answer (are these arrays??) objects
 myQuestions = {question0: {correctAnswer: "Trees"}, question1: {correctAnswer: "Dogs"}}  




//Keep track of number of correct/incorrect answers for player

// Game stops at 120 seconds

//Show player how many correct/incorrect answers they had

//Restart button should reload page and restart countdown (on click event)



//$("h2").on("click", function(event){
    
//})



