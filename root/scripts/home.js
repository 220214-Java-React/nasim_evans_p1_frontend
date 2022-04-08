
// Get Current User From Local Storage
//     parse the currentUser JSON down to its elements
//     Instantiate Active User with those elements
console.log(`The Current User is: ${localStorage.getItem("currentUser")}`)
let currentUser
currentUser = JSON.parse(localStorage.getItem("currentUser"))
	

if (currentUser.role == "EMPLOYEE") {
	let btn = document.getElementById("btnContainer")
	btn.style.display = "block"
}

console.log( "The Active user is " + currentUser)

function displayBtn() {
		if (currentUser.role == "EMPLOYEE") {
		let reimbursementBtn = document.getElementById("reimbBtn")		
		reimbursementBtn.style.display = "block"
	}else {
		let reimbursementBtn = document.getElementById("reimbBtn")		
		reimbursementBtn.style.display = "none"
	}	
}















