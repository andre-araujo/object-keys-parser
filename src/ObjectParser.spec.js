import ObjectParser from './ObjectParser';

const thingMapping = {
    somethingKey: 'something',
    anotherThingKey: 'anotherThing',
};

const thingParser = new ObjectParser(thingMapping);

describe('ObjectParser', () => {
    describe('parse method', () => {
        it('should translate keys', () => {
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

        it('should translate keys recursively', () => {
            const data = {
                somethingKey: {
                    anotherThingKey: 'cube',
                },
            };

            const expectedData = {
                something: {
                    anotherThing: 'cube',
                },
            };

            expect(thingParser.parse(data)).toEqual(expectedData);
        });
    });

    describe('revert method', () => {
        it('revert keys to default values', () => {
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

        it('revert keys to default values recursively', () => {
            const data = {
                something: {
                    anotherThing: 'cube',
                },
            };

            const expectedData = {
                somethingKey: {
                    anotherThingKey: 'cube',
                },
            };

            expect(thingParser.revert(data)).toEqual(expectedData);
        });
    });
});
