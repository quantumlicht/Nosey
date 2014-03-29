module.exports = function Spy(target, method) {
	var origFn = target[method]
	var result = {
		count: 0
	}
	// var counter = 0;
	// instantiating a variable wont work because
	// objects/arrays/functions are passed by reference, everything else by value.
	target[method] = function(){
		result.count++;
		return origFn.apply(this, arguments)
	}

	return result
};
