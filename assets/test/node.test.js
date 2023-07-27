const Shape = require('../node.js');


//Error tests to make sure the logic works.
describe("Shape", () => {
    describe("Character Length", () => {
        it("It should throw an error when the character length provided is over 3 characters long", () => {
            const shape = new Shape();
            const result = shape.isLongEnough("SWES");
            expect(result).toEqual(false);
        })
    })

    describe("Text Color", () => {
        it("It should throw an error if the text color is not a color", () => {
            const shape = new Shape();
            const result = shape.isColor("blue");
            expect(result).toEqual(false);
        })
    })

    describe("Shape Color", () => {
        it("It should throw an error if the shape color is not a color", () => {
            const shape = new Shape();
            const result = shape.isColor("ehwakjehwa");
            expect(result).toEqual(false);
        })
    })
    
})