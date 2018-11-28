export class DataProvider {

    static getInstance() {
        if (!DataProvider.instance) {
            DataProvider.instance = new DataProvider();
            return DataProvider.instance;
        }
    }

    constructor() {
        this.providerMap = new map();
    }

    get(key) {
        return this.providerMap.get(key);
    }

    put(key,value) {
        this.providerMap.set(key,value);
        return this;
    }

    clear(){
        for(let value of this.providerMap.values()){
            value = null;
        }
    }

}