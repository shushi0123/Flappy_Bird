import {Spirit} from "./spirit.js";
import {DataProvider} from "./dataprovider.js";

export class BackGround extends Spirit {
    constructor() {
        const image = DataProvider.getInstance().resourceMap.get('background');
        super(image);
    }

    draw() {
        this.srcX = this.srcX + this.dataProvider.moveSpeed/4;
        if (this.srcX + this.dataProvider.canvas.width+20 > this.image.width)
            this.srcX = 0;
        this.srcWidth = this.dataProvider.canvas.width;
        super.draw();
    }
}