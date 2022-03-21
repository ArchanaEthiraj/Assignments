// add whatever parameters you deem necessary - good luck!
function max(array) {
    return array.reduce((prev, curr) => prev > curr ? prev : curr, undefined)
}

console.log(max([5, 1, 4, 7, 1, 2]))
console.log(max([3, 4, 12, 1, 8]))
console.log(max([-1, 6, 3, 2.2, -10, -4]))