// add whatever parameters you deem necessary - good luck!
function countValues(arr, num){
    let count  = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == num)
        count ++;
    }
return count
}
let d = countValues([4,1,4,2,3,4,1], 1)
console.log(d)