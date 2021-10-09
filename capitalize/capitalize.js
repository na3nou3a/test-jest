function capitalize(str) {
 if (!str) return "string should be at least one character long!";

 let words = str.trim().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1));

 return words.join(' ');
}

module.exports = capitalize;