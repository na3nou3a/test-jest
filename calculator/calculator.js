const add = (a,b=0)=> {
 if (typeof a !== 'number' || typeof b !== 'number') return 'arguments type must be "number"!';
 return a + b;
};
const sub = (a,b=0)=> {
 if (typeof a !== 'number' || typeof b !== 'number') return 'arguments type must be "number"!';
 return a - b;
};
const mul = (a,b=1)=> {
 if (typeof a !== 'number' || typeof b !== 'number') return 'arguments type must be "number"!';
 return a * b;
};
const dev = (a,b=1)=> {
 if (typeof a !== 'number' || typeof b !== 'number') return 'arguments type must be "number"!';
 return a / b;
};

module.exports = {add, sub, mul, dev};