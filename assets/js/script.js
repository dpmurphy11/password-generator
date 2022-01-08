// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // initialize variables
  const lowerAlphas = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlphas = lowerAlphas.toUpperCase();
  const numbers = '0123456789';
  // must escape the forward slash and single quote
  const specialChars = ' `~!@#$%^&*()-_=+[{]}\\|\'";:/?.>,<';
  let sourceString = '';
  let pwd = '';

  // collect user input
  let useUppers = confirm('Do you want upper case character?');
  let useLowers = confirm('Do you want lower case character?');
  let useNubers = confirm('Do you want numbers?');
  let useSpecials = confirm('Do you want special character?');
  let pwdLength = prompt('Number of characters. Please enter an integer form 8 - 128:', '');
    
  // User input validation
  // make sure user selected at least 1 char type
  if (useUppers || useLowers || useSpecials || useNubers) {

    // test user input against regular expression of integers only and between 8 - 128
    if (/^\d+$/.test(pwdLength) && pwdLength >= 8 && pwdLength <= 128) {

      // concat sourceString based on user choices
      if (useLowers) {
        sourceString += lowerAlphas;
      }

      if (useNubers) {
        sourceString += numbers;
      }

      if (useSpecials) {
        sourceString += specialChars;
      }

      if (useUppers) {
        sourceString += upperAlphas;
      } 

      // create password
      for (let i = 0; i < pwdLength; i++) {
        // get a random index based on the length of the string
        let x = Math.floor(Math.random() *  sourceString.length);
        // pull a character from the string based on the random index and add it to the string
        pwd += sourceString[x];
      }
    } else {
        alert('Please enter an integer from 8 - 128');
    }
  } else {
    alert('Please select at least 1 character type.');
    }
  return pwd;
}