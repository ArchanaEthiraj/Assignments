// add whatever parameters you deem necessary - good luck!
function multiples(num1, mul){
    const sum = [];
for(let i = 1; i <= mul; i++){
sum.push(i * num1)
}
return sum
}
let m = multiples(3, 4)
console.log(m)