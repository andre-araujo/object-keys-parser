import ObjectParser from './ObjectParser';

const thingMapping = {
    somethingKey: 'something',
    anotherThingKey: 'anotherThing'
};

const thingParser = new ObjectParser(thingMapping);

it('should switch key to value', () => {
    const data = {
        somethingKey: 'ball',
        anotherThingKey: 'cube'
    };

    const expectedData = {
        something: 'ball',
        anotherThing: 'cube'
    };

    expect(thingParser.parse(data)).toEqual(expectedData);
});