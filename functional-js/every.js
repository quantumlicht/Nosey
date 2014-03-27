module.exports = function checkUsersValid(goodUsers) {

	return function(submittedUsers) {
		return submittedUsers.every(function(elemSubmitted, idx, array) {
			return goodUsers.some(function(elemGood, idx, array) {
				return 	elemGood.id===elemSubmitted.id;
			})
		})
	};
}