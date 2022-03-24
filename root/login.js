let loginLink = document.getElementById("loginLink");
let registerLink = document.getElementById("registerLink");

let loginContainer = document.getElementById("loginContainer")
let registerContainer= document.getElementById("registerContainer")

let loginUsername = document.getElementById("loginUsername")
let loginPassword = document.getElementById("loginPassword")
let loginButton = document.getElementById("loginButton")


if (loginLink) {
	loginLink.addEventListener("click", displayLogin)
}
if (registerLink) {
	registerLink.addEventListener("click", displayRegister)	
}
if (loginButton) {
    loginButton.addEventListener("click", submitLogin)
}


function displayLogin() {
	registerContainer.style.display = "none"
    loginContainer.style.display = "block"

	loginLink.style.display = "none"
	registerLink.style.display = "inline"
}

function displayRegister() {
	loginContainer.style.display = "none"
    registerContainer.style.display = "block"
	
    registerLink.style.display = "none"
	loginLink.style.display = "inline"
}

function submitLogin() {
    console.log(`This users username: ${loginUsername.value}`)
    console.log(`This users password: ${loginPassword.value}`)
	loginUsername.value = ""
	loginPassword.value = ""
}