import { strike } from './Count'



//When strike button is clicked it should add one to current state unless current state is 3 then it should reset to zero'

describe('Count.js', () => {
    describe('strike()', () => {
        it('line 4 text', () => {
            expect(strike(0)).toBe(1)
            expect(strike(1)).toBe(2)
            expect(strike(2)).toBe(0)
            expect(strike(3)).toBe(0)
        })
    })
})