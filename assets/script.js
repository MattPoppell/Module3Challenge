// Assignment Code
var specialChars= ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var alphaLower= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers= [0,1,2,3,4,5,6,7,8,9,];
var alphaUpper = alphaLower.map(x => x.toUpperCase());
var workingP=[]

function createPassword() {
 var howMany = parseInt(prompt("How many characters would you like your password to contain?"));
  if (howMany < 8 || howMany > 128) {
    alert("Please try again.")
  return
  
  } 
    var numbersConfirm= confirm("Would you like to include numbers?")
    var specCharsConfirm= confirm("Would you like to use special characters?")
    var upperCaseConfirm= confirm("Would you like to use capital letters?")
    var lowerCaseConfirm= confirm("Would you like to use lower case letters?")
  
  
  if (!specCharsConfirm && !upperCaseConfirm && !numbersConfirm && !lowerCaseConfirm) {
    alert("You gotta choose something! Refresh and try again.")
    return
  }

     if (specCharsConfirm) {
      workingP= workingP.concat(specialChars)
     } 
     if (upperCaseConfirm) {
      workingP= workingP.concat(alphaUpper)
     }
      if (numbersConfirm) {
        workingP=workingP.concat(numbers)
      }
      if (lowerCaseConfirm) {
        workingP=workingP.concat(alphaLower)
      }
    var response= {
      howMany: howMany,
      workingP: workingP,
    }
  
   return response

  }



  function generatePassword () {
    var responseEL= createPassword()
    console.log (responseEL)
    var password=""
    
    
   for (i=0; i < responseEL.howMany; i++) {
    password += responseEL.workingP[Math.floor(Math.random()*responseEL.workingP.length)]

    }
    console.log(password) 
    return (password)
  }
  
  

var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword)
  