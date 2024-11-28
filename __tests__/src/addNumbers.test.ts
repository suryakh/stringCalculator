import addNumbers from '../../src/stringCalculator/addNumbers'

test("Check String Calculator with text having empty string", () => {
    expect(addNumbers("")).toBe(0);
});
test("Check String Calculator with text having numbers and , separated ex: 3,4,7", () => {
    expect(addNumbers("3,4,7")).toBe(14);
});

test("Check String Calculator with text having numbers and , and separated and new line in between ex: 3,4\n,7\n", () => {
    expect(addNumbers("3,4\n,7\n")).toBe(14);
});

test("Check String Calculator with text having numbers and dynamic delimiter ex: //$3$\n4\n$7$\n", () => {
    expect(addNumbers("//$3\n$4\n$7$\n")).toBe(14);
});

test("Check String Calculator with text having numbers and dynamic delimiter with optional new line ex: //$3$4\n$7$\n", () => {
    expect(addNumbers("//$3$4\n$7$\n")).toBe(14);
});

test("Check String Calculator with text having negative numbers with , separated: 3,-4,-7", () => {
    expect(addNumbers("3,-4,-7")).toBe("negatives not allowed: -4,-7");
});

test("Check String Calculator with text having negative numbers with dynamic delimiter: //$3$4\n$-7$\n", () => {
    expect(addNumbers("//$3$4\n$-7$\n")).toBe("negatives not allowed: -7");
});