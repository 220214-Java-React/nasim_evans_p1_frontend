class User {
	constructor(username, password) {
		this.username = username
		this.password = password
	}
}

function setActiveUser(username, password) {
	if (currentUser == null) {
		currentUser = new user(username, password)
	}

	console.log(currentUser)
}