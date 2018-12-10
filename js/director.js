import {DataProvider} from "./runtime/dataprovider.js";

export class Director{
    constructor(){

    }

    run(){
        this.dataProvider = DataProvider.getInstance();
        let background =  this.dataProvider.get('background');
        background.draw();

        // let penciltest = this.dataProvider.get('pencilpair');
        // penciltest.draw();

        let birds = this.dataProvider.get('birds');
        birds.draw();

        let land =  this.dataProvider.get('land');
        land.draw();

        requestAnimationFrame(()=>this.run());
    }
}