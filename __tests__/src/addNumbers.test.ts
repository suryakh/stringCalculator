import addNumbers from '../../src/stringCalculator/addNumbers'


test("Check String Calculator with simple test case return value ", () => {
    expect(addNumbers("inputString")).toBe("inputString");
});