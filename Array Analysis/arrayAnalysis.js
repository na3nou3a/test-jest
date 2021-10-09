function arrayAnalysis(arr) {
 if (arr.length <= 0) return 'The array can not be empty!'; 
 for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== 'number') {
   return 'The array must contain only numbers!';
  }
 }
 return ({
  min: Math.min(...arr),
  max: Math.max(...arr),
  length: arr.length,
  average: arr.reduce((prev, next) => prev + next, 0) / arr.length
 });
}

module.exports = arrayAnalysis;