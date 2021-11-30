const assert = require('chai').assert;
const tail = require('../tail');
const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#result", () => {
  it("returns 2 elements", () => {
    assert.strictEqual(result.length, 2);
  });
  it("Checks if first element is 'Lighthouse'", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("Checks if second element is 'Labs'" , () => {
    assert.strictEqual(result[1],"Labs");
  });
});

