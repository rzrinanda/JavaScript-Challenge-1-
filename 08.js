class Str {
  constructor(text) {
    text;
  }
  lower(str) {
    return str.toLowerCase();
  }
  upper(str) {
    return str.toUpperCase();
  }
  capitalize(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  reverse(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }
  contains(str, find) {
    if (typeof find == "string") {
      return str.indexOf(find) !== -1;
    } else {
      return find.some(function(v) {
        return str.indexOf(v) >= 0;
      });
    }
  }
  random(length = 16) {
    let chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }
  slug(str, replaceString = "-") {
    str = str.replace(/[^a-zA-Z0-9 ]/g, "");
    str = str.replace(/\s\s+/g, " ");
    str = str.replace(/\s+/g, replaceString);
    return str;
  }
  count(str) {
    return str.length;
  }
  countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    //convert 2 or more spaces to 1
    str = str.replace(/[ ]{2,}/gi, " ");
    // exclude newline with a start spacing
    str = str.replace(/\n /, "\n");
    return str.split(" ").length;
  }
  trim(str, startAt = 100, replaceWith = "...") {
    if (str.length < startAt) {
      return str;
    } else {
      return str.substr(0, startAt) + replaceWith;
    }
  }
  trimWords(str, numberOfWord = 30, replaceWith = "...") {
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    //convert 2 or more spaces to 1
    str = str.replace(/[ ]{2,}/gi, " ");
    // exclude newline with a start spacing
    str = str.replace(/\n /, "\n");
    if (str.split(" ").length < numberOfWord) {
      return str;
    } else {
      let strArray = str.split(" ");
      let newSentence = "";
      for (let i = 0; i < numberOfWord; i++) {
        if (i != 2) {
          newSentence += strArray[i] + " ";
        } else {
          newSentence += strArray[i];
        }
      }
      return newSentence + replaceWith;
    }
  }
}
const kata = new Str();
// console.log(kata.trimWords("Lorem ipsum dolor sit amet, ", 3, "..........."));
console.log(kata.lower("MAKAN"));
console.log(kata.upper("malam"));
console.log(kata.capitalize("saya ingin makan"));
console.log(kata.reverse("kasur"));
console.log(kata.contains("Saya ingin makan sate", "makan"));
console.log(kata.contains("Saya ingin makan sate", "rujak"));
console.log(kata.contains("Saya ingin makan sate", ["sate", "rujak"]));
console.log(kata.random());
console.log(kata.random(6));
console.log(kata.random(32));
const title = 'JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?'
console.log(kata.slug(title));
console.log(kata.slug(title, '_'));
console.log(kata.count('lorem ipsum'));
console.log(kata.countWords('lorem ipsum'));
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
console.log(kata.trim('Less than 100 characters'));
console.log(kata.trim(text));
console.log(kata.trim(text, 20));
console.log(kata.trim(text, 20, '·····'));
console.log(kata.trimWords('Less than 30 words'));
console.log(kata.trimWords(text));
console.log(kata.trimWords(text, 3));
console.log(kata.trimWords(text, 3, '·····'));
