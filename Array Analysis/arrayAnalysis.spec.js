const arrayAnalysis = require("./arrayAnalysis");

describe("arrayAnalysis function", () => {
  it("throw Error if array is empty", () => {
    expect(arrayAnalysis([])).toBe("The array can not be empty!");
  });

  it("throw Error if array contains non numbers", () => {
    expect(arrayAnalysis([1, 2, "a"])).toBe(
      "The array must contain only numbers!"
    );
  });

  it('return an object with a property "min"', () => {
    expect(arrayAnalysis([1, 2, 3, 7]).min).toBe(1);
  });

  it('return an object with a property "max"', () => {
    expect(arrayAnalysis([1, 2, 3, 7]).max).toBe(7);
  });

  it('return an object with a property "length"', () => {
    expect(arrayAnalysis([1, 2, 3, 7]).length).toBe(4);
  });

  it('return an object with a property "average"', () => {
    expect(arrayAnalysis([1, 2, 3, 7]).average).toBe(3.25);
  });

  it("return an object", () => {
    expect(arrayAnalysis([1, 2, 4, 8])).toEqual({
      min: 1,
      max: 8,
      length: 4,
      average: 3.75,
    });
  });
});
