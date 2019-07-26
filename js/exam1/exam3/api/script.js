
// fetch = require("node-fetch")
// // // // fetch('https://swapi.co/api/people/?search=darth')
// // // //   .then(response => response.json())
// // // //   .then(console.log);

let basic_url = "https://swapi.co/api/people/?search="


// // // // function autocomplete(people){
// // // // 	if(res.length!=0){
// // // // 		res = []
// // // // 	}
// // // // 	for(let i = 0;i<people.length;i++){
// // // // 			res.push(people[i]) 
// // // // 		} 
// // // // 	return res
// // // // }
function fetch_more(url,people){
	fetch(url)
	.then(res => res.json())
	.then(data => obj = data)
  	.then(function(){ 
	  		for(i of obj["results"]){
	  			if(i in people){
	  				continue
	  			}
	  			else{
	  				people.push(i["name"])
	  			}
	  		}
	  		if(obj["next"]!=null){
	  			fetch_more(obj["next"])
	  		}
	  		else{
	  			change_list(people)
	  			console.log(people)
	  		}
	  	}
	)
}



function match(text){
	var people = []
	fetch(basic_url+text)
	.then(res => res.json())
	.then(data => obj = data)
  	.then(function(){ 
	  		for(i of obj["results"]){
	  			people.push(i["name"])
	  		}
	  		if(obj["next"]!=null){
	  			fetch_more(obj["next"],people)
	  		}
	  		else{
	  			change_list(people)
	  			console.log(people)
	  		}
	  		


  		}

	)
}

function change_list(p){
	elem = document.querySelector(".datalist")
	elem.innerHTML = ""
	for(i of p){
		let node = document.createElement("option"); 
       	let val = document.createTextNode(i); 
        node.appendChild(val); 
        elem.appendChild(node); 
	}
}


