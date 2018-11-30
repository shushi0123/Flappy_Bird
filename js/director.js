import {DataProvider} from "./runtime/dataprovider.js";

export class Director{
    constructor(){

    }

    run(){
        this.dataProvider = DataProvider.getInstance();
        let background =  this.dataProvider.get('background');
        background.draw();

        let uppencil = this.dataProvider.get('uppencil');
        uppencil.draw();

        let land =  this.dataProvider.get('land');
        land.draw();

        requestAnimationFrame(()=>this.run());
    }
}