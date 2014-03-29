function getDependencies(tree){
	var deps = [];
	log_step = '   ';
	function getDeps(tree) {
		Object.keys(tree).forEach(function(key) {
			if (tree[key].hasOwnProperty('dependencies')) {
				log_step += log_step;
				getDeps(tree[key].dependencies);
			}
			dep = [key,'@',tree[key].version].join('')
			if (deps.indexOf(dep) === -1) {
				deps.push(dep)			
			}
		});
		return;

	}
	if (tree['dependencies'] !== undefined) {
		tree = tree['dependencies'];
		getDeps(tree);
	}
	return deps.sort();

}

module.exports = getDependencies;