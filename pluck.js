// add whatever parameters you deem necessary - good luck!
function pluck(arr, key){
    let array = [];
    for(let i = 0; i < arr.length; i++){
        array.push(arr[i][key]);
    }
    return array;
}
    console.log(pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name'))