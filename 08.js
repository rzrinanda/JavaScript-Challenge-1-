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
  random() {}
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
      let newSentence = '';
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
console.log(kata.trimWords("Lorem ipsum dolor sit amet, ", 3, "..........."));
