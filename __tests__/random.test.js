const randomNumber = require('../lib/random.js')
const Potion = require('../lib/Potion.js')

test('gets random number between 1 and 10', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1)
    expect(randomNumber()).toBeLessThanOrEqual(10)
})