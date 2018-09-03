//Trivia Game Javascript 

//Restart button should reload page and restart countdown (on click event)
$(document).ready(function() {
  var counter = 120
  var timer 
  var wrongAnswers = ["Dandruff","Sunlight","Dentists","Chicken","Sheep",
                      "Lizards","Ophidiophia","Mysophobia","Arachnophobia",
                      "Excercise","Violins","Driving","Aaron Beck",
                      "Carl Jung","Carl Rogers","Philosophy","Wool Socks",
                      "Chewing Noises","Ombrophobia","Somniphobia","Turophobia",
                      "Gnomes","Ketchup","Cotton Fabric","10 seconds","8 seconds",
                      "15 seconds","Tax Season","Pogo Sticks","Vaccinations"]
  var myQuestions = {
    question0: "Trees",
    question1: "Dogs", 
    question2: "Coulrophobia",
    question3: "Nudity",
    question4: "Sigmund Freud",
    question5: "Parents-in-laws",
    question6: "Papaphobia", 
    question7: "No Mobile Phone Coverage",
    question8: "4 seconds",
    question9: "Beards",
  }  
  var correct = 0
  var incorrect = 0
//Have start button begin countdown (120 seconds) on click function (document.onkeyup)reference function

// Player has 120 seconds to play the game

//Keep track of number of correct/incorrect answers for player

//disable radio input buttons upon clicking, not working but I'm trying to figure it out!

  $(".question0").on("click", function(){
    $(".question0").not(this).prop("disabled", true);
  }); 

 /* var wrongAnswers = document.getElementById({[""]);
   
  wrongAnswers.classList.add("greenstyle");*/

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
/*Show player how many correct/incorrect answers they had 
I want to change the color of the answers to red/incorrect and green/correct after submit button is pressed
Maybe do a strikethrough of the incorrect answers too
(should this be a getElementById? I took all the id values out for my radio buttons for some reason.)*/

 


 

