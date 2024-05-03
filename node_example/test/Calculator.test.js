// установить jest, запуск командой jest --collect-coverage
const { Calculator } = require('../Calculator');

describe("Calculator", () => {
    test("Sum 5 + 5 equal to 10", () => {
        const calc = new Calculator();
        const sumResult = calc.sum(5, 5);
        expect(sumResult).toBe(10);
    });
    test("Sum 5 - 3 equal to 2", () => {
        const calc = new Calculator();
        const sumResult = calc.sub(5, 3);
        expect(sumResult).toBe(2);
    })
})