import * as W3D from "../../lib/w3d.es.js";
import * as CANNON from "cannon";

const createScene = async (canvas: any) => {

    var app = await W3D.InitAsync(canvas);
    var scene = await app.LoadScene("sceneCannon.scene",CANNON);

};

export { createScene };