const add = ["ProductId", "ProductName", "ProductPrice"];
let item = " ";
//console.log("Deeksha");
var regx = new RegExp([0 - 9]);
//FUNCTION FOR ADDDITION OF VALUES
function addme() {

    let id = document.getElementById('Productid').value;
    let name = document.getElementById('Productname').value;
    let val = document.getElementById('Productprice').value;
    if (id == "" || name == "" || val == "") {
        document.getElementById('error').innerHTML = "Enter VALID enteries";
    }
    else if (val < 0 || regx.test(val)) {
        document.getElementById('error').innerHTML = "Enter valid amount";
    }
    else if (id < 0) {
        document.getElementById('error').innerHTML = "Id can't be begative";
    }
    else {

        add.push({ i: id, n: name, p: val });
        item += "<tr><td>" + add[add.length - 1].i + "</td><td>" + add[add.length - 1].n + "</td>" +
            "<td>" + "USD" + " " + add[add.length - 1].p + "</td></tr>";
        document.getElementById('error').innerHTML = "";
        document.getElementById('tspace').innerHTML = item;

        document.getElementById("forms").addEventListener("click", function (event) {
            event.preventDefault()
        });
    }
}
