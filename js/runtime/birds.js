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
        this.birdY = (DataProvider.getInstance().canvas.height - DataProvider.getInstance().resourceMap.get('land').height) / 2 - this.drawHeight / 2;
        this.gravity = 0.1;
        this.timeOffsetConst = 15;
        this.yRatio = 0.2;
        this.yOffsetConst = this.timeOffsetConst * this.timeOffsetConst * this.gravity * this.yRatio;

        this.time = 0;
    }

    draw() {
        this.birdRefreshCount++;
        if (this.birdRefreshCount % 10 == 0) {
            if (this.xOffset == 0) this.xOffset = 52;
            else if (this.xOffset == 52) this.xOffset = 105;
            else this.xOffset = 0;
        }
        this.time++;
        this.birdY = this.birdY - (this.yOffsetConst - this.gravity * this.yRatio * (this.time - this.timeOffsetConst) * (this.time - this.timeOffsetConst));
        let dstX = DataProvider.getInstance().canvas.width / 2 - this.drawWidth / 2;
        super.draw(this.leftMargin + this.xOffset, this.topMargin, this.drawWidth, this.drawHeight, dstX, this.birdY, this.drawWidth, this.drawHeight);
    }

    rectangleCol(spirit1, spirit2) {
        let map1 = spirit1.getPostionOfSreen();
        let map2 = spirit2.getPostionOfSreen();
        let x1 = map1.get('RectLeftTopX');
        let y1 = map1.get('RectLeftTopY');
        let w1 = map1.get('RectWidth');
        let h1 = map1.get('RectHeight');
        let x2 = map2.get('RectLeftTopX');
        let y2 = map2.get('RectLeftTopY');
        let w2 = map2.get('RectWidth');
        let h2 = map2.get('RectHeight');
        if (
            Math.abs(x1 - x2) < w1 / 2 + w2 / 2 //横向判断
            &&
            Math.abs(y1 - y2) < h1 / 2 + h2 / 2 //纵向判断
        ) {
            return true;
        }
        return false;

    }


    isStrike(penpairs_array, land_obj) {
        if (this.rectangleCol(this, land_obj))
            return true;
        let striked = false;
        penpairs_array.forEach((penpairs) => {
            if (this.rectangleCol(this, penpairs.upPen))
                striked = true;
            if (this.rectangleCol(this, penpairs.downPen))
                striked = true;
        })
        return striked;
    }
}