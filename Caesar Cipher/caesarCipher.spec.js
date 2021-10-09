const caesarCipher = require('./caesarCipher');

describe('caesarCipher function', ()=> {

 it('return same str', ()=> {
  expect(caesarCipher('hello world!', 0)).toBe('hello world!');
  expect(caesarCipher('hello world!', -5)).toBe('hello world!');
 });

 it('encrypte text', ()=> {
  expect(caesarCipher('hello world!', 5)).toBe('mjqqt btwqi!');
 });

 it('handle case', ()=> {
  expect(caesarCipher('Hello wOrlD!', 5)).toBe('mjqqt btwqi!');
 });

 it('encrypte with any positive key number', ()=> {
  expect(caesarCipher('Hello wOrlD!', 25)).toBe('gdkkn vnqkc!');
  expect(caesarCipher('Hello wOrlD!', 75)).toBe('ebiil tloia!');
 });
});