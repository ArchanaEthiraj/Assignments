// add whatever parameters you deem necessary - good luck!
function findTheDuplicate(arr){
    let count = {}
    for(let i = 0; i < arr.length; i++){
    if(arr[i] in count){
        count[arr[i]]++
    }
else{
    count[arr[i]] = 1;
}
} 
for(let key in count){
    if(count[key] > 1) return +key
  }
}
let a = findTheDuplicate([1,2,4,3,2,12,2])
console.log(a)