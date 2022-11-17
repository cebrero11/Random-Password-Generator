// Assignment code here
function lengthResponse(){
  lengthConditions = "Password must be at least 8 characters and at max 128.";
  passwordLength = prompt("What lenght do you want your password to be? \n"+lengthConditions);
  if (!Number.isInteger(parseInt(passwordLength))){
    alert("Input must be an integer!");
    return lengthResponse();
  } else if (passwordLength < 8 || passwordLength > 128){
    alert(lengthConditions);
    return lengthResponse();
  }
  return passwordLength;
  
}

function yesOrNoResponse(messageCharacters){
  promptMessage = "Would you like to include "+messageCharacters+ " characters? Enter yes or no."; 
  var response = prompt(promptMessage);
  if (response === 'yes') { 
    return true; 
  }
  else if (response === 'no'){
    return false; 
  } 
  else {
    alert("You did not enter yes or no. Please try again.");
    return yesOrNoResponse(messageCharacters);
  }

}
function newPassword(lower, upper, numbers, special, length) {
  wantedCharacters = ""; 
  
  if (!lower && !upper && !numbers && !special){
    alert("You must pick at least one of the options.");
    return generatePassword();
  }
  if (lower){
    wantedCharacters +="abcdefghijklmnopqrstuvwxyz";
  }
  if (upper){
    wantedCharacters +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numbers){
    wantedCharacters +="0123456789";
  }
  if (special){
    wantedCharacters +="~!@#$%^&+=-_?"; 
  }
  randompassword =""; 

  for (let i = 0; i < length; i++){
    randomElement =Math.floor(Math.random() * wantedCharacters.length); 
    randompassword +=wantedCharacters.substring(randomElement, randomElement+1);
  }
  return randompassword; 
  
}

function generatePassword() {
  var lowerCaseMessage = "lower case";
  lowerCaseInput = yesOrNoResponse(lowerCaseMessage);
  var upperCaseMessage = "upper case";
  upperCaseInput = yesOrNoResponse(upperCaseMessage);
  var numbersMessage = "number"; 
  numbersInput=yesOrNoResponse(numbersMessage);
  var specialMessage = "special";
  specialInput=yesOrNoResponse(specialMessage);
  var lengthInput = lengthResponse();

  return newPassword(lowerCaseInput, upperCaseInput, numbersInput, specialInput, lengthInput);
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
