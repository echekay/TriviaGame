// When start button is clicked, have start button disappear; generate timer, questions, and answers.
// Have timer set to decrement every second from a total of 60 seconds.
// Have user have only one option to select an answer for each question.
// Run if statements to see if they're answers are correct and add to either correct or incorrect counters.
// If user picks an snwer for all questions before timer runs out, display results summary.
// If time runs out before user finishes, display results summary.
// Have option to start new game without having to refresh page.
// ---------------------------------------------------------------
// To-do: 
// Figure out a way to iterate throup the object and create new divs and populate them with the questions in that object.
// Also to create radio buttons with the answer choices through a for loop.
// Need to create click events for each radio button to save as user answer and compare in if statement to correct answer.
// Need to add counter with each correct or incorrect choice.
// Need to define when game ends, display results and start button.
window.onload = function() {

    $("#startButton").on("click", function() {
        $("#startButton").hide();
        $("#subContent").show();
        run();
        makesQuiz();
    })
};


// Questions and answers object
var allQuestions = [{

    questionString: "What is the name of Jen's date, who asks her along to see'Gay-A Gay Musical!'?",
    choices: ["John", "Peter", "Keith", "Paul"]
}, {
    questionString: "Which topic does Moss end up discussing after accidentally ending up on the television news as opposed to Dragons Den?",
    choices: ["Iraq War", "Afghanistan War", "European Union", "African Food Crisis"]
}, {
    questionString: "What football team does Roy unwittingly say he supports?",
    choices: ["Chelsea", "Tottenham", "West Ham", "Arsenal"]
}, {
    questionString: "Which nine letter word does Moss clain is real when he appears on Countdown?",
    choices: ["SNATTINBE", "TNETENNBA", "DREMYTABE", "RENNTOIRE"]
}, {
    questionString: "What is the nickname Moss is given when he joins a club after appearing on Countdown?",
    choices: ["Prime", "Word", "Negative One", "8+"]

}];

// var allQuestions = [
//   "this",
//   "that",
//   "thot",
//   "trot"
// ];
// --------------------------------------------------------------------
// Global variables
// ----------------
var intervalId;
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var number = 60;

// --------------------------------------------------------------------
// Functions to be called
// ----------------------

// create for loop to generate divs to hold questions and answers
function makesQuiz() {
    // Looked into .each method but got to a roadblock.
    // jQuery.each(allQuestions, function(questionString, choices) {
    //   $("#questionsGoInHere").append(questionString + " " + choices);
    // });
    // Tried doing traditional loop but could not figure a way to create new div with each iterated question.
    // for (i=0, i<allQuestions.length; i++) {
    //   $("#questions").append("<div>" + allQuestions.questionString[i] + "</div>");
    // }
    // Trying out this example from online.
    var html = "";
    $.each(allQuestions, function(key, value) {
        // html += "<h3>" + key + "</h3>";
        $("#questions").html(value);
        $.each(value, function(month, file) {
            html += "<h1>" + month + "</h1>";
            $.each(file, function(size, name) {
                html += '<a href="' + name + '" data-role="button" data-inline="true" data-mini="true">' + size + ' </a>';
            });
        });
    });
}

function run() {
    intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#show-number").html(number);


    //  Once number hits zero...
    if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
    }
}

function stop() {

    console.log("stopping");
    clearInterval(intervalId);
    $

}
// --------------------------------------------------------------------
// Start game function
// -------------------