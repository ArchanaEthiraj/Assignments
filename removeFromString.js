// add whatever parameters you deem necessary - good luck!

function removeFromString(str, start, removeCount) {
    let arr = str.split('');
    arr.splice(start, removeCount);
    return arr.join('');
}