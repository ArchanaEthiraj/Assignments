// add whatever parameters you deem necessary - good luck!
function entries(obj){
    let result = []
    for(let key in obj){
result.push([key, obj[key]])
    }
return result;
}
let j = entries({ a: 1, b: 2, c: 3 });
console.log(j);