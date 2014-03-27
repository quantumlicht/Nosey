module.exports = function Spy(target, method) {
	var origFn = target[method]
	this.count = 0;
	var self = this;
	return function() {
		origFn.apply(null, Array.prototype.slice(arguments))
		count++;
	}
	this.count = count


};
