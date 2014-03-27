module.exports = function getShortMessages(messages) {

	return messages.map(function(elem){
		return elem.message;
	})
	.filter(function(elem){
		return elem.length < 50;
	});

	return messages
}

