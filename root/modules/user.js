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

//Registered User Class
class RegisteredUser {
	constructor(firstname, lastname, email, username, password, department){
	  this.firstname = firstname
	  this.lastname = lastname
	  this.email = email
	  this.username = username
	  this.password = password
	  this.department = department
	}
  }