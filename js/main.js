import {ResourceLoader} from "./resource/resourceloader.js";
import {DataProvider} from "./runtime/dataprovider.js";
import {BackGround} from "./runtime/background.js";

export class Main {
    constructor() {
        this.resourceloader = new ResourceLoader();
        this.resourceloader.onLoaded(this.resourceFirstLoaded);
        this.dataProvider = DataProvider.getInstance();
    }


    resourceFirstLoaded(map) {
        // console.log('resource loaded')
        const canvas = document.getElementById('game_canvas');
        const ctx = canvas.getContext('2d');
        this.ctx = ctx;
        this.dataProvider.ctx = this.ctx;
        this.dataProvider.res = map;
        this.init();
    }

    init() {
        const background = new BackGround(this.dataProvider.ctx,this.resourceloader.get('background'));
        background.draw();
    }
}