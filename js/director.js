import {DataProvider} from "./runtime/dataprovider.js";
import {PencilPair} from "./runtime/pencilpair.js";

export class Director {
    constructor() {

    }

    run() {
        this.dataProvider = DataProvider.getInstance();

        let background = this.dataProvider.get('background');
        background.draw();

        let pencilpairs = this.dataProvider.get('pencilpairs');
        if (pencilpairs.length === 0)
            pencilpairs.push(new PencilPair());
        if (pencilpairs.length == 2 && pencilpairs[0].is_outOfSreen())
            pencilpairs.shift();
        if (pencilpairs.length == 1 && pencilpairs[0].is_crossHalfOfSreen())
            pencilpairs.push(new PencilPair());
        pencilpairs.forEach(function (value) {
            value.draw()
        })

        let birds = this.dataProvider.get('birds');
        birds.draw();

        let land = this.dataProvider.get('land');
        land.draw();

        let striked = birds.isStrike(pencilpairs,land);
        if(striked)
            this.dataProvider.isGameOver = true;

        if( this.dataProvider.isGameOver )
            return;
        requestAnimationFrame(() => this.run());
    }
}