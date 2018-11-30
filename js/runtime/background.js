import {Spirit} from "./spirit.js";
import {DataProvider} from "./dataprovider.js";

export class BackGround extends Spirit {
    constructor() {
        const image = DataProvider.getInstance().resourceMap.get('background');
        super(image);
    }

    draw() {
        super.draw();
    }
}