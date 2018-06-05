function createRows(grid, size = 16) {
  for(let rows = 0; rows < size; rows++) {
    const row = document.createElement("div")

    row.classList.add("row");
    row.style.cssText = `height: ${100 / size}%`;
    grid.appendChild(row);
    addCells(row, size)
  }
}

function addCells(row, size = 16) {
  for(let cells = 0; cells < size; cells++) {
    const cell = document.createElement("div")

    cell.classList.add("cell", cells.toString());//"cell_" + cells.toString()
    cell.style.cssText = `opacity: 0; width: ${100 / size}%`;
    cell.addEventListener("mouseover", blackHover)
    row.appendChild(cell)
  }
}

function blackHover() {
  this.style.background = "#000";
  if (this.style.opacity <1){
    this.style.opacity = parseFloat(this.style.opacity) + 0.2;
  }
}
//function colorHover() {
//const color =  "#" + Math.random().toString(16).slice(2, 8);
//this.style.background = color;
//if (this.style.opacity <1){
//  this.style.opacity = parseFloat(this.style.opacity) + 0.2;//
//}
//}

function multiColorHover() {
  const cells = document.querySelectorAll(".cell")
  cells.forEach(function(cell) {
    cell.addEventListener("mouseover", function(e) {
      const color =  "#" + Math.random().toString(16).slice(2, 8);
      console.log(color)
      this.style.background = color;
     // this.style.opacity = parseFloat(this.style.opacity) + 0.2;
    })
  })
}

function clearGrid() {
  const grid = document.querySelector(".grid")
  const size = prompt("What size would you like the new grid to be? (size x size)")

  grid.innerHTML = "";
   if (size >= 2) {
     createRows(grid, size)
     }
   else{
     createRows(grid, 16)
     }
}

document.querySelector(".knob_left").addEventListener("click", clearGrid)
//document.querySelector(".knob_center").addEventListener("click", colorHover)
document.querySelector('.knob_right').addEventListener("click", multiColorHover)

const grid = document.querySelector(".grid")
createRows(grid, 16)
//based on work from:
//http://htmlpreview.github.io/?https://github.com/KevinMulhern/etch_a_sketch/blob/master/index.html
