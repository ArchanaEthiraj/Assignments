// add whatever parameters you deem necessary - good luck!
function squareEvenNumbers(arr){
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
        sum += Math.pow(arr[i], 2);
        }
      }
      return sum
    }
let r = squareEvenNumbers([1, 2, 3, 4, 5]);    
console.log(r)