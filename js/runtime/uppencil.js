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
        this.dstWidth = this.image.width / 2;//是否要根据屏幕的宽度来自适应调节？
    }

    draw(yOffset) {
        this.dstX = this.dstX - this.dataProvider.moveSpeed;
        super.draw(this.srcX, this.srcY, this.srcWidth, this.srcHeight, this.dstX, yOffset, this.dstWidth, this.dstHeight);
    }
}