const middleLetter = require('./middleLetter')

describe('Middle Letter', () => {
    it('Return the 2 middle letter if the words length is even', () => {
        expect(middleLetter('test')).toBe('es')
    })
    it('Return the middle letter if the word length is odd', () => {
        expect(middleLetter('testing')).toBe('t')
    })
    it('Return the 2 middle letter if the word length is even, longer word', () => {
        expect(middleLetter('middle')).toBe('dd')
    })
    it('Return one letter when the input is a single letter', () => {
        expect(middleLetter('A')).toBe("A")
    })
    it('Return two letter when the input is a two letter word', () => {
        expect(middleLetter('of')).toBe("of")
    })
    it('Return an error if we dont pass any string', () => {
        expect(middleLetter).toThrow("You must provide a string")
    })
})