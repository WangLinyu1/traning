let states = [
    'CA',
    'AZ',
    'WA',
    'NY',
    'OR',
    'TX',
    'TS',
    'ML',
    'MX'
  ];

let n = states.length
function match(value){
	// console.log(document.getElementById("datalist").innerHTML)
	elem = document.querySelector('.datalist')
    elem.innerHTML = ""
	for(let i = 0;i<n;i++){
		if(((states[i].toLowerCase()).indexOf(value.toLowerCase()))>-1){
			let node = document.createElement("option"); 
           	let val = document.createTextNode(states[i]); 
            node.appendChild(val); 
            elem.appendChild(node); 
		} 
	}
}

