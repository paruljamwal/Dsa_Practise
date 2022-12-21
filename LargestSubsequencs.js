

function subsequencSum(arr,num){
    let max = 0;
    if(num > arr.length){
        throw new  Error("num should be less than arr length !")
    }
    else{
        for(let i=0 ; i<arr.length - num +1 ; i++){
           let temp = 0;
            for(let j=0 ; j<num ; j++){
                temp += arr[i+j];
            }
            if(temp > max){
                max = temp ;
            }
        }
    
        return max ;

    }

}

let ans = subsequencSum([1,2,3,4,5,6,7,8,9,10],11);
console.log(ans);