import ObjectParser from './ObjectParser';

const thingMapping = {
    somethingKey: 'something',
    anotherThingKey: 'anotherThing',
};

const thingParser = new ObjectParser(thingMapping);

describe('ObjectParser', () => {
    describe('parse method', () => {
        it('should switch key to value', () => {
            const data = {
                somethingKey: 'ball',
                anotherThingKey: 'cube',
            };

            const expectedData = {
                something: 'ball',
                anotherThing: 'cube',
            };

            expect(thingParser.parse(data)).toEqual(expectedData);
        });
    });

    describe('revert method', () => {
        it('should switch key to value', () => {
            const data = {
                something: 'ball',
                anotherThing: 'cube',
            };

            const expectedData = {
                somethingKey: 'ball',
                anotherThingKey: 'cube',
            };

            expect(thingParser.revert(data)).toEqual(expectedData);
        });
    });
});
