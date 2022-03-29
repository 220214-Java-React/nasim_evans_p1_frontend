
//Construction Ahead!
// WORK IN PROGRESS - JAZZ



//Event Listeners
if (submitRegistration) {
    submitRegistration.addEventListener("click", submitRegister)
}

//Register Functionality
function submitRegister() {
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
		
    	localStorage.setItem("currentRegisteredUser", 
        JSON.stringify(new RegisteredUser(firstNameRegistration.value, 
                                          lastNameRegistration.value, 
                                          emailRegistration.value, 
                                          usernameRegistration.value, 
                                          passwordRegistration.value, 
                                          departmentRegistration.value)))
		
        console.log(localStorage.getItem("currentRegisteredUser"))
	  }
	
}


//id="firstNameRegistration"
//id="lastNameRegistration"
//id="emailRegistration"
//id="usernameRegistration"
//id="passwordRegistration"
//id="retypedPasswordRegistration"
//id="departmentRegistration"