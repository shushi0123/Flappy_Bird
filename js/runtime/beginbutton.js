import {Spirit} from "./spirit.js";
import {DataProvider} from "./dataprovider.js";

export class BeginButton extends Spirit {
    constructor() {
        const image = DataProvider.getInstance().resourceMap.get('begin');
        super(image);
    }

    draw() {
        this.dataProvider = DataProvider.getInstance();
        this.dstX = this.dataProvider.canvas.width / 2;
        this.dstY = this.dataProvider.canvas.height / 2;
        this.dstWidth = this.dataProvider.canvas.width / 3;
        this.dstHeight = this.dataProvider.canvas.height / 8;
        console.log(this.dstX + '' + this.dstY + '' + this.dstWidth + '' + this.dstHeight);
        super.draw();
    }
}