const BASE_API_URL = "http://localhost:8180/project_1_backend";

let clearLocalStorage = () => {
	window.onunload = () => {
  	  window.localStorage.clear()
	}
}

let openHome = () => {
    window.location.href = "https://expensereimburcementsystem.brette.repl.co/home.html"
}

let openUser = () => {
    window.location.href = "https://expensereimburcementsystem.brette.repl.co/user.html"
}

let openReimb = () => {
	window.location.href = "https://expensereimburcementsystem.brette.repl.co/reimbursementview.html"
}
let openIndex = () => {
	window.location.href = "https://expensereimburcementsystem.brette.repl.co/index.html"
}

function openReimbursementForm() {
	window.location.href = "https://expensereimburcementsystem.brette.repl.co/reimbursmentform.html"
}



let list = [];

function reconstructArray(id) {
	list = JSON.parse(localStorage.getItem("objectList"))
	
	return list[id]
}
function getArray(id) {
	list = localStorage.getItem("objectList")
	
	return list;
}





