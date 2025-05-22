const container = document.createElement("div");
container.id = "top_container";
document.body.appendChild(container);

const grid_size = document.createElement("button")
grid_size.id = "grid_button";
grid_size.textContent = "set Grid"
document.body.appendChild(grid_size);

const setGridSize = () => {
    let value = parseInt(prompt(" Enter the size of the grid"));
    if(isNaN(value) || value <= 0 || value > 100){
        alert("Value shall be between 0 and 100");
    }
    container.innerHTML = "";
    
for (let i = 0; i < Math.pow(value,2); i++) {
    const square = document.createElement("div");
    square.classList.add("grid_square");

    const squareSize = (480/value) + "px";

        square.style.width = squareSize;
        square.style.height = squareSize;

    container.appendChild(square);
    square.addEventListener("mouseover",function(e) {
        e.target.style.backgroundColor = changeColor();
    });
  }
}
grid_size.addEventListener("click", setGridSize);

 function changeColor(){
 return randomBackgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
}








