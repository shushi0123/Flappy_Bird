import {DataProvider} from "./dataprovider.js";

export class Spirit {

    constructor(image) {
        this.dataProvider = DataProvider.getInstance();
        this.canvas=this.dataProvider.canvas;
        this.ctx = this.dataProvider.ctx;
        this.image = image;
        this.srcX = 0;
        this.srcY = 0;
        this.srcWidth = this.image.width;
        this.srcHeight = this.image.height;
        this.dstX = 0;
        this.dstY = 0;
        this.dstWidth = this.canvas.width;
        this.dstHeight = this.canvas.height;
        // console.log(image);
    }

    draw() {
        this.ctx.drawImage(this.image, this.srcX, this.srcY, this.srcWidth, this.srcHeight, this.dstX, this.dstY, this.dstWidth, this.dstHeight);
    }
}