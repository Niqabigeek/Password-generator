// Get the button element
var button = document.getElementById("password");
var demo = document.getElementById("get");
var generate = document.getElementById("getanother");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Generate a random password
  var password = Math.random().toString(36).slice(-8);

  // Display the password
  demo.innerHTML = password;
  
  
});

button.addEventListener("click", function() {
  // Generate a random password
  var password = Math.random().toString(36).slice(-8);

  // Display the password
  generate.innerHTML = password;
  
  
});










// function generatePassword(length) {
//     var password = "";
//     var possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
  
//     for (var i = 0; i < length; i++) {
//       password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
//     }
  
//     return password;
// }
  
// console.log(generatePassword(8));

