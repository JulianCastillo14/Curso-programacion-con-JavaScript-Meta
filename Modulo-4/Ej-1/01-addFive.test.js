const addFive = require('./01-addFive');

test('retorna el número más 5', () => {
    expect(addFive(1)).toBe(6);
})