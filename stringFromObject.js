// add whatever parameters you deem necessary - good luck!
function stringFromObject(obj) {
    return Object.entries(obj)
      .map(([key, val]) => `${key} = ${val}`)
      .join(', ');
  }
  
  console.log(stringFromObject({ a: 1, b: '2' }))