  
	// list = JSON.parse(localStorage.getItem("objectList"))

class User {
	constructor(userId, username, password, email, firstName, lastName, active, role) {
		this.userId = userId;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.active = true;
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

	if (data.userId != 0) {
		if (user.active) {
			localStorage.setItem("currentUser", JSON.stringify(user))
			return openHome()
		}else {
			incorrectLogin("user not active")
		}
	} else {
		incorrectLogin("incorrect credentials")
	}
}

function loadUser() {
	console.log(`The Current User is: ${localStorage.getItem("currentUser")}`)
	let {userId, username, password, email, firstName, lastName, active, role} = JSON.parse(localStorage.getItem("currentUser"))
	return new User(userId, username, password, email, firstName, lastName, active, role)
}


function clearUser() {
	if (localStorage.getItem("currentUser")) {
		localStorage.removeItem("currentUser")
		console.log(localStorage.getItem("currentUser") + "because user has been cleared")
	}
}

// async function updateUser() {
// 	let int = 0
// 	if (document.getElementById("adminSelection").value == "a") {
// 		int = 1
// 	}
	
// 	let reqString = JSON.stringify({ "active"=`${int}`, "userId"=`${0}`, "adminId"=`${currentUser.userId}` })
	
// 	await fetch(`${BASE_API_URL}/adminUpdate`, {
//                  method: "POST",
//                  body: reqString, 
// 	}).then(console.log(JSON.stringify(reqString))) 

// 	//openHome()
// }

// function displayUser() {
// 	let list = JSON.parse(getArray())
// 	let id = JSON.parse(localStorage.getItem("desiredId"))
// 	console.log(list)
// 	console.log(id)
// 	let name = document.getElementById("reimbImg")
// 	let username = document.getElementById("reimbAmount")
// 	let email = document.getElementById("reimbId")
// 	let role = document.getElementById("reimbSubTime")
// 	let status = document.getElementById("reimbResTime")

// 	name.innerHTML = list[id].firstName + " " + list[id].firstName
// 	username.innerHTML = list[id].username
// 	email.innerHTML = list[id].email
// 	role.innerHTML = list[id].role
// 	status.innerHTML = list[id].active

// 	let currentUser = JSON.parse(localStorage.getItem("currentUser"))
	
// 	if (currentUser.role == "ADMIN") {
// 		let controls = document.getElementById("adminControls")
// 		controls.style.display = "block"
// 	}
	
// }
