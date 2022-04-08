
let button = document.getElementById("")
let id = localStorage.getItem("desiredId")
reconstructArray(id)
	
	


async function createReimbursement() {
	let amount = document.getElementById(`reimbursementFormAmount`).value
	let description = document.getElementById(`reimbursementFormDescription`).value
	let type = document.getElementById("reimbursementFormType").value
	
	let reqOb = {
    "reimbursementId":"0",
    "amount":`${amount}`,
    "timeSubmitted":`${getTimeStamp()}`,
    "timeResolved":"null",
    "description":`${description}`,
    "receipt":"null",
    "userId":`${currentUser.userId}`,
    "managerId":"null",
    "status":"PENDING",
    "type":`${type}`
	}

	await fetch(`${BASE_API_URL}/services`, {
        method: "POST",
        body: JSON.stringify(reqOb), 
	})
	.then(response => console.log(response.status))

	openHome()
}

async function updateReimbursement() {
	
	let reqString = {
    "reimbId":`${ document.getElementById("reimbId").innerHTML }`,
    "timeResolved":`${getTimeStamp()}`,
    "managerId":`${currentUser.userId}`,
    "status":`${document.getElementById("decisionControlsFM").value}`
	}


	await fetch(`${BASE_API_URL}/managerUpdate`, {
                 method: "POST",
                 body: JSON.stringify(reqString), 
	}).then(console.log(JSON.stringify(reqString))) 

	openHome()
}




function getTimeStamp() {
	const date = new Date()
	let year = date.getFullYear()
	let month = date.getMonth()
	let day = date.getDay()
	let hh = date.getUTCHours()
	let mm = date.getUTCMinutes()
	let ss = date.getUTCSeconds()

// yyyy-mm-dd hh:mm:ss
	if (month < 10) {
		month = `0${month}`
	}

	if (day < 10) {
		day = `0${day}`
	}

	if (hh < 10) {
		hh = `0${hh}`
	}

	if (mm < 10) {
		mm = `0${mm}`
	}

	if(ss < 10) {
		ss = `0${ss}`
	}
	
	
	return `${year}-${month}-${day} ${hh}:${mm}:${ss}`
}


function displayReimb() {
	let reimbImg = document.getElementById("reimbImg")
	let reimbAmount = document.getElementById("reimbAmount")
	let reimbId = document.getElementById("reimbId")
	let reimbSubTime = document.getElementById("reimbSubTime")
	let reimbResTime = document.getElementById("reimbResTime")
	let description = document.getElementById("reimbDescription")
	let reimbType = document.getElementById("reimbType")
	let reimbStatus = document.getElementById("reimbStatus")

	console.log(list[id].amount)
	console.log(list)
	reimbAmount.innerHTML = `$${list[id].amount}`
	reimbId.innerHTML = `${list[id].reimbursementId}`
	reimbSubTime.innerHTML = `${list[id].timeSubmitted}`
	reimbResTime.innerHTML = `${list[id].timeResolved}`
	description.innerHTML = `${list[id].description}`
	reimbType.innerHTML = `${list[id].type}`
	reimbStatus.innerHTML = `${list[id].status}`

	let currentUser = JSON.parse(localStorage.getItem("currentUser"))
	
	if (currentUser.role == "FINANCIALMANAGER") {
		let controls = document.getElementById("managerControls")
		controls.style.display = "block"
	}
}






