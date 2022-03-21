// add whatever parameters you deem necessary - good luck!
function twoHighest(arr) {
    let final = [null, null]
    arr.forEach(value => {
        if (value > final[0] && value <= final[1]) {
        final[0] = value
        }
        else if (value > final[1]) {
        let temp = final[1]
        final[1] = value
        final[0] = temp
        }
    })
return final
}
console.log(twoHighest([1, 2, 10, 8]));