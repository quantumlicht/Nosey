module.exports = function arrayMap(arr, fn) {
	return arr.reduce(function(acc, item, idx, arr) {
		return acc.concat(fn(item, index, arr))
	}, []);
}