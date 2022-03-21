// add whatever parameters you deem necessary - good luck!
function totalCaps (arr) { 
    let count=0; 
    let capWords = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    for (var i=0; i<arr.length; i++) { 
        for (var j=0; j < arr[i].length; j++) { 
          if (capWords.includes(arr[i][j])) { 
                count ++; 
              } 
      } 
      
    } 
     return count; 
  } 
  console.log(totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"]))