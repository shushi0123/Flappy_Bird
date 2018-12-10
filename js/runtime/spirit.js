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
        this.RectLeftTopX = 0;
        this.RectLeftTopY = 0;
        this.RectWidth = 0;
        this.RectHeight = 0;
        // console.log(image);
    }

    draw(srcX=this.srcX,srcY=this.srcY,srcWidth=this.srcWidth,srcHeight=this.srcHeight,dstX=this.dstX,dstY=this.dstY,dstWidth=this.dstWidth,dstHeight=this.dstHeight) {
        this.ctx.drawImage(this.image, srcX, srcY, srcWidth, srcHeight, dstX, dstY, dstWidth, dstHeight);
        this.RectLeftTopX = dstX;
        this.RectLeftTopY = dstY;
        this.RectWidth = dstWidth;
        this.RectHeight = dstHeight;
    }

    getPostionOfSreen(){
        return new Map([
            ['RectLeftTopX', this.RectLeftTopX],
            ['RectLeftTopY',this.RectLeftTopY],
            ['RectWidth', this.RectWidth],
            ['RectHeight', this.RectHeight],
        ]);
    }
}