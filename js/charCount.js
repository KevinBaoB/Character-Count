exports.charCount = function (word) {
  let arr = [];
  word = word.split("");
  let uniqueArr = [...new Set(word.sort())].filter((w) => w != " ");

  for (let i of uniqueArr) {
    let charCount = 0;
    for (let j of word) {
      if (j === i) {
        charCount += 1;
      }
    }
    arr.push([i, charCount]);
  }
  return arr.sort((a, b) => b[1] - a[1]);
};

// console.log(charCount("aaabbc"));
// console.log(charCount("an apple a day will keep the doctor away"));
