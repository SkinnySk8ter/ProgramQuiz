var questions = [ // loop here for all the questions
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
        title: "How can you access every part of an array?",
        choices: [".everything", ".allaccess", ".length", ".all"],
        answer: ".length"
    }]

    var button = document.getElementById("startbtn");
    var clock = document.querySelector("timer");
    var howmany = document.querySelector("counter")
    var actualquiz = document.getElementsByName("questions")

  
function quiztime() {
    
    for (var i = 0; i < questions.length; i++){
        var question = questions[i];
    
        console.log(questions[i].title++);
        console.log(questions[i].choices);
    };
}

    //   show question
 function runQuiz(){     
      document.getElementById('actualquiz').innerHTML = questions[i];
      var element = document.getElementById("questions");
      element.innerHTML = quiz.getQuestionIndex().text;
      runQuiz();

    //     for(var j = 0; j < choices.length; j++){

    //     var choice = choices[j];
    //     console.log(choices);


    }
