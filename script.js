
//Create grids based on the user's input
//User input determines the number of rows, and number grids for each row 
function createDiv(userInput){
    //Loop through to create rows based on userInput
    for(let i = 1; i <= userInput; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        // Loop through to create grids in each row based on userInput
        for(let j = 1; j <= userInput; j++ ){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            row.appendChild(grid);
        }
        
    }
    //Adds random colors and increasing opacity to each grid when mouse id hovered
    const grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = getRandomColor();
        grid.style.opacity = parseFloat(grid.style.opacity || 0.1) + 0.1;
    });
})
}

// Prompt for user input to determine the number of rows and grids per row
function getUserInput(){
    let userInput = Number(prompt("How many squares per side?"));
    if (isNaN(userInput) || userInput < 1 || userInput > 100){
        alert("Please enter a valid number between 1 and 100. Using default value of 16.");
        userInput = 16;
    }
    // Remove existing rows and grids to reset the container before creating a new grid layout
    const grids = document.querySelectorAll(".grid");
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => { row.remove()});
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