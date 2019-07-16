// qustion 1
let a  = [1,2,[3,4,[5,6,0]],4,[3,7],0]
function dfs(arr,res){
	for(let i = 0; i<arr.length;i++){
		if (typeof arr[i] === "number"){
			res.push(arr[i])
		}

		else{
			dfs(arr[i],res)
		}
	}

}
function flatten_dfs(arr){
	let res = []
	dfs(arr,res)
	return res

}


console.log(flatten_dfs(a))

function flatten_bfs(arr){
	let res = [], quene=arr
	while(arr.length){
		let pop = quene.shift(1)
		if (typeof pop === "number"){
			res.push(pop)
		}
		else{
			quene.push.apply(quene,pop)
		}
	}
	return res

}

console.log(flatten_bfs(a))


// question 2
var threeSum = function(nums) {
    res = []
    if(nums.length<3){
        return res
    }
    
    nums = nums.sort(function(a,b){
        return a - b
    });
    console.log(nums)
    for (let i = 0; i<nums.length-2; i++){
        if (nums[i]>0){
            return res
        }
        if(i>0 && nums[i] == nums[i-1]){
            continue
        }
		for (var j = i + 1, k = nums.length - 1; j < k;) {
            if(nums[i]+nums[j]+nums[k]===0){
                res.push([nums[i],nums[j],nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1]) {
					j++;
				}
				while (j < k && nums[k] == nums[k + 1]) {
					k--;
				}
			} 
            else if (nums[i] + nums[j] + nums[k] > 0) {
				k--;
			} 
            else {
				j++;
			}
            
        }
    }
    return res
};


// question 3
 function helper(arr,res,temp) {
    if (arr.length == 0){
        res.push(temp.slice())
        console.log(res)
        return
    }
    for (let i = 0; i < arr.length;i++){
        temp.push(arr[i])
        arr.splice(i,1)
        helper(arr,res,temp);
        arr.splice(i,0,temp.pop())
    }
 }
var permute = function(nums) {
    let res = [], temp = []
    helper(nums,res,temp)
    return res
    
};

// question4
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    var i = 1
    while(i<intervals.length){
        cur = intervals[i]
        prev = intervals[i-1]
        if (prev[1]>=cur[0]){
            intervals[i] = [Math.min(prev[0],cur[0]), Math.max(prev[1],cur[1])]
            intervals.splice(i-1,1)
            i--
        }
        i++
    }
    return intervals
};

// question5

var findMaxLength = function(nums) {
    
    max = 0
    count = 0
    table = {0:-1}
    for(var i = 0;i<nums.length;i++){
        if(nums[i]==0){
            count--
        }
        else{
            count++
        }
        
        if(count in table){
            max = Math.max(max,i-table[count])
        }
        else{
            table[count] = i
        }
    }
    return max
};

// question6:
var convert = function(s, numRows) {
    L = []
    for (var i  = 0; i<numRows;i++){
        L.push([])
    }
    j = 0
    while(j<s.length){
        for(var k = 0; k < numRows && j <s.length;k++){
            L[k].push(s[j])
            j++
        }
        
        for(var z = 0; z<numRows-2&& j <s.length;z++){
            L[numRows-z-2].push(s[j])
            j++
        }
    
        
    } 
    s = ""
    for (var i  = 0; i<numRows;i++){
        s+=L[i].join("")
    }
    return s
    
};

// question 7:
var find132pattern = function(nums) {
	if(nums.length<3){
        return false
    }	
    
    min = nums[0]
    j = 1
    while(j!=nums.length-1){
        if(nums[j]<min){
            min = nums[j]
        }
        else{
            for (var k = j+1;k<nums.length;k++){
                if(min<nums[k]&&nums[k]<nums[j]){
                    return true
                }
            }
        }
        j++
    }
    
    return false
    
};