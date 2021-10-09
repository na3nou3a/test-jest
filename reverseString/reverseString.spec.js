const reverseString = require("./reverseString");
describe("reverseString function", () => {

  it("shoudn't take empty string", () =>{
    expect(reverseString("")).toBe("string should be at least one character long!");
  });

  it("it should reverse a string", () => {
    expect(reverseString("hello world!")).toBe("!dlrow olleh");
  });

  it("it shouldn't change character case", () => {
    expect(reverseString("Hello World!")).toBe("!dlroW olleH");
  });
});

