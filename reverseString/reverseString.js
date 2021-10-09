function reverseString(str) {
 if (!str) return "string should be at least one character long!";

 return str.split('').reverse().join('');
}

module.exports = reverseString;