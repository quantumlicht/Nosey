module.exports = function repeat(operation, num) {
	timeOutId  = setTimeout(function(){
		if (num <=0) return;
		operation()
		return repeat(operation, --num);
	}, 1000)

	setTimeout(function(){
		clearTimeout(timeOutId);
	}, 1500)
}

