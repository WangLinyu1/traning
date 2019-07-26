function move(){
	let elem = document.querySelector('.bar')
	let width = 0
	let a = setInterval(frame,30)
	function frame(){
		if(width<=100){
			elem.style.width = width +"%"
			width++
		}
		else{
			clearInterval(a)
		}
	}
	
	// function frame(width){
	// 	if (width<=100){
	// 		setTimeout(function(){
	// 			elem.style.width = width+"%"
	// 			width ++
	// 			frame(width)
	// 		},30)
			
	// 	}
		

	// }
	// frame(width)
		

}
move()



// bellow is the solotion from chao

// function move(container,mdoel){
// 	function render(data){
// 		var inner_element = container.querySelector(".bar")
// 		inner_element.style.width = data +"%"
// 	}
// 	container.innerHTML = '<div class="bar"></div>'
// 	model.subscribe(render);
    
//     render();


// }


// function model(){
//     var _subscriber,
//         _data = 0,
//         _SPEED = 100,
//         _interval;
        
//     function _updateData(){
//         // keep updating _data;
//         _data += 10;
        
//         _data = _data > 100 ? 100 : _data;
//         _subscriber(_data);
      
//         if(_data >= 100){
//             clearInterval(_interval);
//         }
//     }
    
//     _interval = setInterval(_updateData, _SPEED);
    
//     return {
//         subscribe: function(cb){
//             if(!_subscriber) _subscriber = cb;
//         }
//     }
// }

// var progressBarContainer = document.querySelector('.progress');
// var model = model();
// var progressView = move(progressBarContainer, model);

// // question: 把所有var 改成let 之后   出现了model() undifined error
//    what is the difference between let and var.
