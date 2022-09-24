const { array } = require("yargs");
const rotateTable = require("./rotate-table");

test("standard 1 x 1", () => {
  const result = rotateTable([1]);
  expect(JSON.stringify(result)).toBe("[1]");
});

test("standard 2 x 2", () => {
  const result = rotateTable([1, 2, 3, 4]);
  expect(JSON.stringify(result)).toBe("[3,1,4,2]");
});

test("standard 3 x 3", () => {
  const result = rotateTable([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(JSON.stringify(result)).toBe("[4,1,2,7,5,3,8,9,6]");
});

test("non matrix", () => {
  const result = rotateTable([1, 2, 3]);
  expect(JSON.stringify(result)).toBe("[]");
});

test("empty matrix", () => {
  const result = rotateTable([]);
  expect(JSON.stringify(result)).toBe("[]");
});

describe("rotating a matrix of array length n => 4 x (square root of n - 1) times should return the same first and last square root of n values ", () => {
  it.each([
    [1],
    [4],
    [9],
    [16],
    [25],
    [36],
    [49],
    [64],
    [81],
    [100],
    [121],
    [144],
    [169],
    [196],
    [225],
    [256],
    [289],
    [324],
    [361],
    [400],
    [441],
    [484],
    [529],
    [576],
    [625],
    [676],
    [729],
    [784],
    [841],
    [900],
    [961],
    [1024],
    [1089],
    [1156],
    [1225],
    [1296],
    [1369],
    [1444],
    [1521],
    [1600],
    [1681],
    [1764],
    [1849],
    [1936],
    [2025],
    [2116],
    [2209],
    [2304],
    [2401],
    [2500],
    [2601],
    [2704],
    [2809],
    [2916],
    [3025],
    [3136],
    [3249],
    [3364],
    [3481],
    [3600],
    [3721],
    [3844],
    [3969],
    [4096],
    [4225],
    [4356],
    [4489],
    [4624],
    [4761],
    [4900],
    [5041],
    [5184],
    [5329],
    [5476],
    [5625],
    [5776],
    [5929],
    [6084],
    [6241],
    [6400],
    [6561],
    [6724],
    [6889],
    [7056],
    [7225],
    [7396],
    [7569],
    [7744],
    [7921],
    [8100],
    [8281],
    [8464],
    [8649],
    [8836],
    [9025],
    [9216],
    [9409],
    [9604],
    [9801],
    [10000],
  ])("with length %p", (arrayLength) => {
    const inputArray = [];
    for (let i = 0; i < arrayLength; i++) {
      inputArray.push(i);
    }

    let result = inputArray;
    for (let j = 0; j < 4 * (Math.sqrt(arrayLength) - 1); j++) {
      result = rotateTable(result);
    }

    expect(JSON.stringify(result.slice(0, Math.sqrt(arrayLength) + 1))).toBe(
      JSON.stringify(inputArray.slice(0, Math.sqrt(arrayLength) + 1))
    );
    expect(
      JSON.stringify(
        result.slice(result.length - 1 - Math.sqrt(arrayLength), array.length)
      )
    ).toBe(
      JSON.stringify(
        inputArray.slice(
          result.length - 1 - Math.sqrt(arrayLength),
          array.length
        )
      )
    );
  });
});
