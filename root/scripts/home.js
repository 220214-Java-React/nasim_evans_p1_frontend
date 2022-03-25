
//Get Current User From Local Storage
    //parse the currentUser JSON down to its elements
    //Instantiate Active User with those elements
let {username, password} = JSON.parse(localStorage.getItem("currentUser"))
let activeUser = new User(username, password)

console.log(activeUser)