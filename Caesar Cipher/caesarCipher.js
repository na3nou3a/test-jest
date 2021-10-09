function caesarCipher(str, n) {
 const alphabet = 'abcdefghijklmnopqrstuvwxyz';
 const alph = alphabet; // copy
 if (n <= 0) return str;
 if (n > 0) n = n % 26;
 
 const enAlphabet = alph.slice(n) + alph.slice(0, n);
 let array = [];
 for (let i = 0; i < str.length; i++){
  let index = alphabet.indexOf(str[i].toLowerCase());
  if (index >= 0) {
   array.push(enAlphabet[index]);
  }else {
   array.push(str[i]);
  }
 }
 return array.join("");
}

module.exports = caesarCipher;