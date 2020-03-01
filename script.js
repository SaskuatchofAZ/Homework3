// Assignment Code
var generateBtn = document.querySelector("#generate");

var lcLetters = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var ucLetters = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
var specialCharacters = "` ~ ! @ # $ % ^ & * ( ) - _ = + [ { } ] ; : ' < , > . ?  / |";
var numbers = "0 1 2 3 4 5 6 7 8 9";

var ucLettersArray = ucLetters.split(" ");
var lcLettersArray = lcLetters.split(" ");
var specialArray = specialCharacters.split(" ");
var numbersArray = numbers.split(" ");

var arrayArray = [];
var endPW = [];
var pwLength

function pwChoices() {
  var wanting = confirm("So you want to generate a new password?")

  if(wanting === true) {
    var longness = prompt("With numeric characters, how long would you like the password to be? (Must be between 8 and 128 characters)");
    pwLength = parseInt(longness);

    if (pwLength < 8 || pwLength > 128) {
      alert("Your desired password length is unacceptable, my apologies.");
      
    }

    else {
      var lcConf = confirm("Do you want lowercase characters?");
      var ucConf = confirm("Do you want uppercase letters?");
      var specConf = confirm("Do you want special characters?");
      var numConf = confirm("Do you want numbers?");

      if (lcConf === true) {
        arrayArray.push(lcLettersArray);

      }

      if (ucConf === true) {
        arrayArray.push(ucLettersArray);

      }

      if (specConf === true) {
        arrayArray.push(specialArray);

      }

      if (numConf === true) {
        arrayArray.push(numbersArray);

      }

      
      generatePassword();

      writePassword();

    };


  }
 
  else {
    alert("I guess you don't like security.")
  }

}


function generatePassword() {

  for(i=0; i<pwLength.length; i++) {

    var rngArrayNum = Math.floor(Math.random()*arrayArray.length);
    console.log(rngArrayNum);

    var rngChoice = Math.floor(Math.random()*arrayArray[rngArrayNum].length);
    console.log(rngChoice);
    var charChoice = arrayArray[rngArrayNum][rngChoice];
    console.log(charChoice);
    endPW.push(charChoice);
    console.log(endPW);
  }

  pwString = endPW.join("");
  console.log(pwString);
  return pwString;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", pwChoices);


