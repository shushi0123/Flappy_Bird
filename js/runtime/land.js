import {Spirit} from "./spirit.js";
import {DataProvider} from "./dataprovider.js";

export class Land extends Spirit {
    constructor() {
        const image = DataProvider.getInstance().resourceMap.get('land');
        super(image);
    }

    draw() {
        this.dataProvider = DataProvider.getInstance();
        this.dstY = this.dataProvider.canvas.height - this.image.height;
        this.dstWidth = this.dataProvider.canvas.width;
        this.dstHeight = this.image.height;
        super.draw();
    }


}