// add whatever parameters you deem necessary - good luck!
function stringIndexOf(str, char){
for(let i = 0; i < str.length; i++){
if(str[i] == char){
return i;
}
}
return -1;
}
let u = stringIndexOf('awesome', 'e')
console.log(u)