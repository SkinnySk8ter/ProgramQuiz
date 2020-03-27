var questions = [ // loop here for all the questions --line 40
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"], // create element for each one of the choices (create listener)
      answer: "alerts" // user clicks button, check to see if it matches answer (hint: use event.target in your listener)
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },

    {
      title: "Which is used mainly for debugging purposes?",
      choices: ["cdn", "console.log", "bootstrap", "array"] ,
      answer: "console.log" 
    },
    
    {
       title: "How do you create new folder from your terminal?",
       choices: ["pwd", "rm", "cd", "mkdir"] ,
       answer: "mkdir"

    },

    {
        title: "How can you access the length of an array?",
        choices: [".everything", ".allaccess", ".length", ".all"],
        answer: ".length"
    }]

    let el = document.getElementById("questionPromptOne");
    let eltwo = document.getElementById("questionPromptTwo");
    let elthree = document.getElementById("questionPromptThree");
    let elfour = document.getElementById("questionPromptFour");
    let elfive = document.getElementById("questionPromptFive");
    
    var button = document.getElementById("startbtn");
    var clock = document.querySelector("timer");
    var howmany = document.querySelector("counter")
    var actualquiz = document.getElementsByName("questions")

    
    function quizstart() {

      alert("Welcome to a quiz! (ta-da!!) You will be tasked with answering the next set of questions to the best of your ability but keep an eye on the time! Answer incorrectly and the timer goes down even faster!! Click Ok to get started!")
  }
  quizstart();

  //bit of repeated code coming up but it works for now!!!!

  
function questOne() {
        
        el.innerHTML = questions[0].title;
        let abtn = document.getElementById("AAnswer");
        let bbtn = document.getElementById("BAnswer");
        let Cbtn = document.getElementById("CAnswer");
        let Dbtn = document.getElementById("DAnswer");

        abtn.innerHTML = questions[0].choices[0];
        bbtn.innerHTML = questions[0].choices[1];
        Cbtn.innerHTML = questions[0].choices[2];
        Dbtn.innerHTML = questions[0].choices[3];
        
      };
      questOne();

      function questTwo() {
        eltwo.innerHTML = questions[1].title;
        let abtn = document.getElementById("AAnswer2");
        let bbtn = document.getElementById("BAnswer2");
        let Cbtn = document.getElementById("CAnswer2");
        let Dbtn = document.getElementById("DAnswer2");

        abtn.innerHTML = questions[1].choices[0];
        bbtn.innerHTML = questions[1].choices[1];
        Cbtn.innerHTML = questions[1].choices[2];
        Dbtn.innerHTML = questions[1].choices[3];


      }
      questTwo();

      function questThree() {
        elthree.innerHTML = questions[2].title;
        let abtn = document.getElementById("AAnswer3");
        let bbtn = document.getElementById("BAnswer3");
        let Cbtn = document.getElementById("CAnswer3");
        let Dbtn = document.getElementById("DAnswer3");

        abtn.innerHTML = questions[2].choices[0];
        bbtn.innerHTML = questions[2].choices[1];
        Cbtn.innerHTML = questions[2].choices[2];
        Dbtn.innerHTML = questions[2].choices[3];


      }
      questThree();


      function questFour() {
        elfour.innerHTML = questions[3].title;
        let abtn = document.getElementById("AAnswer4");
        let bbtn = document.getElementById("BAnswer4");
        let Cbtn = document.getElementById("CAnswer4");
        let Dbtn = document.getElementById("DAnswer4");

        abtn.innerHTML = questions[3].choices[0];
        bbtn.innerHTML = questions[3].choices[1];
        Cbtn.innerHTML = questions[3].choices[2];
        Dbtn.innerHTML = questions[3].choices[3];


      }
      questFour();

      function questfive() {
        elfive.innerHTML = questions[4].title;
        let abtn = document.getElementById("AAnswer5");
        let bbtn = document.getElementById("BAnswer5");
        let Cbtn = document.getElementById("CAnswer5");
        let Dbtn = document.getElementById("DAnswer5");

        abtn.innerHTML = questions[4].choices[0];
        bbtn.innerHTML = questions[4].choices[1];
        Cbtn.innerHTML = questions[4].choices[2];
        Dbtn.innerHTML = questions[4].choices[3];


      }
      questfive();

      let timeEl = document.querySelector("timer");
      let mainEl = document.getElementById("main");    
      let secondsLeft = 75;
      
      function setTime() {
        let timerInterval = setInterval(function() {
          secondsLeft--;
          document.getElementById("timer").innerHTML = secondsLeft + " seconds left till GAME OVER";
      
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
          }
      
        }, 1500);
      }
      setTime();
      function sendMessage() {
          alert("TIMES UP!!")
      }      

      //this function is showing the final results after the user has taken the quiz....need to change the variables.(edited-variables should work)
// function showFinalResults() {
//   openpopup();
//  document.getElementById("container").innerHTML = resultstable + " out of " + questions.length + " questions, " + Math.round(resultstable / questions.length * 100) + "%";







        
        
        
        


        


var actualquiz = document.getElementById("thequiz");

// everything from here was taken from a different webpage to understand the core concept. main question of how to pull from an array to appear on html dom still isnt working.


// function lequiz(){

// for ( var i = 0 ; i < questions.length; i++){
//  populateQuestion(i);
//  i++;

// };
// lequiz();
// function populateQuestion(qNum) {
//     var individualQuestion = allQuestions[i];
//     questionTitle.innerText = individualQuestion.question;

//     selectionList.innerHTML = ""; //reset choices list
//     for(key in individualQuestion.choices){
//         var radioBtnName = "question"+i+"_choice";
//         var choiceText = individualQuestion.choices[key];
//         selectionList.appendChild(createLi(radioBtnName,choiceText));
//     }
// }
// function createLi(name, choiceText) {
//         var e = document.createElement('li');
//         var radioHtml = '<input type="radio" name="' + name + '"';    
//         radioHtml += '/>';
//         radioHtml += choiceText;        
//         e.innerHTML = radioHtml;        
//         return e;
//     }



    
    
    
    
    
    
    
    
    
    
    
    //   document.getElementById('actualquiz').innerHTML = questions[i];
    //   var element = document.getElementById("questions");
    //   element.innerHTML = quiz.getQuestionIndex().text;
    //   runQuiz();

    //     for(var j = 0; j < choices.length; j++){

    //     var choice = choices[j];
    //     console.log(choices);


    
