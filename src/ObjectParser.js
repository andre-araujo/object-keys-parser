
class ObjectParser {
    constructor(configMap) {
        this.configMap = configMap;
    }

    parse(dataToConvert) {
        const { configMap } = this;
        const parsedObject = {};

        const dataToConvertKeys = Object.keys(dataToConvert);

        for (let index = 0; dataToConvertKeys[index]; index += 1) {
            const dataToConvertKey = dataToConvertKeys[index];

            parsedObject[
                configMap[dataToConvertKey]
            ] = dataToConvert[dataToConvertKey];
            
        }

        return parsedObject;
    }
}

export default ObjectParser;