let input = [1, 2, 3, 4, -2, 5, -1];

function sumZero(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] === 0) {
        return [input[i], input[j]];
      }
    }
  }
}

let ans = sumZero(input);

console.log(ans);


function optimiseSumZero(input){
   let l=0;
   let right = input.length-1;
   while(l<right){
     if(input[l]+input[right]==0){
        return ([input[l],input[right]])
     }
     else if(input[l]+input[right]>0){
        right--;
     }
     else{
        l++;
     }
   }
}

let ans1 = optimiseSumZero(input);

console.log(ans1)