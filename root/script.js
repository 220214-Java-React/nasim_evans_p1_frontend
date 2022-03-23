let loginLink = document.getElementById("loginLink");
let registerLink = document.getElementById("registerLink");

let loginContainer = document.getElementById("loginContainer")
let registerContainer= document.getElementById("registerContainer")


if (loginLink) {
	loginLink.addEventListener("click", displayLogin)
	
}
if (registerLink) {
	registerLink.addEventListener("click", displayRegister)	
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