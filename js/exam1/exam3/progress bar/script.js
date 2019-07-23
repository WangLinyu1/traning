function move(){
	let elem = document.getElementById('bar')
	let width = 0
	// let a = setInterval(frame,30)
	// function frame(){
	// 	if(width<=100){
	// 		elem.style.width = width +"%"
	// 		width++
	// 	}
	// 	else{
	// 		clearInterval(a)
	// 	}
	// }
	
	function frame(width){
		if (width<=100){
			setTimeout(function(){
				elem.style.width = width+"%"
				width ++
				frame(width)
			},30)
			
		}
		

	}
	frame(width)
		

}
