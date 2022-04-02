class User {
	constructor(userId, username, password, email, firstName, lastName, active, role) {
		this.userId = userId;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.active = active;
        this.role = role;
	}
}

function setActiveUser(data) {
	let currentUser = new User(data.userId, data.username, data.password, data.email, data.firstName, data.lastName, data.active, data.role)
	console.log(currentUser)
	return currentUser
}

function finishLogin(data) {
	console.log(data)
	let user = new User(data.userId, data.username, data.password, data.email, data.firstName, data.lastName, data.active, data.role) 

	if (user.active) {
		if (user.userId != 0) {
			localStorage.setItem("currentUser", JSON.stringify(user))
			return openHome()
		}
	} else {
		return null
	}

	
}

function clearUser() {
	if (localStorage.getItem("currentUser")) {
		localStorage.removeItem("currentUser")
		console.log(localStorage.getItem("currentUser") + "because user has been cleared")
	}
}

