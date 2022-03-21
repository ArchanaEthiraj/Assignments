// add whatever parameters you deem necessary - good luck!
function slice(arr, num1, num2){
    let array = [];
    if(num2 === undefined || num2 > arr.length){
        num2 = arr.length
    }
    for(let i = num1; i < num2; i++){
        array.push(arr[i]);
    }
    return array;
}
console.log(slice([1, 2, 3, 4, 5], 0, 2));