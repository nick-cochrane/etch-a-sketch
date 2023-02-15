const container = document.getElementById("container");
let rows = document.getElementsByClassName("row-div");
let columns = document.getElementsByClassName("column-div");

addRows(16, container);
addColumns(16);

container.addEventListener('mouseover', (event) => {
        event.target.style['background-color'] = "blue";
    })

function addRows(rows=16, container=container) {
    for (let i = 0; i < rows; i++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "row-div");

        container.appendChild(newDiv);
    }
}

function addColumns(numColumns=16) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < numColumns; j++) {
            const newDiv = document.createElement("div");
            newDiv.setAttribute("class", "column-div");
    
            rows[i].appendChild(newDiv);
        }
    }
}