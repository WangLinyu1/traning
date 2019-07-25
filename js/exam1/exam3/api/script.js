
// fetch = require("node-fetch")
// // fetch('https://swapi.co/api/people/?search=darth')
// //   .then(response => response.json())
// //   .then(console.log);
let basic_url = "https://swapi.co/api/people?page=1"
let people = []
// // function autocomplete(people){
// // 	if(res.length!=0){
// // 		res = []
// // 	}
// // 	for(let i = 0;i<people.length;i++){
// // 			res.push(people[i]) 
// // 		} 
// // 	return res
// // }




function match(){
	fetch(basic_url)
	.then(res => res.json())
	.then(data => obj = data)
  	.then(function(){ 
	  		for(i of obj["results"]){
	  			people.push(i["name"])
	  		}
	  		// load_name()
	  		if(obj["next"]!=null){
	  			basic_url = obj["next"]
	  			load_name()
	  		}

  		}
	)
}
match()


function load_name(){
	var SW = new Bloodhound({
	datumTokenizer: Bloodhound.tokenizers.whitespace,
	queryTokenizer: Bloodhound.tokenizers.whitespace,
	// `states` is an array of state names defined in "The Basics"
	local: people
	});

	$('#bloodhound .typeahead').typeahead({
	hint: true,
	highlight: true,
	minLength: 1
	},
	{
	name: 'SW',
	source: SW
	});

}





// // var states = new Bloodhound({
// //   datumTokenizer: Bloodhound.tokenizers.whitespace,
// //   queryTokenizer: Bloodhound.tokenizers.whitespace,
// //   // `states` is an array of state names defined in "The Basics"
// //   local: states
// // });

// // $('#bloodhound .typeahead').typeahead({
// //   hint: true,
// //   highlight: true,
// //   minLength: 1
// // },
// // {
// //   name: 'states',
// //   source: states
// // });


