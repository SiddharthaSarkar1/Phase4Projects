var myData = [
    {"dealId" : 1, "client_name" : "Amazon", "project_name" : "AWS Project", "project_manager" : "Soumyajit", "project_cost" : 250000},
    {"dealId" : 2, "client_name" : "Google", "project_name" : "UI/UX Project", "project_manager" : "Supriyo", "project_cost" : 45000000},
    {"dealId" : 3, "client_name" : "Dell", "project_name" : "Web Project", "project_manager" : "Supratik", "project_cost" : 2346657},
    {"dealId" : 4, "client_name" : "Lenovo", "project_name" : "App Security Project", "project_manager" : "Rittiika", "project_cost" : 765457}
]


var currentDealId = myData.length  + 1;
localStorage.setItem("myData", "test")
var myDataTest = localStorage.getItem("myData")

function CreateTableFromJSON() {    
    var col = [];
    for (var i = 0; i < myData.length; i++) {
        for (var key in myData[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < myData.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myData[i][col[j]];
        }
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = '<button class="btn btn-danger" onclick="DeleteRow(' + myData[i].dealId + ')"> Delete </button>'

    }
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

function AddNewDeal() {
    var clientName = document.getElementById("clientNameInput").value;
    var projectName = document.getElementById("projectNameInput").value;
    var projectManager = document.getElementById("projectManagerInput").value;
    var projectCost = document.getElementById("projectCostInput").value;
    document.getElementById("clientNameInput").value = "";
    document.getElementById("projectNameInput").value = "";
    document.getElementById("projectManagerInput").value = "";
    document.getElementById("projectCostInput").value = "";
    InsertRow(currentDealId, clientName, projectName, projectManager, projectCost);
}


function InsertRow(dealId, clientName, projectName, projectManager, projectCost) {
    myData.push({"dealId": dealId, "client_name" : clientName, "project_name" : projectName, "project_manager" : projectManager, "project_cost" : projectCost})
    currentDealId++;
    CreateTableFromJSON();

}

function DeleteRow(dealId) {  
    for( var i = 0; i < myData.length; i++){ 
        if ( myData[i].dealId === dealId) { 
            myData.splice(i, 1); 
        }
    }
    CreateTableFromJSON();
}