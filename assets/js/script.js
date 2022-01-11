// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");

// add event parameter to function
function writePassword(event) {
  // add preventDefault so page doesn't refresh
  event.preventDefault();

  // empty passwordText
passwordText.value = "";

  // create object
  // let objPwdGenerator = pwdGenerator;
  let objPwdGenerator = Object.create(pwdGenerator);
  // get the user criteria
  objPwdGenerator.inputGet();
  // validate the user criteria
  let errorMsg = objPwdGenerator.inputValidate();
  if (errorMsg.length > 0) {
    alert(errorMsg);
  } 
  else {
    // generate password
    objPwdGenerator.pwdCreate();
    // render password
    passwordText.value = objPwdGenerator.pwd;
  }
  // console.log(objPwdGenerator);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  //  object definition
  let pwdGenerator = {
    lowerAlphas: 'abcdefghijklmnopqrstuvwxyz',
    upperAlphas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: '0123456789',
    specialChars: ' `~!@#$%^&*()-_=+[{]}\\|\'";:/?.>,<',  // must escape the forward slash and single quote
    sourceString: '',
    pwd: '',
    // user input
    useUppers: true,
    useLowers: true,
    useNumbers: true,
    useSpecials: true,
    pwdLength: 0,

    inputGet: function() {
      // collect user input
      this.useUppers = confirm('Do you want upper case character?');
      this.useLowers = confirm('Do you want lower case character?');
      this.useNumbers = confirm('Do you want numbers?');
      this.useSpecials = confirm('Do you want special character?');
      this.pwdLength = prompt('Number of characters. Please enter an integer form 8 - 128:', "12");
    },
  
    inputValidate: function() {
      let err = "";
    // make sure user selected at least 1 char type
    if (this.useUppers || this.useLowers || this.useSpecials || this.useNumbers) {

      // test user input against regular expression of integers only and between 8 - 128
      if (this.pwdLength !== null && /^\d+$/.test(this.pwdLength) && this.pwdLength >= 8 && this.pwdLength <= 128) {
      } 
      else {
          err = 'Please enter an integer from 8 - 128';
      }
    } 
    else {
      err = 'Please select at least 1 character type.';
      }
    return err;
  },

  pwdCreate: function() {
 
    // concat sourceString based on user choices
        if (this.useLowers) {
          this.sourceString += this.lowerAlphas;
       }
   
       if (this.useNumbers) {
         this.sourceString += this.numbers;
       }
   
       if (this.useSpecials) {
         this.sourceString += this.specialChars;
       }
   
       if (this.useUppers) {
         this.sourceString += this.upperAlphas;
       } 


    // create password
    for (let i = 0; i < this.pwdLength; i++) {
      // get a random index based on the length of the string
        let x = Math.floor(Math.random() *  this.sourceString.length);
        // pull a character from the string based on the random index and add it to the string
        this.pwd += this.sourceString[x];
    }
  }
};