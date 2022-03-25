

//html elements
let loginLink = document.getElementById("loginLink");
let registerLink = document.getElementById("registerLink");

let loginContainer = document.getElementById("loginContainer")
let registerContainer= document.getElementById("registerContainer")

let loginUsername = document.getElementById("loginUsername")
let loginPassword = document.getElementById("loginPassword")
let loginButton = document.getElementById("loginButton")

//Event Listeners
if (loginLink) {
	loginLink.addEventListener("click", displayLogin)
}
if (registerLink) {
	registerLink.addEventListener("click", displayRegister)	
}
if (loginButton) {
    loginButton.addEventListener("click", submitLogin)
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

function submitLogin() {
    console.log(`This users username: ${loginUsername.value}`)
    console.log(`This users password: ${loginPassword.value}`)
	if (loginUsername.value != "" && loginPassword.value != "") {
		localStorage.setItem("currentUser", JSON.stringify(new User(loginUsername.value, loginPassword.value)))
		console.log(localStorage.getItem("currentUser"))
		openHome()
	}
	
}

let openHome = () => {
    window.location.href = "C:/Users/Brett/IdeaProjects/project_1_frontend/root/home.html"
}




