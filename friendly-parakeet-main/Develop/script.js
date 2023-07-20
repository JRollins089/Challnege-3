// Assignment code here
var password=document.getElementById("password")

// Write password to the #password input
function generatePassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var passwordLength = 8
  var password ="";
for (var i = 0; i <= passwordLength; i++){
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1)
  }
      document.getElementById("password").value = password;
}
