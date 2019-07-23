// question1   filter function

console.log("quesiton1  implement js array filter function")
Array.prototype.my_filter = function(fn){
	res = []
	for (i of this){
		if (fn(i) == true){
			res.push(i)
		}
	}
	return res
}


var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
function long_word(word){
	return word.length>6
}	

console.log(words.my_filter(long_word))
console.log(words.my_filter(word => word.length > 6))
console.log()

// below are just some test for the filter funciton

// var arr = [
//   { id: 15 },
//   { id: -1 },
//   { id: 0 },
//   { id: 3 },
//   { id: 12.2 },
//   { },
//   { id: null },
//   { id: NaN },
//   { id: 'undefined' }
// ];

// var invalidEntries = 0;

// function isNumber(obj) {
//   return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
// }

// function filterByID(item) {
//   if (isNumber(item.id) && item.id !== 0) {
//     return true;
//   } 
//   invalidEntries++;
//   return false; 
// }

// var arrByID = arr.my_filter(filterByID);

// console.log('Filtered Array\n', arrByID); 

// console.log('Number of Invalid Entries = ', invalidEntries); 	


// question2:  map function
console.log("question2  implement js array map function")
Array.prototype.my_map = function(fn){

	res = []
	for (i of this){
		res.push(fn(i))
	}
	return res
}
var array1 = [1, 4, 9, 16];
const map1 = array1.my_map(x => x * 2)
console.log(map1);
console.log()

// below are other test cases 
// var numbers = [1, 4, 9];
// var roots = numbers.my_map(Math.sqrt)
// console.log(roots)


// var kvArray = [{key: 1, value: 10}, 
//                {key: 2, value: 20}, 
//                {key: 3, value: 30}];

// var reformattedArray = kvArray.my_map(function(obj) { 
//    var rObj = {};
//    rObj[obj.key] = obj.value;
//    return rObj;
// });

// console.log(reformattedArray)
// console.log(kvArray)

// question3: reduce function
console.log("question3:  js array reduce function")

Array.prototype.my_reduce = function(fn,accumulator=0){
	for (i of this){
		accumulator=fn(accumulator,i)
	}
	return accumulator

}

const array2 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array2.my_reduce(reducer));
console.log(array2.my_reduce(reducer, 5));
console.log()

// other test cases
// console.log([0, 1, 2, 3, 4].my_reduce(function(accumulator, currentValue, currentIndex, array){
//   return accumulator + currentValue;
// },10))


// console.log([[0, 1], [2, 3], [4, 5]].my_reduce(
//   function(a, b) {
//     return a.concat(b);
//   },
//   []
// ))

// var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
// console.log(names.my_reduce(function (allNames, name) { 
//   if (name in allNames) {
//     allNames[name]++;
//   }
//   else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {}))



// question6 js bind function
console.log("question6 implement bind func")
//  不是很确定 bind 是怎么用的
Function.prototype.my_bind = function(context){

	var fn    = this, // the function to bind
    slice = Array.prototype.slice // cache slice method
    args  = slice.call(arguments, 1), // get the array of addtional arguments (to be curried)
    noop = function () {}, // the intermediate function to serve as a prototype chain connector
                           // (assuming we don't have Object.create() here)
    bound = function () {
        var ctx = this instanceof noop && context
            ? this
            : context
        return fn.apply(ctx, args.concat(slice.call(arguments)))
    }
    // inherit the prototype of the to-be-bound function
    noop.prototype = fn.prototype
    bound.prototype = new noop()
    return bound

};



this.x = 9;    // 在浏览器中，this指向全局的 "window" 对象
var module = {
  x: 81,
  getX: function() { return this.x; }
};

console.log(module.getX()); // 81

var retrieveX = module.getX;
console.log(retrieveX());   
// 返回9 - 因为函数是在全局作用域中调用的

// 创建一个新函数，把 'this' 绑定到 module 对象
// 新手可能会将全局变量 x 与 module 的属性 x 混淆
var boundGetX = retrieveX.my_bind(module);
console.log(boundGetX()); // 81


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
  while (end-start< time){
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


// second method for question7 
// x = 0
// function print2(list){
//   if(x<list.length){
//     i = list[x]
//     var value = i["Value"], time = i["Time"]

//     setTimeout(function(){
//       console.log("time used to print",value,":",time/1000,"s")
//           x++
//       print2(list)

//     },time)
      
//   }
// }

// print2(input)



// question4 debounce function

console.log("question4 implement debounce function")
function debounces(fn, wait) {

  var ready = true
  return function(){
  	if (ready){ 
	  	fn.apply(this, arguments)
	  	ready = false
	  	setTimeout(()=> ready=true,wait)
	}
	else return
  }

}

function alert(x){
	console.log(x)
}

let f = debounces(alert, 1000);

f(1); // runs immediately
f(2); // ignored

setTimeout( () => f(3), 100); // ignored ( only 100 ms passed )
setTimeout( () => f(4), 1100); // runs
setTimeout( () => f(5), 1500); // ignored (less than 1000 ms from the last run)

// question5 throttle function


// question 5 js throttle function
console.log("question5 implement throttle function")

function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}
function f1(a) {
  console.log(a)
};

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f1, 1000);

f1000(6); // shows 1
f1000(7); // (throttling, 1000ms not out yet)
f1000(8); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored



