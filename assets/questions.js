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

    var button = document.getElementById("startbtn");
    var clock = document.querySelector("timer");
    var howmany = document.querySelector("counter")
    var actualquiz = document.getElementsByName("questions")

    
    function quizstart() {

      alert("Welcome to a quiz! (ta-da!!) You will be tasked with answering the next set of questions to the best of your ability but keep an eye on the time! Answer incorrectly and the timer goes down even faster!! Click Ok to get started!")
  }
  quizstart();

  
function quizsetup() {
    
    for (var i = 0; i < questions.title; i++){
        var question = questions.title[i];
    
        console.log(questions[i].title++);
        console.log(questions[i].choices++);
        let el = document.getElementById("questionPromptOne");
        el.innerHTML =  Math.floor(Math.random()*questions[i]);
        
    };
}
quizsetup();

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


    
