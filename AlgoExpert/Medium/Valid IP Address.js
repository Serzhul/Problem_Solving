const string = "1921680";

// Solution1 : BruteForce 방식
// function isValidPart(string) {
//   const stringAsInt = parseInt(string, 10);
//   if (stringAsInt > 255) return false;

//   return string.length === stringAsInt.toString().length;
// }

// function validIPAddresses(string) {
//   const ipAddressesFound = [];

//   for (let i = 0; i < Math.min(string.length, 4); i += 1) {
//     const curIPAdressParts = ["", "", "", ""];

//     curIPAdressParts[0] = string.slice(0, i);

//     if (!isValidPart(curIPAdressParts[0])) continue;

//     for (let j = i + 1; j < i + Math.min(string.length - i, 4); j += 1) {
//       curIPAdressParts[1] = string.slice(i, j);
//       if (!isValidPart(curIPAdressParts[1])) continue;

//       for (let k = j + 1; k < j + Math.min(string.length - j, 4); k += 1) {
//         curIPAdressParts[2] = string.slice(j, k);
//         curIPAdressParts[3] = string.slice(k);

//         if (
//           isValidPart(curIPAdressParts[2]) &&
//           isValidPart(curIPAdressParts[3])
//         ) {
//           ipAddressesFound.push(curIPAdressParts.join("."));
//         }
//       }
//     }
//   }

//   return ipAddressesFound;
// }

function validIPAddresses(digits, octets = [], validIPs = []) {
  const numDigits = digits.length;
  const numGroup = octets.length;
  const maxRemain = 12 - numGroup * 3;
  const minRemain = 4 - numGroup;

  if (numDigits > maxRemain || numDigits < minRemain) return [];
  if (numDigits === 0) validIPs.push(octets.join("."));

  for (let i = 1; i <= Math.min(4, numDigits); i += 1) {
    const octet = digits.slice(0, i);
    const truncDigits = digits.slice(i);

    if (Number(octet) > 255) continue;
    if (octet.length > 1 && octet[0] === "0") continue;

    const addNewOctet = [...octets, octet];
    validIPAddresses(truncDigits, addNewOctet, validIPs);
  }

  return validIPs;
}

console.log(validIPAddresses(string));
