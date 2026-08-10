function saveData(){
let name = document.getElementById("name").value

sessionStorage.setItem("name",name)
console.log("data saved");
}

function getData(){
    let name = sessionStorage.getItem("name")
    document.getElementById("result").innerText = name
}

function removeData(){
    sessionStorage.removeItem("name")
}

function clearData(){
    sessionStorage.clear()
    document.getElementById("result").innerText = "All data cleared"
}