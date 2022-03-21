// add whatever parameters you deem necessary - good luck!
function repeat(arr, num){
    let sum = ''
for(let i = 0; i < num; i++){
    sum = sum.concat(arr); 
}
return sum;
}
console.log(repeat('Matt ', 3))