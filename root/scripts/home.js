
// Get Current User From Local Storage
//     parse the currentUser JSON down to its elements
//     Instantiate Active User with those elements
console.log(`The Current User is: ${localStorage.getItem("currentUser")}`)
let {userId, username, password, email, firstName, lastName, active, role} = JSON.parse(localStorage.getItem("currentUser"))
let currentUser = new User(userId, username, password, email, firstName, lastName, active, role)

console.log( "The Active user is " + currentUser)














