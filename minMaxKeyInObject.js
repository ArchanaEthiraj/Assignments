// add whatever parameters you deem necessary - good luck!
function minMaxKeyInObject(obj) {
    let keys = Object.keys(obj);
  
    return [Math.min(...keys), Math.max(...keys)];
  }
  
  console.log(
    minMaxKeyInObject({2: 'a',7: 'b',1: 'c',10: 'd',4: 'e'}),
    minMaxKeyInObject({1: 'Elie',4: 'Matt',2: 'Tim'})
  );