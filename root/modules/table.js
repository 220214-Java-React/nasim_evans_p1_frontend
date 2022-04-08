

let historyBtn = document.getElementById("historyBtn")
let activeBtn = document.getElementById("activeBtn")







async function getObjects(int, role) {
	let reqString;

	if (role === "ADMIN") {
		reqJson = { "userId":`${currentUser.userId}` }
    	reqJson = JSON.stringify(reqJson)
			
		if (int === 0) {
            await fetch(`${BASE_API_URL}/admin`, {
                method: "POST",
                body: reqJson, })
            .then(response => response.json())
            .then(data => generateTable(data))
    
        } else if (int === 1) {
            await fetch(`${BASE_API_URL}/admin`)
            .then(response => response.json())
            .then(data => generateTable(data))
        }
	} else if (role === "FINANCIALMANAGER") {
	 	reqJson = { "managerId":`${currentUser.userId}` }
    	reqJson = JSON.stringify(reqJson)
			
		if (int === 0) {
             await fetch(`${BASE_API_URL}/manager`, {
                 method: "POST",
                 body: reqJson, })
             .then(response => response.json())
             .then(data => generateTable(data))
    
         } else if (int === 1) {
             await fetch(`${BASE_API_URL}/manager`)
             .then(response => response.json())
             .then(data => generateTable(data))
         }
	 } else {
	 	if (int === 0) {
             await fetch(`${BASE_API_URL}/employeeHistory?userId=${currentUser.userId}`)
             .then(response => response.json())
             .then(data => generateTable(data))
        } else if (int === 1) {
             await fetch(`${BASE_API_URL}/services?userId=${currentUser.userId}`)
             .then(response => response.json())
             .then(data => generateTable(data))
         }
	 }


	reconstructArray()
}




function addHeadCell(tr, val) {
    let th = document.createElement('th')
    th.innerHTML = val
    tr.appendChild(th)
}

  
function addHeadRow(tblHead, val_1, val_2, val_3, val_4) {
    let tr = document.createElement('tr');

    addHeadCell(tr, val_1);
    addHeadCell(tr, val_2);
    addHeadCell(tr, val_3);
    addHeadCell(tr, val_4);
    
    tblHead.appendChild(tr)
}


function generateTHead(table) {
    let tHead = document.createElement("thead")
	if (currentUser.role === "ADMIN") {
		addHeadRow(tHead, "User Id", "Username", "User Role", "User State")	
	}else {
		addHeadRow(tHead, "Reimbursement Id", "Amount", "Type", "status")
	}
    
    table.appendChild(tHead)
}


function addLink(td, val, arrayLocation) {
	let a = document.createElement('a')
	a.innerText = val
	a.href = "#"
	a.id = arrayLocation
	a.className = "row-link"
	a.tabIndex = '-1'
	a.onclick =() => {
		
		if (currentUser.role == "ADMIN") {
			localStorage.setItem("desiredId", arrayLocation)
			openUser()
		}else {
			localStorage.setItem("desiredId", arrayLocation)
			openReimb()
		}
	} 
	td.appendChild(a)
}

function addCell(tr, val, arrayLocation) {
    let td = document.createElement('td');
    addLink(td, val, arrayLocation)
    tr.appendChild(td)
}

function addRow(tBody, id, name, role, state, arrayLocation) {
    let tr = document.createElement('tr');

    addCell(tr, id, arrayLocation);
    addCell(tr, name, arrayLocation);
    addCell(tr, role, arrayLocation);
    addCell(tr, state, arrayLocation);

    tBody.appendChild(tr)
}

function generateTBody(table, objects) {
  let tBody = document.createElement("tbody")

	if (currentUser.role === "ADMIN") {
		
		for (let i = 0; i < objects.length; i++) {
        addRow(tBody, objects[i].userId , objects[i].username, objects[i].role, objects[i].active, `${i}`);
    }
	} else {
		
		for (let i = 0; i < objects.length; i++) {
        addRow(tBody, objects[i].reimbursementId , objects[i].amount, objects[i].type, objects[i].status, `${i}`);
    }
	}
    
	
  tbl.appendChild(tBody)
}

function generateTable(data) {
	container = document.getElementById("table-container")
	container.style.display = "flex"
	
  tbl = document.getElementById('table');
  objects = []

  for (let i = 0; i < data.length; i++) {
    objects[i] = data[i]
  }

  tbl.innerHTML = ""
  generateTHead(tbl)
  generateTBody(tbl, objects)

	localStorage.setItem("objectList", JSON.stringify(objects))
	//console.log(localStorage.getItem("objectList"))
}






