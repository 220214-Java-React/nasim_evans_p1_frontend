
//Construction Ahead!
// WORK IN PROGRESS - JAZZ



//Event Listeners
if (submitRegistration) {
    submitRegistration.addEventListener("click", submitRegister)
}

//Register Functionality
async function submitRegister() {
    console.log(`This users first name: ${firstNameRegistration.value}`)
    console.log(`This users last name: ${lastNameRegistration.value}`)
    console.log(`This users email: ${emailRegistration.value}`)
    console.log(`This users username: ${usernameRegistration.value}`)
    
    if(passwordRegistration.value === retypedPasswordRegistration.value){
          console.log(`This users password: ${passwordRegistration.value}`)
    } else {
          console.log("Password's do not match!")
    }
  
    console.log(`This users department: ${departmentRegistration.value}`)
  
	if (firstNameRegistration.value != "" && lastNameRegistration.value != "" 
    && emailRegistration.value != "" && usernameRegistration.value != ""
	&& ((passwordRegistration.value != "") === (retypedPasswordRegistration.value != ""
	&& departmentRegistration.value != ""))) {
		
        let user = new User(0, usernameRegistration.value, passwordRegistration.value, emailRegistration.value, firstNameRegistration.value, lastNameRegistration.value, false,departmentRegistration.value)

        await fetch(`${BASE_API_URL}/create`, { method: "POST", body: JSON.stringify(user) })
        .then(console.log("User has been created: please await aprroval from an admin"))
        
	}
	
}



//id="firstNameRegistration"
//id="lastNameRegistration"
//id="emailRegistration"
//id="usernameRegistration"
//id="passwordRegistration"
//id="retypedPasswordRegistration"
//id="departmentRegistration"