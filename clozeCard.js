// constructor function to create basicCard objects
exports.BasicCard  = function(front, back) {
	this.front = front;
	this.back = back;
}


//clozeCard constructor takes two argument: text and cloze

exports.ClozeCard = function(text, cloze) {

	// Convert the incoming strings to lower case
	var textToLower = text.toLowerCase();
	var clozeToLower = cloze.toLowerCase();

	// Confirm that the cloze statement appears within the complete text
	if (!textToLower.includes(clozeToLower)) {
		console.log('ERROR: cloze-deletion does not appear within full text -- <' + cloze + '>');
		return;
	}


	this.text = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
}