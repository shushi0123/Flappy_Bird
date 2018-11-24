const resource = [
    ['background', 'res/background.png'],
    ['begin', 'res/begin.png'],
    ['birds', 'res/birds.png'],
    ['land', 'res/land.png'],
    ['pie_up', 'res/pie_up.png'],
    ['pie_down', 'res/pie_down.png'],
    ['start_button', 'res/start_button.png'],
];

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