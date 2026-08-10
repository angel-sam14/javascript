function saveData(){
let name = document.getElementById("name").value

localStorage.setItem("name",name)
console.log("data saved");
}

function getData(){
    let name = localStorage.getItem("name")
    document.getElementById("result").innerText = name
}

function removeData(){
    localStorage.removeItem("name")
}

function clearData(){
    localStorage.clear()
    document.getElementById("result").innerText = "All data cleared"
}