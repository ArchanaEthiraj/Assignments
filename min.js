// add whatever parameters you deem necessary - good luck!
function min(arr){
    let i;
    let min = arr[0];
    for (i = 0; i<arr.length;i++){
        if(arr[i]<min)
        min = arr[i]
    }
    return min;
}
let k= min([-1, 6, 3, 2.2, -10, -4]);
console.log(k)