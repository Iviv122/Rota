import { Color } from "./Color.js"

export class Drawer {

    points = []
    color_points = []

    color_index = 1

    fade_speed = 0.01;
    decolor_speed = 1

    constructor(decolor_speed = 1, fade_speed = 0.01) {
        this.fade_speed = fade_speed
        this.decolor_speed = decolor_speed
    }
    SetFadeSpeed(v = 0.01) {
        this.fade_speed = parseFloat(v);
    }

    SetDecolorSpeed(v = 1) {
        this.decolor_speed = parseFloat(v);
    }

    Draw(vec2, ctx) {
        this.points.push(vec2)
        this.color_points.push(new Color((this.color_index * 360 / 10) % 360, 100, 50))
        this.color_index += 1
        if (this.points.length < 2) {
            return;
        }
        for (let index = 1; index < this.points.length; index++) {

            ctx.beginPath();
            ctx.strokeStyle = this.color_points[index].get();
            ctx.moveTo(this.points[index - 1].x, this.points[index - 1].y);


            ctx.lineTo(this.points[index].x, this.points[index].y);

            ctx.stroke();
        }

        for (let i = this.color_points.length - 1; i >= 0; i--) {
            this.color_points[i].s -= this.decolor_speed;
            this.color_points[i].l += this.fade_speed;
            if (this.color_points[i].l >= 100) {
                this.points.splice(i, 1);
                this.color_points.splice(i, 1);
            }
        }

    }

}