//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker/

function palindrome(str) {
  // Good luck!
  return true;
}



palindrome("eye");



function formatStringInAlphanumeric(str) {
return str.toLowerCase().replace(/[\W^_]*/g, '');
}

function getSecondHalfString(str) {
const halfIndex = Math.round(str.length / 2);
return str.slice(halfIndex);
}

function reverseString(str) {
return str
.split("")
.reverse()
.join("");
}

function matchStrings(head, leasts) {
return head.startsWith(leasts);
}

function palindrome(str) {
const formatedStr = formatStringInAlphanumeric(str);
const secondeHalf = getSecondHalfString(formatedStr);
const secondeHalfReversed = reverseString(secondeHalf);
return matchStrings(formatedStr, secondeHalfReversed);
}

function palindrome(str) {
 const formatedStr = formatStringInAlphanumeric(str);
 const reversedStr = reverseString(formatedStr);
 return formatedStr === reversedStr;
 // const secondeHalf = getSecondHalfString(formatedStr);
 // const secondeHalfReversed = reverseString(secondeHalf);
 // return matchStrings(formatedStr, secondeHalfReversed);
}

palindrome("_eye");