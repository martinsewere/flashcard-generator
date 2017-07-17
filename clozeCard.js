// constructor function to create basicCard objects
exports.BasicCard  = function(front, back) {
	this.front = front;
	this.back = back;
}


//clozeCard constructor takes two argument: text and cloze

exports.ClozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
}