// Assignment code here
function generatePassword() {
  var userPasswordLength = parseInt(prompt("Enter Password length?"))
  if (userPasswordLength < 8 || userPasswordLength > 128 || isNaN(userPasswordLength)) {
    return "Invalid length"
  }
  var userUpperCharacters = confirm("Do you want to have uppercase letters in your password?")

  var userLowerCharacters = confirm("Do you want to have lowercase letters in your password?")

  var userSpecialCharacters = confirm("Do you want to have special characters in your password?")

  var userNumbers = confirm("Do you want to have numbers in your password?")

  if (!userLowerCharacters && !userUpperCharacters && !userSpecialCharacters && !userNumbers) {
    return "Invalid password"
  }

  var allcharacters = []
  if (userLowerCharacters) {
    allcharacters += "abcdefghijklmnopqrstuvwxyz"
  }
  if (userUpperCharacters) {
    allcharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (userSpecialCharacters) {
    allcharacters += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }
  if (userNumbers) {
    allcharacters += "0123456789"
  }

  console.log(allcharacters)
  var password = ""
  for (let i = 0; i < userPasswordLength; i++) {
    var index = Math.floor(Math.random() * allcharacters.length)
    password += allcharacters[index] // password = password + allcharacters[index]
  }
  return password


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
