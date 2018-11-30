import {Spirit} from "./spirit.js";
import {DataProvider} from "./dataprovider.js";

export class DownPencil extends Spirit {
    constructor() {
        const image = DataProvider.getInstance().resourceMap.get('pie_down');
        super(image);
    }

    draw() {
        //this.dstX 是移动变量
        //this.dstY 是变量
        this.dataProvider = DataProvider.getInstance();
        this.dstWidth = this.image.width / 2;
        super.draw();
    }
}