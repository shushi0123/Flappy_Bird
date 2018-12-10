import {Spirit} from "./spirit.js";
import {DataProvider} from "./dataprovider.js";

export class Birds extends Spirit {
    constructor() {
        const image = DataProvider.getInstance().resourceMap.get('birds');
        // console.log(image)
        super(image);
        this.leftMargin = 8;
        this.topMargin = 11;
        this.drawWidth = 31;
        this.drawHeight = 24;
        this.xOffset = 0;
        this.birdRefreshCount = 0;
        this.birdY = (DataProvider.getInstance().canvas.height-DataProvider.getInstance().resourceMap.get('land').height)/2-this.drawHeight/2;
        this.gravity = 0.1;
        this.timeOffsetConst = 15;
        this.yRatio = 0.2 ;
        this.yOffsetConst = this.timeOffsetConst*this.timeOffsetConst*this.gravity*this.yRatio  ;

        this.time = 0;
    }

    draw() {
        this.birdRefreshCount++;
        if (this.birdRefreshCount % 10 == 0) {
            if( this.xOffset==0 ) this.xOffset=52;
            else if( this.xOffset==52 ) this.xOffset=105;
            else this.xOffset=0;
        }
        this.time++;
        this.birdY = this.birdY-(this.yOffsetConst-  this.gravity*this.yRatio*(this.time-this.timeOffsetConst)*(this.time-this.timeOffsetConst) );
        let dstX = DataProvider.getInstance().canvas.width/2-this.drawWidth/2;
        super.draw(this.leftMargin + this.xOffset, this.topMargin, this.drawWidth, this.drawHeight, dstX, this.birdY, this.drawWidth, this.drawHeight);
    }
}