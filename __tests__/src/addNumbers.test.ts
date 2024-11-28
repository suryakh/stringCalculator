import addNumbers from '../../src/stringCalculator/addNumbers'

test("Check String Calculator with text having numbers and , separated ex: 3,4,7", () => {
    expect(addNumbers("3,4,7")).toBe(14);
});