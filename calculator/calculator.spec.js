const calculator = require('./calculator');

describe('calculator object', ()=>{

const error= 'arguments type must be "number"!';

it('return string error when no argument', ()=>{
  expect(calculator.add(2, 'a')).toBe(error);
  expect(calculator.sub('a', 2)).toBe(error);
  expect(calculator.dev('v', 'a')).toBe(error);
  expect(calculator.mul(2, 'a')).toBe(error);
});

 it('add numbers', ()=>{
  expect(calculator.add(1, 0)).toBe(1);
 });



 it('subtract numbers', ()=>{
  expect(calculator.sub(5, 2)).toBe(3);
  expect(calculator.sub(2, 5)).toBe(-3);
 });

 it('multiply numbers', ()=>{
  expect(calculator.mul(5, 4)).toBe(20);
  expect(calculator.mul(5, -4)).toBe(-20);
  expect(calculator.mul(-5, -4)).toBe(20);
 });

 it('devide numbers', ()=>{
  expect(calculator.dev(5, 2)).toBe(2.5);
 });

 it('can take only one argument', ()=>{
  expect(calculator.add(5)).toBe(5);
  expect(calculator.sub(5)).toBe(5);
  expect(calculator.mul(5)).toBe(5);
  expect(calculator.dev(5)).toBe(5);
 });
});