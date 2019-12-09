//Count words
const paragraph = "Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La...la...la... Aku sayang sekali Doraemon La...la...la... Aku sayang sekali";
const countWord = (word, paragraph) => {
  let words = paragraph.split(' ');
  let found = 0;
  for(let i = 0;i<words.length;i++){
    if(words[i] === word){
      found++;
    }
  }
  return found;
}
let words = paragraph.split(' ');
let aku = countWord('aku', paragraph.toLowerCase());
let ingin = countWord('ingin', paragraph.toLowerCase());
let dapat = countWord('dapat', paragraph.toLowerCase());
console.log(aku);
console.log(ingin);
console.log(dapat);