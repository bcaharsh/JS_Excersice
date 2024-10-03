// first function 
function multiplication() {
    const number = document.getElementById("num").value;
    const tablecontainer = document.getElementById("table-display")
    tablecontainer.innerHTML = " ";
    if (number === "") {
        tablecontainer.innerHTML = "Please Enter Valid Number!!"
        alert("Please enter a number");
    }
    const table = document.createElement("table")
    const tbody = document.createElement("tbody")
    const thead = document.createElement("thead")
    const headrow = document.createElement("tr")
    const th1 = document.createElement("th")
    const th2 = document.createElement("th")
    const th3 = document.createElement("th")
    th1.innerHTML = "Number";
    th2.innerHTML = "Multiplication";
    th3.innerHTML = "Result";
    headrow.appendChild(th1);
    headrow.appendChild(th2);
    headrow.appendChild(th3);
    thead.appendChild(headrow);
    table.appendChild(thead);
    for (let i = 1; i <= 10; i++) {
        const row = document.createElement("tr")
        const cell1 = document.createElement("td")
        const cell2 = document.createElement("td")
        const cell3 = document.createElement("td")
        cell1.innerHTML = i;
        cell2.innerHTML = "* " + number;
        cell3.innerHTML = i * number;
        row.appendChild(cell1)
        row.appendChild(cell2)
        row.appendChild(cell3)
        tbody.appendChild(row);
    }
    table.appendChild(tbody)
    tablecontainer.appendChild(table)
}


// second function 
const btn2 = document.getElementById("btn2")
function colorchange() {
    let array = ['lightcoral', 'lightseagreen', 'lightblue', 'lightgreen', 'lightpink', 'lightyellow', 'lightgray', 'lavender', 'honeydew']
    const randomIndex = Math.floor(Math.random() * array.length);
    document.body.style.backgroundColor = array[randomIndex];
}


// third function 
function passwordcheck() {
    const password = document.getElementById("password").value
    let display = document.getElementById("checker")
    let element = document.createElement("div")
    console.log(password);
    display.innerHTML = "";
    if (password.length <8) {
        element.innerHTML = "Password is too short"
        display.appendChild(element)
        display.style.backgroundColor="red"
    }
    else if(!/[0-9]/.test(password)){
        element.innerHTML = "Password must contain at least one number"
        display.appendChild(element)
        display.style.backgroundColor="orange"
    }
    else if(!/[A-Z]/.test(password)){
        element.innerHTML = "Password must contain at least one uppercase letter"
        display.appendChild(element)
        display.style.backgroundColor="orange"
    }
    else if(!/[a-z]/.test(password)){
        element.innerHTML = "Password must contain at least one lowercase letter"
        display.appendChild(element)
        display.style.backgroundColor="orange"
    }
    else {
        element.innerHTML = "Password is strong"
        display.appendChild(element)
        display.style.backgroundColor="green"
    }
}

// fourth Validation check
function validfunc(){
    const fname = document.getElementById("firstName").value
    const lname = document.getElementById("lastName").value
    const phone = document.getElementById("num").value
    if(fname === ""){
        alert("Enter your first name")
    }
    else if(/[0-9]/.test(fname)){
        alert("Enter wrong things!!")
    }
    else if(fname.length>10){
        alert("Write short name")
    }
    else if(lname === ""){
        alert("Enter your last name")
    }
    else if(/[0-9]/.test(lname)){
        alert("Enter wrong things!!")
    }
    else if(lname.length>8){
        alert("Write short name")
    }
    else if(/[A-Z]/.test(phone)){
        alert("Invalid things enter in phone")
    }
    else if(/[a-z]/.test(phone)){
        alert("Invalid things enter")
    }
    else{
        alert("Valid")
    }
}