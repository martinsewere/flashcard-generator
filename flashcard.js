//inquirer npm package
var inquirer = require("inquirer");

// Import the flash cards constructor implementation
var clozeCard = require("./clozeCard.js/");

var questions = require("./basicCard.js/").questions;

var clozeQuestions = [];

// Populate the cloze-deleted questions list
for (var i = 0; i < questions.length; i++) {
	var q = new flashCards.ClozeCard(questions[i].full, questions[i].cloze);
	closeQuestions.push(q);
}

// What question the user is currently on
var currentQuestion = 0;
// How many questions the user has gotten right
var answerRight = 0;
// How many questions the user has gotten wrong
var answerWrong = 0;

//askQuestion prompts the user for an answer to a given cloze question
function askQuestion() {
	inquirer.prompt([
		{
			type:'input',
			message: clozeQuestions[currentQuestion].partial + '\nAnswer: ',
			name: 'userGuess'

		}

	]).then(function () {
		console.log('\n');

		// Check if the user is correct
		if (answers.userGuess.toLowerCase() === clozeQuestions[currentQuestion].cloze.toLowerCase()) {
			    console.log('Correct!');
			    answerRight++;
		}else {
			    console.log('Incorrect!');
			    answerWrong++;
		}

		//Show the correct answer
		console.log(closeQuestions[currentQuestion].full);
		console.log('-------------------------------------\n');

		// Advance to the next question



	})
}

// Begin asking the questions!
askQuestion();