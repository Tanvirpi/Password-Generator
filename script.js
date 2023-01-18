// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  const passwordLength = parseInt(prompt("What is the Length of your Password?"))
  if (passwordLength < 8 || passwordLength > 126 || isNaN(passwordLength)) {
    return "Invalid";
  } else {
    var validUpper = confirm("Do you like to have Uppercase letters in your password?")

    let validCharacters = []
    if (validUpper) {
      validCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ" // validCharacters = validCharacters + "A..."
    }

    var validLower = confirm("Do you like to have Lowecase in your password?")
    if (validLower) {
      validCharacters += "abcdefghijklmnopqrstuvwxyz" // validCharacters = validCharacters + "A..."
    }
    var validNumber = confirm("Do you like to have number in your password?")
    if (validNumber) {
      validCharacters += "0123456789"
    }
    var validSymbol = confirm("Do you like to have special characters in your password?")
    if (validSymbol) {
      validCharacters += "!@#$%^&*()"
    }
      if (validCharacters.length === 0) {
        return "Invalid";
      }
    console.log(validCharacters);

    var password = "";
    for (let i = 0; i < passwordLength;i++ ){
      var index = Math.floor(Math.random()*validCharacters.length)
      password += validCharacters[index]
    }
    return password
  }
  console.log(passwordLength);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


