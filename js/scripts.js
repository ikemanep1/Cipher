function chop(sentence) {
   var result = (sentence.charAt(0) + sentence.charAt(sentence.length-1));
   return result.toUpperCase();
};

function reverse(consoleResult) {
   return consoleResult.split("").reverse().join("");
}

function attach(consoleResult2, sentence) {
   return sentence.concat(consoleResult2);
}

function bounce(consoleResult3) {
   var letter = (consoleResult3.charAt(consoleResult3.length / 2));
   console.log(letter);
   return letter.concat(consoleResult3);
}

function superReverse(consoleResult4) {
    var consoleResult5 = consoleResult4.split("").reverse().join("");
    console.log(consoleResult5);
}

function conversion(sentence) {
    var consoleResult = chop(sentence);
    console.log(consoleResult);
    var consoleResult2 = reverse(consoleResult);
    console.log(consoleResult2);
    var consoleResult3 = attach(consoleResult2, sentence);
    console.log(consoleResult3);
    var consoleResult4 = bounce(consoleResult3);
    superReverse(consoleResult4);
}

$(document).ready(function() {
    var sentence = prompt("enter a sentence to be ciphered");
    conversion(sentence);
  });