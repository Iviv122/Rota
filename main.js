import { Vector2 } from "./classes/Vector2.js";
import { Drawer } from "./classes/drawer.js";
import { Rotor } from "./classes/rotor.js";

const cavnas = document.getElementById("canvas")
const ctx = cavnas.getContext("2d")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const p1 = new Rotor(new Vector2(canvas.width / 2, canvas.height / 2), new Vector2(0, 100), 0.015);
const p2 = new Rotor(p1.endPoint, new Vector2(0, 15), 0.15);
const p3 = new Rotor(p2.endPoint, new Vector2(0, 15), -0.25);
const p4 = new Rotor(p3.endPoint, new Vector2(0, 15), -0.32);

const drawer = new Drawer()

setInterval(() => {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    p1.Update()
    p2.Update(p1.endPoint)
    p3.Update(p2.endPoint)
    p4.Update(p3.endPoint)

    
    /*
    ctx.fillStyle = "#FFA500";
    p1.Draw(ctx)
    p2.Draw(ctx)
    p3.Draw(ctx)
    p4.Draw(ctx)
    */
    
    drawer.Draw(p4.endPoint, ctx)
}, 10);