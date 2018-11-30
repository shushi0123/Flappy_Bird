import {ResourceLoader} from "./resource/resourceloader.js";
import {DataProvider} from "./runtime/dataprovider.js";
import {BackGround} from "./runtime/background.js";
import {BeginButton} from "./runtime/beginbutton.js";
import {Land} from "./runtime/land.js";
import {UpPencil} from "./runtime/uppencil.js";
import {DownPencil} from "./runtime/downpencil.js";
import {Director} from "./director.js";

export class Main {
    constructor() {
        this.resourceloader = new ResourceLoader();
        this.resourceloader.onLoaded((map) => this.onFirstResourceLoaded(map));
        this.dataProvider = DataProvider.getInstance();
        this.director = new Director()
    }


    onFirstResourceLoaded(map) {
        let canvas = document.getElementById('game_canvas');
        let ctx = canvas.getContext('2d');
        this.ctx = ctx;
        this.dataProvider.canvas = canvas;
        this.dataProvider.ctx = this.ctx;
        this.dataProvider.resourceMap = map;
        this.init();
    }

    init() {
        this.dataProvider.put('background', BackGround)
            .put('begin', BeginButton)
            .put('land',Land)
            .put('uppencil',UpPencil);

        this.director.run();
    }
}