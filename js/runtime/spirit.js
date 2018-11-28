import {DataProvider} from "./dataprovider.js";

export class Spirit {

    constructor(ctx,image) {
        this.ctx=ctx;
        this.image=image;
        this.srcX=0;
        this.srcY=0;
        this.srcWidth=this.image.width;
        this.srcHeight=this.image.height;
        this.dstX=0;
        this.dstY=0;
        this.dstWidth=window.innerWidth;
        this.dstHeight=window.innerHeight;
    }

    draw() {
        this.ctx.drawImage(this.image,this.srcX,this.srcY,this.srcWidth,this.srcHeight,this.dstX,this.dstY,this.dstWidth,this.dstHeight);
    }
}