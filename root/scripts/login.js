

//html elements
let loginLink = document.getElementById("loginLink");
let registerLink = document.getElementById("registerLink");

let loginContainer = document.getElementById("loginContainer")
let registerContainer= document.getElementById("registerContainer")

let loginUsername = document.getElementById("loginUsername")
let loginPassword = document.getElementById("loginPassword")
let loginButton = document.getElementById("loginButton")

let incorrectCredentials = document.getElementById("incorrectLoginValues")

//Event Listeners
if (loginLink) {
	loginLink.addEventListener("click", displayLogin)
}
if (registerLink) {
	registerLink.addEventListener("click", displayRegister)	
}
if (loginButton) {
    loginButton.addEventListener("click", submitLogin)
}else{
	console.log("slowdown")
}

// Display Controls
function displayLogin() {
	document.title = "Login"

	registerContainer.style.display = "none"
  loginContainer.style.display = "block"

	loginLink.style.display = "none"
	registerLink.style.display = "inline"
}

function displayRegister() {
	document.title = "Register"

	loginContainer.style.display = "none"
    registerContainer.style.display = "block"
	
    registerLink.style.display = "none"
	loginLink.style.display = "inline"
}

//Login Functionality

async function submitLogin() {
    console.log(`This users username: ${loginUsername.value}`)
    console.log(`This users password: ${loginPassword.value}`)
	if (loginUsername.value != "" && loginPassword.value != "") {
		let user = new User(0, loginUsername.value, loginPassword.value, "", "", "", false, "EMPTY") 
		let reqJson = JSON.stringify(user)
		
		console.log(user)

		try {
			await fetch(`${BASE_API_URL}/login`, {
			method: "POST",
			body: reqJson, 
			})
			.then(response => response.json())
			.then(data => finishLogin(data))
		} catch(e) {
			incorrectLogin("invaild Credentials")
		}
		
		
		user = localStorage.getItem("currentUser")
		console.log(`The Current User is: ${user}`)
		if (localStorage.getItem("currentUser") != null && user.active == true) {
			openHome()
		}else {}
	}
	
}



function incorrectLogin(string) {
	console.log("login failed: ")
	let incorrectLoginValues = document.getElementById("incorrectLoginValues")
	let p = document.createElement("p")
	p.innerHTML = string
	incorrectLoginValues.appendChild(p)
}






