const capitalize = require('./capitalize')

test("expected string to be String", () => {
    expect(capitalize("string")).toBe("String");
});

test("expected to ignore the all charachters until it find a letter", () => {
    expect(capitalize(".string")).toBe(".String");
    expect(capitalize("..string")).toBe("..String");
    expect(capitalize("@string")).toBe("@String");
    expect(capitalize(".string@")).toBe(".String@");
});

test("expected string doesn't have letters not to be changed", () => {
    expect(capitalize("123")).toBe("123");
});

test("string having spaces cpaitalized at first letter", () => {
    expect(capitalize("this is a good test")).toBe("his is a good test");
});