
class ObjectParser {
    constructor(configMap) {
        this.configMap = configMap;
    }

    swapKeys(obj, target) {
        const objKeys = Object.keys(obj);
        const swap = {};

        for (let index = 0; objKeys[index]; index += 1) {
            const key = objKeys[index];

            if (target) {
                swap[
                    target[key]
                ] = obj[key];
            } else {
                swap[
                    obj[key]
                ] = key;
            }
        }

        return swap;
    }

    parse(dataToConvert) {
        const { configMap } = this;

        const parsedObject = this.swapKeys(dataToConvert, configMap);

        return parsedObject;
    }

    revert(dataToRevert) {
        const { configMap } = this;

        const revertedConfigMap = this.swapKeys(configMap);
        const revertedObject = this.swapKeys(dataToRevert, revertedConfigMap);

        return revertedObject;
    }
}

export default ObjectParser;
