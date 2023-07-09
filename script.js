// Assignment code here
function generatePassword() {
  var userPasswordLength = parseInt(prompt("Enter Password length?"))
  if (userPasswordLength < 8 || userPasswordLength > 128 || isNaN(userPasswordLength)) {
    return "Invalid length"
  }
  var userUpperCase = confirm("Do you want to have uppercase letters in your password?")

  var userLowerCase = confirm("Do you want to have lowercase letters in your password?")

  var userSpecialChara = confirm("Do you want to have special characters in your password?")

  var userNumbers = confirm("Do you want to have numbers in your password?")

  if (!userLowerCase && !userUpperCase && !userSpecialChara && !userNumbers) {
    return "Invalid password"
  }

  var allcharacters = []
  if (userLowerCase) {
    allcharacters += "abcdefghijklmnopqrstuvwxyz"
  }
  if (userUpperCase) {
    allcharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (userSpecialChara) {
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
