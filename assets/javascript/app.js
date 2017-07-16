window.onload = function() {
    
    $("#startButton").on("click", function() {
        $("#startButton").hide();
        $("#subContent").show();
        run();
    })
};


// Questions and answers object
var allQuestions = [{

	questionString: "What is the name of Jen's date, who asks her along to see'Gay-A Gay Musical!'?",
	choices: {
		correct: "Phillip",
		incorrect: ["John", "Peter", "Keith"]
	}
},{
	questionString: "What is the name of Jen's date, who asks her along to see'Gay-A Gay Musical!'?",
	choices: {
		correct: "Phillip",
		incorrect: ["John", "Peter", "Keith"]
	}
},{
	questionString: "What is the name of Jen's date, who asks her along to see'Gay-A Gay Musical!'?",
	choices: {
		correct: "Phillip",
		incorrect: ["John", "Peter", "Keith"]
	}
},{
	questionString: "What is the name of Jen's date, who asks her along to see'Gay-A Gay Musical!'?",
	choices: {
		correct: "Phillip",
		incorrect: ["John", "Peter", "Keith"]
	}
}];
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
for (i = 0; i < allQuestions.length; i++) {
    $("#subContent").html("<div>" + allQuestions[i] + "</div>");
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

}
    // --------------------------------------------------------------------
    // Start game function
    // -------------------