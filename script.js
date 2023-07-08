// Assignment code here
function generatePassword(){
 var userPasswordLength =parseInt( prompt("Enter Password length?"))
 if (userPasswordLength < 8 || userPasswordLength > 128 || isNaN(userPasswordLength)){
  return "Invalid length"
 } 
 var userUpperCharacters = confirm("Do you like to have uppercase letters in your pasword?")

 var userLowerCharacters = confirm("Lowercase?")

 var userSpecialCharacters = confirm("Special?")

 var userNumbers = confirm("Numbers?")

 if (!userLowerCharacters && !userUpperCharacters && !userSpecialCharacters && !userNumbers) {
  return "Invalid password"
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
