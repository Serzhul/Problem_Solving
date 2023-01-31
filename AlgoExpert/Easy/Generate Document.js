const characters = "Bste!hetsi ogEAxpelrt x ";
const document = "AlgoExpert is the Best!";

function generateDocument(characters, document) {
  const charMap = {};

  [...characters].forEach((char) => {
    charMap[char] = charMap[char] + 1 || 1;
  });

  for (let i = 0; i < document.length; i += 1) {
    if (!charMap[document[i]]) return false;
    charMap[document[i]] -= 1;
  }

  return true;
}

console.log(generateDocument(characters, document));
