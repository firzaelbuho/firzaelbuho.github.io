"use strict";
window.addEventListener("load", loadPage);

function loadPage() {
  document.getElementById("decButton").addEventListener("click", decrypt);
}

function decrypt() {
  var matrix = fillMatrix();
  var ciphT = strip(document.getElementById("textC").value);
  var digrams = getDigrams(ciphT);
  var decryptedArray = [];
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


  if ( ciphT == "" ) {
    alert("Please input a text to be decrypted.")
  }
  else {

    for (var i = 0; i < digrams.length; i++) {

      letter1 = digrams[i][0];
      letter2 = digrams[i][1];

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

        if (letterPosition1 <= 4) { // If at the top of the column
          tempString += matrix[letterPosition1 + 20]; // go down
          tempString += matrix[letterPosition2 - 5]; // choose element above
        }
        else if (letterPosition2 <= 4) {
          tempString += matrix[letterPosition1 - 5];
          tempString += matrix[letterPosition2 + 20];
        }
        else {
          tempString += matrix[letterPosition1 - 5];
          tempString += matrix[letterPosition2 - 5];
        }
      }
      // if in the same row
      else if ( difference <= 4 && maxDistanceFromEdge > minDistanceFromEdge ) {

        //further verification (diagonal check)
        if (difference == 4) {

          if ( ((max + 1) % 5) == 0 ) {

            if ( ( (letterPosition1 + 1) % 5) == 0 ) {
              tempString += matrix[letterPosition1 - 1];
              tempString += matrix[letterPosition2 + 4];
            }
            else if ( ( (letterPosition2 + 1) % 5) == 0  ) {
              tempString += matrix[letterPosition1 + 4];
              tempString += matrix[letterPosition2 - 1];
            }
          }
        }
          else {

            if ( ( letterPosition1 + 1 ) % 5 == 0 ) {
              tempString += matrix[letterPosition1 - 1];
              tempString += matrix[letterPosition2 - 1];
            }
            else if ( ( letterPosition2 + 1 ) % 5 == 0 ) {
              tempString += matrix[letterPosition1 - 1];
              tempString += matrix[letterPosition2 - 1];
            }
            else if ( letterPosition1  % 5 == 0 ) {
              tempString += matrix[letterPosition1 + 4];
              tempString += matrix[letterPosition2 - 1];
            }
            else if ( letterPosition2  % 5 == 0 ) {
              tempString += matrix[letterPosition1 - 1];
              tempString += matrix[letterPosition2 + 4];
            }
            else {
              tempString += matrix[letterPosition1 - 1];
              tempString += matrix[letterPosition2 - 1];
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

        decryptedArray.push(tempString);
        tempString = "";
      }
    }

    document.getElementById("decT").innerHTML =
                        decryptedArray.toString().replace(/,/ig, " ");

  }
