
var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var lowerSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
  var selectedArray = [];


  if (lowerCase) {
    selectedArray = selectedArray.concat(lowerSet);
  }
  if (upperCase) {
    selectedArray = selectedArray.concat(upperSet);
  }
  if (numericCharacters) {
    selectedArray = selectedArray.concat(numSet);
  }
  if (specialCharacters) {
    selectedArray = selectedArray.concat(specSet);
  }

  var passwordString = "";
  for (var i = 0; i < passwordLength; i++) {
    passwordString += selectedArray[Math.floor(Math.random() * (selectedArray.length))];
  }

  return passwordString;
}

var passwordLength = getPasswordLength();

var charTypeSelected = false;
while (charTypeSelected == false) {
  var lowerCase = getChoice("lowercase");
  var upperCase = getChoice("uppercase");
  var numericCharacters = getChoice("numeric");
  var specialCharacters = getChoice("special");
  if ((lowerCase) || (upperCase) || (numericCharacters) || (specialCharacters)) {
    charTypeSelected = true;
  } else {
    window.alert("ERROR: Must use atleast one character type.")
  }
}

function getPasswordLength() {
  var userChoice = 0;
  while ((userChoice < 8) || (userChoice > 128)) {
    userChoice = parseInt(window.prompt("Enter the number of characters between 8 and 128: "));
    if (isNaN(userChoice)) {
      userChoice = 0;
    }
  }

  return userChoice;
}

function getChoice(currentOption) {
  var userChoice = "a",
    messagePrompt = "";
  var messagePrompt = ('Would you like '.concat(currentOption));
  messagePrompt = messagePrompt.concat(' characters (y/n)?');
  while (userChoice = "a") {
    userChoice = (window.prompt(messagePrompt));
    userChoice = userChoice.toLowerCase();
    if (userChoice == "y") {
      return true;
    } else if (userChoice == "n") {
      return false;
    }
  }
}

