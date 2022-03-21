function includes(value,index){
    for (let i = 0; i < value.length; i++) {
        if (value[i] ===index) {
          return true
        }   
      }
      return false 
    
}
let output5 = includes([1,2,3],1,2);
console.log(output5)