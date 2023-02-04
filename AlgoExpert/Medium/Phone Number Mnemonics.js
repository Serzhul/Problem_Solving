const phoneNumber = "1905";

const charMap = {
  0: ["0"],
  1: ["1"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

function phoneNumberMnemonics(
  phoneNumber,
  mnemonic = "",
  mnemonics = [],
  idx = 0
) {
  if (idx > phoneNumber.length - 1) {
    mnemonics.push(mnemonic);
    return mnemonics;
  }
  for (let i = 0; i < charMap[phoneNumber[idx]].length; i += 1) {
    const char = charMap[phoneNumber[idx]][i];
    phoneNumberMnemonics(phoneNumber, mnemonic + char, mnemonics, idx + 1);
  }

  return mnemonics;
}

console.log(phoneNumberMnemonics(phoneNumber));
