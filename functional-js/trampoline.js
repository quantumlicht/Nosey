function repeat(operation, num) {
	if (num <= 0) return
	operation()
	/*we need to be able to pass a function reference, not the function result,
	which would happen if we called repeat(operation, --num)
	*/ 
	return repeat.bind(null,operation, --num)
}

function trampoline(fn) {
	while (fn && fn instanceof Function) {
        fn = fn.apply(fn.context, fn.args);
    }
    return fn;
}

module.exports = function(operation, num) {
	/* instead of binding, we could have wrapped the repeat call inside a 
	function constructor that return the result of repeat(operation, null)
	as : 
	trampoline(function() {
		return repeat.bind(null, operation, num)
	})
	*/
	return trampoline(repeat.bind(null, operation, num))
}