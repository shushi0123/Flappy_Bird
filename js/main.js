import {ResourceLoader} from "./resource/resourceloader.js";

export  class Main{
    constructor(){
        this.resourceloader = new ResourceLoader();
        this.resourceloader.onLoaded(this.resourceFirstLoaded);
    }



    resourceFirstLoaded(map){
        // console.log('resource loaded')
    }
}