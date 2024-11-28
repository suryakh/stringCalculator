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

test("Check String Calculator with text having negative numbers with , separated ex: 3,-4,-7", () => {
    try{
        addNumbers("3,-4,-7")
    } catch(error){
        expect(error).toEqual(new Error("negative numbers not allowed -4,-7"))
    }
});

test("Check String Calculator with text having negative numbers with dynamic delimiter ex: //$3$4\n$-7$\n", () => {
    try {
        addNumbers("//$3$4\n$-7$\n")
    } catch (error){
        expect(error).toEqual(new Error("negative numbers not allowed -7"));
    }
});

test("Check String Calculator with text having numbers also have more than 1000 number and dynamic delimiter ex://$3$4\n$7$1000$1005\n", () => {
    expect(addNumbers("//$3$4\n$7$1000$1005\n")).toBe(1014);
});

test("Check String Calculator with text having numbers also have more than 1000 number ex: 3,4,7,1001", () => {
    expect(addNumbers("3,4,7,1001")).toBe(14);
});

test("Check String Calculator with text having numbers and multiple delimiter with optional new line ex: //*%$3$4$$$%$$7%\n", () => {
    expect(addNumbers("//*%$3$4$$$%$$7%\n")).toBe(14);
});

test("Check String Calculator with text having numbers and repeated delimiter with optional new line ex: //****3****4*****7***\n", () => {
    expect(addNumbers("//****3****4*****7***\n")).toBe(14);
});