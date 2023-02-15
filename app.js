const container = document.getElementById("container");
const button = document.getElementById("button");
let rows = document.getElementsByClassName("row-div");
let columns = document.getElementsByClassName("column-div");

newGame(16);

function newGame(numRows) {
    container.textContent = '';

    addRows(numRows, container);
    addColumns(numRows);

        for (let i=0; i<columns.length; i++) {
            columns[i].addEventListener('mouseover', (event) => {
                event.target.style['background-color'] = "blue";
            })
        }
}

button.addEventListener('click', () => {
    newRows = prompt("Enter number of rows for new grid");
    newGame(newRows);
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