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

function sleep(time){
  var start = new Date().getTime()
  var end = new Date().getTime()
  while (end-start!= time){
    end = new Date().getTime()
  }
  return 
}


function printTasks(list) {
  var start = new Date().getTime()
  for (i of list){
    var value = i["Value"], time = i["Time"]
    // setTimeout(function()
    // {
    //   console.log(value)
    // },time)
    sleep(time)
    var end = new Date().getTime()
    console.log("time used to print",value,":",parseInt((end-start)/1000),"s")
  }
  return 

}

printTasks(input)
