  $(document).ready(function() {


	//Opening instructions alert
	alert ("You have 60 seconds to answer the following true or false statements. Good Luck!");
 	run();

 	//60 second timer
	var number = 60;
    var intervalId;
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function stop() {
      clearInterval(intervalId);
      intervalId = 0;
      RunOutSubmit();
      
    }

    
    function decrement() {
      number--;
      $("#show-number").html("Time remaining: " + "<h2>" + number + "</h2>");
      if (number === 0) {
        stop(); 
  
      };
      
    }
    
	
   
    var totalQuestions = 8;

//Time runs submit 
  function RunOutSubmit() {

    var correctAnswers = 0;

    var q1 = document.getElementById('q1');
      if(q1.selectedIndex == 2) {
        correctAnswers++;
   }

   var q2 = document.getElementById('q2');
      if(q2.selectedIndex == 2) {
        correctAnswers++;
   }

   var q3 = document.getElementById('q3');
      if(q3.selectedIndex == 1) {
        correctAnswers++;
   }

   var q4 = document.getElementById('q4');
      if(q4.selectedIndex == 2) {
        correctAnswers++;
   }

   var q5 = document.getElementById('q5');
      if(q5.selectedIndex == 1) {
        correctAnswers++;
   }

   var q6 = document.getElementById('q6');
      if(q6.selectedIndex == 1) {
        correctAnswers++;
   }

   var q7 = document.getElementById('q7');
      if(q7.selectedIndex == 1) {
        correctAnswers++;
   }

   var q8 = document.getElementById('q8');
      if(q8.selectedIndex == 2) {
        correctAnswers++;
   }

  alert ("Time's up! You got " + correctAnswers + " out of " + totalQuestions + " correct!");

  }


//Submit button function
	$("#SubmitButton").on("click", function () {
	
	var correctAnswers = 0;

    var q1 = document.getElementById('q1');
   		if(q1.selectedIndex == 2) {
      	correctAnswers++;
   }

   var q2 = document.getElementById('q2');
   		if(q2.selectedIndex == 2) {
      	correctAnswers++;
   }

   var q3 = document.getElementById('q3');
   		if(q3.selectedIndex == 1) {
      	correctAnswers++;
   }

   var q4 = document.getElementById('q4');
   		if(q4.selectedIndex == 2) {
      	correctAnswers++;
   }

   var q5 = document.getElementById('q5');
   		if(q5.selectedIndex == 1) {
      	correctAnswers++;
   }

   var q6 = document.getElementById('q6');
   		if(q6.selectedIndex == 1) {
      	correctAnswers++;
   }

   var q7 = document.getElementById('q7');
   		if(q7.selectedIndex == 1) {
      	correctAnswers++;
   }

   var q8 = document.getElementById('q8');
   		if(q8.selectedIndex == 2) {
      	correctAnswers++;
   }


        // ... we trigger an alert.
        alert ("You got " + correctAnswers + " out of " + totalQuestions + " correct!");
     
      
      });











 });