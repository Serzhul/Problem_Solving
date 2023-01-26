const string = "abc";
const key = 52;

function caesarCipherEncryptor(string, key) {
  let ans = "";

  for (let i = 0; i < string.length; i += 1) {
    const charCode = string.charCodeAt(i);
    let shifted = charCode + key;
    if (shifted > 122) {
      while (shifted > 122) {
        shifted -= 26;
      }
      ans += String.fromCharCode(shifted);
    } else {
      ans += String.fromCharCode(shifted);
    }
  }
  return ans;
}

console.log(caesarCipherEncryptor(string, key));
