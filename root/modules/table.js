const BASE_API_URL = "http://localhost:8180/project_1_backend"

function addCell(tr, val) {
    let td = document.createElement('td');
    td.innerHTML = val;
    tr.appendChild(td)
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

function addRow(tBody, id, name, role, state) {
    let tr = document.createElement('tr');

    addCell(tr, id);
    addCell(tr, name);
    addCell(tr, role);
    addCell(tr, state)

    tBody.appendChild(tr)
}

function generateTHead(table) {
    let tHead = document.createElement("thead")
    addHeadRow(tHead, "User Id", "Username", "User Role", "User State")
    table.appendChild(tHead)
}

function generateTBody(table, objects) {
    let tBody = document.createElement("tbody")

    for (let i = 0; i < objects.length; i++) {
        addRow(tBody, objects[i].userId , objects[i].username, objects[i].role, objects[i].active);
    }

    tbl.appendChild(tBody)
}

function generateTable(data) {
    tbl = document.getElementById('adminTable');
    objects = []

        for (let i = 0; i < data.length; i++) {
            objects[i] = data[i]
        }

    

    tbl.innerHTML = ""
    generateTHead(tbl)
    generateTBody(tbl, objects)
}

async function getObjects(int, role) {
    let reqJson = { "userId":"22" }
    reqJson = JSON.stringify(reqJson)

    if (role === "ADMIN") {
        if (int === 1) {
            await fetch(`${BASE_API_URL}/newUsers`, {
                method: "POST",
                body: reqJson, })
            .then(response => response.json())
            .then(data => generateTable(data))
    
        } else {
            await fetch(`${BASE_API_URL}/newUsers`)
            .then(response => response.json())
            .then(data => generateTable(data))
        }
    }
    
}




