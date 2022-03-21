// add whatever parameters you deem necessary - good luck!
function values(obj){
    const keys = Object.keys(obj);
    let values = [];
    keys.forEach(key =>{values.push(obj[key]);});
    return values;
}
let obj = { a: 1, b: 2, c: 3 };
console.log(values(obj));