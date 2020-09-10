var khleeGreetings = ["hi~", "hello~", "good~"];
var customKhleeGreetings = [];
function khlee(inStr) {
  for (idx in khleeGreetings) {
    inStr = inStr.replace(khleeGreetings[idx], "****");
  }
  for (idx in customKhleeGreetings) {
     inStr = inStr.replace(customKhleeGreetings[idx], "****");
  }
  return inStr;
}
function addGreetingWord(word){
  customKhleeGreetings.push(word);
}
function getGreetingWords(){
  return khleeGreetings.concat(customKhleeGreetings);
}
exports.khlee = khlee;
exports.addGreetingWord = addGreetingWord;
exports.getGreetingWords = getGreetingWords;