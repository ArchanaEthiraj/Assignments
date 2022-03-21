// add whatever parameters you deem necessary - good luck!
function countNumbers(arr){
    return arr.filter(val => !isNaN(parseInt(val))).length
}
console.log(countNumbers(['a','b','3','awesome','4']));