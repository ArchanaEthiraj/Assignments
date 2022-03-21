// add whatever parameters you deem necessary - good luck!
function stringLastIndexOf(str, char){
    for(let i = str.length; i >= 0; i--){
        if(str[i] == char){
            return i;
        }
    }
return -1;
}
let y = stringLastIndexOf('awesome', 'e')
console.log(y)