debugger;

// Assignment code here
let passwordCharacters = [];
let lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let specials = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~"];
let emptyPassword = "";

function generatePassword() {
  let passwordLength = window.prompt("Enter the desired password length.");
   if (passwordLength <= 8 || passwordLength >= 128) {
     alert("Please enter a number between 8 and 128.")
     return generatePassword();
   }

  lowercaseCharacters = false;
  uppercaseCharacters = false;
  numberCharacters = false;
  specialCharacters = false;

  while (!lowercaseCharacters && !uppercaseCharacters && !numberCharacters && !specialCharacters) {
    lowercaseCharacters = confirm("Lowercase");
    uppercaseCharacters = confirm("Uppercase?");
    numberCharacters = confirm("Numbers?");
    specialCharacters = confirm("Special?");

    if (lowercaseCharacters || uppercaseCharacters || numberCharacters || specialCharacters) {
      break;
    }
  }

  if (lowercaseCharacters) {
    passwordCharacters = passwordCharacters.concat(lowercaseLetters);
  }

  if (uppercaseCharacters) {
    passwordCharacters = passwordCharacters.concat(uppercaseLetters);
  }

  if (numberCharacters) {
    passwordCharacters = passwordCharacters.concat(numbers);
  }

  if (specialCharacters) {
    passwordCharacters = passwordCharacters.concat(specials);
  }

  for (let i = 0; i < passwordLength; i++) {
    const random = Math.floor(Math.random() * passwordCharacters.length);
    emptyPassword += passwordCharacters[random];
  }
  
  return emptyPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
