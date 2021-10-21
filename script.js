debugger;

// Assignment code here
let lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let specials = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~"];


function generatePassword() {
  lowercaseCharacters = false;
  uppercaseCharacters = false;
  numberCharacters = false;
  specialCharacters = false;

  while (!lowercaseCharacters && !uppercaseCharacters && !numberCharacters && !specialCharacters) {
    let lowercaseCharacters = confirm("Lowercase?");
    let uppercaseCharacters = confirm("Uppercase?");
    let numberCharacters = confirm("Numbers?");
    let specialCharacters = confirm("Special?");

    if (lowercaseCharacters || uppercaseCharacters || numberCharacters || specialCharacters) {
      break;
    }
  }
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
