function chop(sentence) {
   var result = (sentence.charAt(0) + sentence.charAt(sentence.length-1));
   consoleResult = result.toUpperCase();
   console.log(consoleResult);
};

function reverse(consoleResult) {
    consoleResult2 = consoleResult.split("").reverse().join("");
    console.log(consoleResult2);
}

function conversion(sentence) {
    chop(sentence);
    reverse(consoleResult);
    return sentence.concat(consoleResult2);
}

$(document).ready(function() {
    var sentence = prompt("enter a sentence to be ciphered");
    console.log(sentence);
    conversion(sentence);
    console.log(conversion(sentence));
  });