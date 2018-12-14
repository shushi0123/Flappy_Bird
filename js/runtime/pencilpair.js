import {UpPencil} from "./uppencil.js";
import {DownPencil} from "./downpencil.js";
import {DataProvider} from "./dataprovider.js";

export class PencilPair {
    constructor() {
        this.upPen = new UpPencil();
        this.downPen = new DownPencil();
    }

    is_outOfSreen() {
        if (this.upPen.dstX + this.upPen.dstWidth < 0)
            return true;
        return false;
    }

    is_crossHalfOfSreen() {
        if (this.upPen.dstX + this.upPen.dstWidth / 2 < DataProvider.getInstance().canvas.width / 2)
            return true;
        return false;
    }

    calcPositionOfPair() {
        this.dataProvider = DataProvider.getInstance();
        let landRectMap = this.dataProvider.get('land').getPostionOfSreen();
        let gapHeight = (Math.random() + 0.5) * 200;
        let x1 = 0 - (Math.random() + 0.1) * (landRectMap.get('RectHeight') + gapHeight);
    }

    draw() {
        this.calcPositionOfPair();
        this.upPen.draw(-400);
        this.downPen.draw(300);
    }
}