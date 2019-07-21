console.log("question7")
let input = [{
  Value: "a",
  Time: 2000
},
{
  Value: "b",
  Time: 1000
},
{
  Value: "c",
  Time: 3000
}]

x = 0
function print2(list){
	if(x<list.length){
		i = list[x]
		var value = i["Value"], time = i["Time"]

		setTimeout(function(){
			console.log("time used to print",value,":",time/1000,"s")
    			x++
    	print2(list)

		},time)
    	
	}
}

print2(input)