"use strict";
window.addEventListener("load", setupPage);

function setupPage() {
  var encButton = document.getElementById("encButton");
  if (encButton != null) {
    encButton.addEventListener("click", encrypt);
  }
}

function strip(aString) {

  var splitString = "";

  for (var item in aString) {

    var letter = aString.charAt(item);

    // ignore whitespace and append to string
    if (letter.search(/\s|\W|\d/igm) == -1) {
      splitString += letter;
    }
  }
  return splitString;
}

function fillMatrix() {
  var userInput = window.sessionStorage.getItem("kw");
  var matrix = new Array(25);
  var matrixIndex = 0;
  var keyIndex = 0;
  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  // strip whitespace
  userInput = strip(userInput);
  userInput = userInput.toLowerCase();

  // Fill in the keyword
  while ( keyIndex < userInput.length ) {
    var letter = userInput.charAt(keyIndex);
    if ( matrix.indexOf(letter) == -1 ) {
      matrix[matrixIndex] = letter;
      matrixIndex++;
    }
    keyIndex++;
  }
      // Insert unique letters from the alphabet
      for (var item in alphabet) {
        var literal = alphabet.charAt(item);

        //check both uppercase and lowercase letters
        var letterNotInMatrix = (matrix.indexOf(literal) +
          matrix.indexOf(literal.toUpperCase()) == -2);

        // if the letter is not in the matrix (-1 + -1)
        if ( letterNotInMatrix   ) {
          // Skip i or j if already in matrix
          if ( (literal == "i" || literal == "I") && (matrix.indexOf("j") == -1 &&
                matrix.indexOf("J") == -1 ) ) {
                  matrix[matrixIndex] = literal;
                  matrixIndex++;
                }
          // replace j with i
          else if ( literal == "j" || literal == "J" &&
              (matrix.indexOf("i") == -1 && matrix.indexOf("I") == -1 ) ) {}
          else {
            matrix[matrixIndex] = literal;
            matrixIndex++;
          }
        }
      }
  return matrix;
}

function getDigrams(aString) {

  var count = 0;
  var input = aString.toLowerCase();
  var tempDigram = "";
  var textLength = input.length;
  var digramLength;
  var letter;
  var array = [];

  while (count < input.length) {

    digramLength = tempDigram.length;
    letter = input.charAt(count);

    if ( digramLength == 0 ) {
      tempDigram += letter;
    }
    else if ( digramLength == 1 ) {
      var str = tempDigram.charAt(0);
      if (  str == letter ) {
        tempDigram += "x";
        count--; // stay at the current char
      }
      else {
        tempDigram += letter;
        array.push(tempDigram);
        tempDigram = "";
      }
    }
    else {
      array.push(tempDigram);
      tempDigram = "";
      tempDigram += letter;
    }

    // check odd ending
    if ( textLength % 2 != 0 && count == input.length - 1
          && tempDigram.length % 2 != 0 ) {
      tempDigram += "x";
      array.push(tempDigram);
    }
    // check odd letters
    else if (count == input.length - 1 && tempDigram.length != 0) {
        tempDigram = letter + "x";
        array.push(tempDigram);
    }
    count++;
  }

  return array;
}

function encrypt() {
  var matrix = fillMatrix();
  var plainT = strip(document.getElementById("textP").value);
  var digrams = getDigrams(plainT);
  var encryptedArray = [];
  var tempString = "";
  var letter1;
  var letter2;
  var letterPosition1;
  var letterPosition2;
  var distance;
  var difference;
  var mod4Result;
  var mod5Result;
  var mod6Result;
  var offset;
  var min;
  var max;


  if ( plainT == "" ) {
    alert("Please input a text to be encrypted.");
  }
  else {

    for (var i = 0; i < digrams.length; i++) {

      letter1 = digrams[i][0];
      letter2 = digrams[i][1];

      // replace j with i
      if (letter1 == "j") {
        letter1 = "i"
      }
      else if (letter2 == "j") {
        letter2 = "i";
      }

      letterPosition1 = matrix.indexOf(letter1);
      letterPosition2 = matrix.indexOf(letter2);
      min = Math.min(letterPosition1, letterPosition2);
      max = Math.max(letterPosition1, letterPosition2);
      var minDistanceFromEdge = min % 5;
      var maxDistanceFromEdge = max % 5;
      difference = Math.abs(letterPosition1 - letterPosition2);
      mod4Result = difference % 4;
      mod5Result = difference % 5;
      mod6Result = difference % 6;

      // if in the same column
      if (mod5Result == 0) {

        if (letterPosition1 >= 20) { // If at the bottom of column
          tempString += matrix[letterPosition1 - 20]; // go up
          tempString += matrix[letterPosition2 + 5]; // choose element below
        }
        else if (letterPosition2 >= 20) {
          tempString += matrix[letterPosition1 + 5];
          tempString += matrix[letterPosition2 - 20];
        }
        else {
          tempString += matrix[letterPosition1 + 5];
          tempString += matrix[letterPosition2 + 5];
        }
      }
      // if in the same row
      else if ( difference <= 4 && maxDistanceFromEdge > minDistanceFromEdge ) {

        //further verification (diagonal check)
        if (difference == 4) {

          if ( ((max + 1) % 5) == 0 ) {

            if ( ( (letterPosition1 + 1) % 5) == 0 ) {
              tempString += matrix[letterPosition1 - 4];
              tempString += matrix[letterPosition2 + 1];
            }
            else if ( ( (letterPosition2 + 1) % 5) == 0  ) {
              tempString += matrix[letterPosition1 + 1];
              tempString += matrix[letterPosition2 - 4];
            }
          }
        }
          else {

            if ( ( letterPosition1 + 1 ) % 5 == 0 ) {
              tempString += matrix[letterPosition1 - 4];
              tempString += matrix[letterPosition2 + 1];
            }
            else if ( ( letterPosition2 + 1 ) % 5 == 0 ) {
              tempString += matrix[letterPosition1 + 1];
              tempString += matrix[letterPosition2 - 4];
            }
            else {
              tempString += matrix[letterPosition1 + 1];
              tempString += matrix[letterPosition2 + 1];
            }
          }
        }

        // diagonal part
        else {

          var counter = min;
          var rowD = 0;


          // if at the edge of matrix
          if ( (min + 1) % 5 == 0 || minDistanceFromEdge > maxDistanceFromEdge ) {
            /* loop till the desired column is reached */
            while ( Math.abs(counter - max) % 5 != 0 ) {counter--; rowD--;}
          }
          else{
            /* loop till the desired column is reached */
            while ( Math.abs(counter - max) % 5 != 0 ) {counter++; rowD++;}
          }

          if ( letterPosition1 == min ) {
            tempString += matrix[letterPosition1 + rowD];
            tempString += matrix[letterPosition2 - rowD];
          }
          else {
            tempString += matrix[letterPosition1 - rowD];
            tempString += matrix[letterPosition2 + rowD];
          }
        }

        encryptedArray.push(tempString);
        tempString = "";
      }
      document.getElementById("encT").innerHTML =
                        encryptedArray.toString().replace(/,/ig, " ");
    }

  }
