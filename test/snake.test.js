const snake = require('../src/snake')

snakeObject = new snake()
test('initial snake size', () => {
    expect(snakeObject.pieces.length).toBe(5)
})
