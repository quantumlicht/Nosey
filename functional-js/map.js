function doubleAll(numbers){
	map = Array.prototype.map;
	return numbers.map(function double(num){
		return num * 2; 
	});
}

module.exports = doubleAll