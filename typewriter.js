const sentence = "hello there from lighthouse labs";
let ms = 0;
let charCount = 0;
const length = sentence.length;
for (const char of sentence) {
  setTimeout(()=> {
    process.stdout.write(char);
    charCount += 1;
    if (charCount === length) {
      process.stdout.write('\n');
    }
  }, ms += 50);
}