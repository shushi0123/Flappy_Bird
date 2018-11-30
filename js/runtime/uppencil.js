import {Spirit} from "./spirit.js";
import {DataProvider} from "./dataprovider.js";

export class UpPencil extends Spirit {
    constructor() {
        const image = DataProvider.getInstance().resourceMap.get('pie_up');
        super(image);
        this.moveSpeed = 2;
        this.dstX = DataProvider.getInstance().canvas.width;
        //this.dstX 是移动变量
        //this.dstY 是变量
        this.dataProvider = DataProvider.getInstance();
        this.dstWidth = this.image.width/2;
    }

    draw() {
        this.dstX = this.dstX - this.moveSpeed;
        super.draw();
    }
}