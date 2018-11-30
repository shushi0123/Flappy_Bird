export class DataProvider {

    static getInstance() {
        if (!DataProvider.instance) {
            DataProvider.instance = new DataProvider();
        }
        return DataProvider.instance;
    }

    constructor() {
        this.providerMap = new Map();
    }

    get(key) {
        return this.providerMap.get(key);
    }

    put(key, value) {
        if (typeof value === 'function') {
            value = new value();
        }
        this.providerMap.set(key, value);
        return this;
    }

    clear() {
        for (let value of this.providerMap.values()) {
            value = null;
        }
    }

}