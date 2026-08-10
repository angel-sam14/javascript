// function saveData(){
// let name = document.getElementById("name").value
// let course = document.getElementById("course").value

// sessionStorage.setItem("name",name)
// sessionStorage.setItem("course",course)
// console.log("data saved");
// }


// function getData() {
//     let name = sessionStorage.getItem("name");
//     let course = sessionStorage.getItem("course");

//     document.getElementById("result").innerText =
//         "Name: " + name + "\nCourse: " + course;
// }


// function clearData(){
//     sessionStorage.clear()
//     document.getElementById("result").innerText = "All data cleared"
// }
// -------------------------------------------------------------------------------

function saveData() {

    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;

    let count = sessionStorage.getItem("count") || 0;

    count++;

    sessionStorage.setItem("name" + count, name);
    sessionStorage.setItem("course" + count, course);
    sessionStorage.setItem("count", count);

    document.getElementById("name").value = "";
    document.getElementById("course").value = "";

    displayData();
}


function displayData() {

    let count = sessionStorage.getItem("count") || 0;

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    for (let i = 1; i <= count; i++) {

        let name = sessionStorage.getItem("name" + i);
        let course = sessionStorage.getItem("course" + i);

        if (name !== null) {

            let row = document.createElement("tr");

            row.innerHTML = `
                <td>${name}</td>
                <td>${course}</td>
                <td>
                    <button onclick="deleteData(${i})">
                        Delete
                    </button>
                </td>
            `;

            table.appendChild(row);
        }
    }
}


function deleteData(i) {

    sessionStorage.removeItem("name" + i);
    sessionStorage.removeItem("course" + i);

    displayData();
}


function clearData() {

    sessionStorage.clear();

    document.getElementById("studentTable").innerHTML = "";
}