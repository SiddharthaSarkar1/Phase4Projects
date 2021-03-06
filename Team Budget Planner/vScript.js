var myData = [
    { "VendorId": 1, "client_name": "Amazon" },
    { "VendorId": 2, "client_name": "Microsoft" },
    { "VendorId": 3, "client_name": "Apple" }
]

var currentDealId = myData.length + 1;
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

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

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
        tabCell.innerHTML = '<button class="btn btn-danger" onclick="DeleteRow(' + myData[i].VendorId + ')"> Delete </button>'
    }
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

function AddNewDeal() {
    var clientName = document.getElementById("clientNameInput").value;
    document.getElementById("clientNameInput").value = "";
    InsertRow(currentDealId, clientName);
}

function InsertRow(VendorId, clientName) {
    myData.push({ "VendorId": VendorId, "client_name": clientName })
    currentDealId++;
    CreateTableFromJSON();

}

function DeleteRow(VendorId) {
    for (var i = 0; i < myData.length; i++) {
        if (myData[i].VendorId === VendorId) {
            myData.splice(i, 1);
        }
    }
    CreateTableFromJSON();
}