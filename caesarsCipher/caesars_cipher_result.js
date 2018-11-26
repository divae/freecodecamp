//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher/
/*
  SolutionBy{
      divae ,
      saruba ,
      Lluis Guirado
  }
*/

const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const output = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
const descifrarChar = actualValue => output[input.indexOf(actualValue)] || actualValue

function rot13(input_code) {
  /* return str.split('').reduce(function (acumulador, actualValue, indice, vector) {
    acumulador += output[input.indexOf(actualValue)] || actualValue;
    return acumulador;
  }, '');*/

   return input_code
    .split('')
    .map(descifrarChar)
    .join('');
}

// Change the inputs below to test
rot13("SERR YBIR?");