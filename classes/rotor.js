import { Vector2 } from "./Vector2.js";

export class Rotor {

    origin
    dir
    endPoint

    rotation

    // Vector2, Vector2, angle ,color (hex)
    constructor(origin, dir, rotation) {

        this.origin = origin;
        this.dir = dir;
        // this.dir = new Vector2(0,1)
        this.rotation = rotation;
        this.endPoint = this.origin.Add(this.dir)

    }
    SetSpeed(v){
        this.rotation = v
    }
    SetNewLength(){
        // normolize
        // multiply
    }
    Update(newOrigin = null) {
        if (newOrigin) {
            this.origin = newOrigin;
        }
        this.dir.Rotate(this.rotation);
        this.endPoint = this.origin.Add(this.dir);
    }
    Draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.origin.x,this.origin.y);

        ctx.lineTo(this.endPoint.x,this.endPoint.y);
        ctx.stroke();
    }
}