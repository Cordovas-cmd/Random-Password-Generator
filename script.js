// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Seperate function to generate random PW based on user criteria choice
function generatePassword() {

  //Prompt to Enter desired length of password
  var length = Number(prompt("How many characters will your password be? Pick between 8 and 128"));

  //Confirms user chose a number between min and max
  if (length < 8 || length > 128) {
    alert("Invalid choice. Password must be between 8 and 128");
    location.reload()

  
  } else {   // Variables and conditional statements that log User choice and choose the criteria that apply to Generated password.
    var includeUpper = confirm("Would you like to include uppercase letters?");
    var includeLower = confirm("Would you like to include lower case letters?");
    var includeNumber = confirm("Would you like to include Numerical characters?");
    var includeSpecial = confirm("Would you like to include special characters?");
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var number = "0123456789";
    var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var charChoice = "";
  }
  // If User chose to include at least one or all of the criteria.

  if (includeUpper) {
    charChoice += upper;
  }
  if (includeLower) {
    charChoice += lower;
  }
  if (includeNumber) {
    charChoice += number;
  }
  if (includeSpecial) {
    charChoice += special;
  }

  // If user Chose No to all Criteria They must start over and Choose yes to at least one.
  if (charChoice == "") {
    alert("Password must include at least one character option. Press OK to refresh the page and start over.")
    location.reload();
  }

  do {
    // Variable and statements that will Generate New Password based on User Criteria Choice.
    var newPassword = "";
    for (var i = 0; i < length; i++) {
      //picks random characters within the selected criteria category based on LENGTH set by user
      newPassword += charChoice.charAt(Math.floor(Math.random() * charChoice.length));
    }
    console.log(newPassword)
    var hasLower = false;
    var hasUpper = false;
    var hasNumber = false;
    var hasSpecial = false;

    for (var i = 0; i < newPassword.length; i++) {
      var char = newPassword[i];

      if (lower.includes(char)) {
        hasLower = true;
      } else if (upper.includes(char)) {
        hasUpper = true;
      } else if (number.includes(char)) {
        hasNumber = true;
      } else if (special.includes(char)) {
        hasSpecial = true;
      }
    }
  } while (
    (includeLower && !hasLower) ||
    (includeUpper && !hasUpper) ||
    (includeNumber && !hasNumber) ||
    (includeSpecial && !hasSpecial)
  )

  // return newPassword;
  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
