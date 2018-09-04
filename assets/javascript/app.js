//Trivia Game Javascript 

//Restart button should reload page and restart countdown (on click event)
$(document).ready(function() {
  var counter = 120
  var timer 
  var wrongAnswers = ["Dandruff","Sunlight","Dentists","Chickens","Sheep",
                      "Lizards","Ophidiophobia","Mysophobia","Arachnophobia",
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

// Player has 120 seconds to play the game

//disable radio input buttons upon clicking, not working but I'm trying to figure it out!

  /*$(".styled-submit").on("click", function(){
    $(".question0").not(this).prop("disabled", true);
  }); */


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


      // loop through all of the quesiton zero answers and check if answer is in wrong answers array and make it red or else make the word green
      $("input[name='question-0']").each(function(){
        var answer = $(this)
        if( wrongAnswers.includes(answer.val())){
         answer.closest("label").css({color: "red"})  
      
        } else {
         answer.closest("label").css({color: "green"})
        } 

      })
      $("input[name='question-1']").each(function(){
        var answer = $(this)
        if( wrongAnswers.includes(answer.val())){
         answer.closest("label").css({color: "red"})  
      
        } else {
         answer.closest("label").css({color: "green"})
        } 

      })
      $("input[name='question-2']").each(function(){
        var answer = $(this)
        if( wrongAnswers.includes(answer.val())){
         answer.closest("label").css({color: "red"})  
      
        } else {
         answer.closest("label").css({color: "green"})
        } 

      })
      $("input[name='question-3']").each(function(){
        var answer = $(this)
        if( wrongAnswers.includes(answer.val())){
         answer.closest("label").css({color: "red"})  
      
        } else {
         answer.closest("label").css({color: "green"})
        } 

      })
      $("input[name='question-4']").each(function(){
        var answer = $(this)
        if( wrongAnswers.includes(answer.val())){
         answer.closest("label").css({color: "red"})  
      
        } else {
         answer.closest("label").css({color: "green"})
        } 

      })
      $("input[name='question-5']").each(function(){
        var answer = $(this)
        if( wrongAnswers.includes(answer.val())){
         answer.closest("label").css({color: "red"})  
      
        } else {
         answer.closest("label").css({color: "green"})
        } 

      })
      $("input[name='question-6']").each(function(){
        var answer = $(this)
        if( wrongAnswers.includes(answer.val())){
         answer.closest("label").css({color: "red"})  
      
        } else {
         answer.closest("label").css({color: "green"})
        } 

      })
      $("input[name='question-7']").each(function(){
        var answer = $(this)
        if( wrongAnswers.includes(answer.val())){
         answer.closest("label").css({color: "red"})  
      
        } else {
         answer.closest("label").css({color: "green"})
        } 

      })
      $("input[name='question-8']").each(function(){
        var answer = $(this)
        if( wrongAnswers.includes(answer.val())){
         answer.closest("label").css({color: "red"})  
      
        } else {
         answer.closest("label").css({color: "green"})
        } 

      })
      $("input[name='question-9']").each(function(){
        var answer = $(this)
        if( wrongAnswers.includes(answer.val())){
         answer.closest("label").css({color: "red"})  
      
        } else {
         answer.closest("label").css({color: "green"})
        } 

      })
     
    })    ;
  });



 


 

