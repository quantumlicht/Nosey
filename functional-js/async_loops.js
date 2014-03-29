function loadUsers(userIds, load, done) {
	// var len = userIds.length;
	// var users = new Array(userIds.length);
	var users = []
	var completed = 0;

	userIds.forEach(function(userId, index){
		load(userId, function(user){
			users[index] = user
			if(++completed=== userIds.length) done(users)
		})

	});

}

module.exports = loadUsers