//palindrome
function palindrome(str) {
//   var re = /[\W_]/g;
//   var lowRegStr = str.toLowerCase().replace(re, "");
  var lowRegStr = str.toLowerCase();
  var reverseStr = lowRegStr
    .split(" ")
    .reverse()
    .join(" ");
//   return reverseStr === lowRegStr;
  return reverseStr;
}
const string1 = "ibu ratna antar ubi";
const string2 = "kasur ini rusak";
const result1 = palindrome(string1).split(' ');
const result2 = palindrome(string2).split(' ');
console.log(result1);
console.log(result2);
