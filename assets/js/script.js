var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  size: 0,
  lowercase: 0,
  uppercase: 0,
  numeric: 0,
  special: 0
}

function writePassword() {
  criteriaPrompts ();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


var generatePassword = function() {
  var newPassword = "";
  for (i = 0; i < passwordCriteria.size; i++){
    var charType = randomNumber(1, 4);

    
    if (charType === 1 && passwordCriteria.lowercase === 1) {
      newPassword += genLowercase();
      console.log(newPassword);
    }
    else if (charType === 2 && passwordCriteria.uppercase === 1) {
      newPassword += genUppercase();
      console.log(newPassword);
    }
    else if (charType === 3 && passwordCriteria.numeric === 1) {
      newPassword += genNumeric();
      console.log(newPassword);
    }
    else if (charType === 4 && passwordCriteria.special === 1) {
      newPassword += genSpecial();
      console.log(newPassword);
    }
    
    else i--;
    
  }
  return newPassword;
}

var genLowercase = function() {
  return String.fromCharCode(97 + randomNumber(0, 25));
}

var genUppercase = function() {
  return String.fromCharCode(65 + randomNumber(0, 25));
}

var genNumeric = function() {
  return String.fromCharCode(48 + randomNumber(0, 9));
}

var genSpecial = function() {
  return String.fromCharCode(33 + randomNumber(0, 14));
}

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}

var criteriaPrompts = function() {
  
  while (passwordCriteria.size < 8 || passwordCriteria.size > 128) {
    passwordCriteria.size = window.prompt("How long should the password be? (8 - 128 characters)")
    if (passwordCriteria.size < 8 || passwordCriteria.size > 128) {
      window.alert ("Invalid choise, please choose between 8 and 128 characters!");
    }
  }

  while (passwordCriteria.lowercase === 0 && passwordCriteria.uppercase === 0 && passwordCriteria.numeric === 0 && passwordCriteria.special === 0) {
    var lowercaseConfirm = window.confirm("Will this password contain lowercase letters?");
    if (lowercaseConfirm) {
      passwordCriteria.lowercase = 1;
    }
    var uppercaseConfirm = window.confirm("Will this password contain uppercase letters?");
    if (uppercaseConfirm) {
      passwordCriteria.uppercase = 1;
    }
    var numericConfirm = window.confirm("Will this password contain numbers?");
    if (numericConfirm) {
      passwordCriteria.numeric = 1;
    }
    var specialConfirm = window.confirm("Will this password contain special characters?");
    if (specialConfirm) {
      passwordCriteria.special = 1;
    }
    if (passwordCriteria.lowercase === 0 && passwordCriteria.uppercase === 0 && passwordCriteria.numeric === 0 && passwordCriteria.special === 0){
      window.alert ("You must choose at least one criteria to include in your password!");
    }
    console.log(passwordCriteria);
  }
}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
} 

generateBtn.addEventListener("click", writePassword);
