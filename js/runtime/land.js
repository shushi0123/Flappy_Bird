import {Spirit} from "./spirit.js";
import {DataProvider} from "./dataprovider.js";

export class Land extends Spirit {
    constructor() {
        const image = DataProvider.getInstance().resourceMap.get('land');
        super(image);
    }

    draw() {
        this.dataProvider = DataProvider.getInstance();
        this.srcX = this.srcX + this.dataProvider.moveSpeed;
        if (this.srcX + this.dataProvider.canvas.width+20 > this.image.width)
            this.srcX = 0;
        this.srcWidth = this.dataProvider.canvas.width;
        this.dstY = this.dataProvider.canvas.height - this.image.height;
        this.dstWidth = this.dataProvider.canvas.width;
        this.dstHeight = this.image.height;
        super.draw();
        // console.log('land:'+this.dstX+' '+this.dstY+' '+this.dstWidth+' '+this.dstHeight);
    }


}