// add whatever parameters you deem necessary - good luck!
function isAlt(str) {

    function isVowel(c) {
      let vowels = ["a", "e", "o", "i", "u"];
      return vowels.includes(c);
    }
  
    for (i = 0; i < str.length - 1; i++) {
      if (isVowel(str[i]) == isVowel(str[i + 1])) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isAlt('apple'));
  console.log(isAlt('amazon'));