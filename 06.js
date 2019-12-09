//Censoring Words
const words = ['dolor', 'elit', 'quis', 'nisi', 'fugiat', 'proident', 'laborum'];
const paragraph = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

function censore(string, filters) {
  var regex = new RegExp(filters.join("|"), "gi");
  // console.log(regex);
  return string.replace(regex, function (match) {
      //replace each letter with a star
      var stars = '';
      for (var i = 0; i < match.length; i++) {
          stars += '*';
      }
      return stars;
  });
}
var censored = censore(paragraph, words);
console.log(censored);