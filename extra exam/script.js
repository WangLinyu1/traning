function create_squares(num){
	result = document.createElement("div")
	result.setAttribute("class", "board")
	for(let i = 0; i<num;i++){
		row = document.createElement("div")
		row.setAttribute("class","row")
		for(let j = 0; j<num; j++){
			cell = document.createElement("div")
			cell.setAttribute("class","cell")
			// cell.innerHTML = 'M';
			row.appendChild(cell)
		}
		result.appendChild(row)
	}
	return result
}

container = document.querySelector(".container")
container.appendChild(create_squares(5))
cell = document.querySelector(".cell")
console.log(cell.style.height);