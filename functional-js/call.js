function duckCount(){
	
	return (function countQuack(args, count){
		if (!args.length) return count;
		arg = args.pop()
		if(Object.prototype.hasOwnProperty.call(arg,'quack')){
			count++;
		}
		return countQuack(args, count);
	})(Array.prototype.slice.call(arguments), 0);

}
module.exports = duckCount


/*
function duckCount(){
	return Array.prototype.slice.call(arguments).filter(function(obj) {
		return Object.prototype.hasOwnProperty.call(obj, 'quack')
	}).length

}






*/