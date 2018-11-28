import {resource} from "./resource.js";

export class ResourceLoader {
    constructor() {
        this.resMap = new Map(resource);
        for (let [key, value] of this.resMap) {
            const image = new Image();
            image.src = value;
            this.resMap.set(key, image);
        }
        // console.log(this.resMap);
    }

    get(key) {
        return this.resMap.get(key)
    }

    onLoaded(callback) {
        let loadedCount = 0;
        for (let value of this.resMap.values()) {
            // console.log(value);
            value.onload = () => {
                loadedCount++;
                // console.log(loadedCount);
                if (loadedCount == this.resMap.size) {
                    callback(this.resMap);
                }
            }
        }
    }
}