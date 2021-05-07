var singleNumber = function(nums) {
    
    let res = nums[0];
    for(var i = 1; i < nums.length; i++){
      res = res  ^ nums[i];
     
    }
    console.log("unique number is "+res)
    
};

console.log(singleNumber([2,2,4]))