

// Annagram strings....
// "hello" -> "lleho"

// 1. length is equal for both
// 2. all character should be same

let str1 = "parrul";
let str2 = "parrrl";
function checkAnnagram(str1,str2){
    if(str1.length!=str2.length){
        return "Not a annagram!"
    }

      let bag = {};
    for(let letter of str1){
       bag[letter] = (bag[letter] || 0 ) +1 ;
    }

for(let key of str2){
    if(!bag[key]){
        return "Not a annagram!"; 
    }else{
        bag[key]-=1;
    }
}
return "Annagram!"
}

let ans = checkAnnagram(str1,str2);

console.log(ans);