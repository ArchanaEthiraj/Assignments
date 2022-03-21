function indexOf(arr,index){
    for (let i=0; i < arr.length; i++) {
        if (arr[i] == index) {
      
          return i;
        }
      }
      return -1;
}
let arr3 = [1, 2];
indexOf(arr3, 10);
console.log(indexOf(arr3,10))