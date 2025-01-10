
function createDiv(userInput){
    for(let i = 1; i <= userInput; i++){
        const column = document.createElement("div");
        column.classList.add("column");
        container.appendChild(column);
        for(let j = 1; j <= userInput; j++ ){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            column.appendChild(grid);
        }
        
    }
    const grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = getRandomColor();
    });
})
}

function getUserInput(){
    let userInput = Number(prompt("How many squares per side?"));
    if (isNaN(userInput) || userInput < 1 || userInput > 100){
        alert("Please enter a valid number between 1 and 100. Using default value of 16.");
        userInput = 16;
    }
    const grids = document.querySelectorAll(".grid");
    const columns = document.querySelectorAll(".column");
    columns.forEach(column => { column.remove()});
    grids.forEach(grid => {grid.remove()});
    createDiv(userInput);
}

function getRandomColor(){
    const red = Math.floor(Math.random()*255)+1;
    const green = Math.floor(Math.random()*255)+1;
    const blue = Math.floor(Math.random()*255)+1;

    return `rgb(${red},${green},${blue})`;
}




const container = document.querySelector(".container");
const inputButton = document.createElement("button");
inputButton.addEventListener("click", getUserInput);
document.body.insertBefore(inputButton,container);
inputButton.textContent = "Generate Grid";


createDiv(16);