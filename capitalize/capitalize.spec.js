const capitalize = require("./capitalize");

describe("capitalize function", () => {
  it("shoudn't take empty string", () =>{
    expect(capitalize("")).toBe("string should be at least one character long!");
  });

  it("it should capitalize a string", () => {
    expect(capitalize("hello world!")).toBe("Hello World!");
  });

  it("it should remove empty spaces from the begining", () => {
    expect(capitalize("  hello world!")).toBe("Hello World!");
  });

  it("it should remove empty spaces from the end", () => {
    expect(capitalize("hello world!  ")).toBe("Hello World!");
  });

  it("it should remove empty spaces both sides", () => {
    expect(capitalize("  hello world!  ")).toBe("Hello World!");
  });

  it("it shouldn't change other characters case", () => {
    expect(capitalize("heLlo wOrlD!")).toBe("HeLlo WOrlD!");
  });
});
