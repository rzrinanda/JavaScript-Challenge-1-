//Combine several arrays
//Combine all content inside this arrays into readable sentence.
const first = ["Behind", "every", "great", "man"];
const second = ["is", "a", "woman"];
const third = ["rolling", "her", "eyes"];
let sentence = `${first.join(" ")} ${second.join(" ")} ${third.join(" ")}`;
console.log(sentence);
