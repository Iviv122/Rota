import { Color } from "./Color.js"

export class Drawer {

    points = []
    color_points = []

    color_index=1

    constructor(color) {
        this.color = color
    }
    Draw(vec2, ctx) {
        this.points.push(vec2)

        this.color_points.push(new Color((this.color_index * 360 / 10) % 360,100,50))
        this.color_index+=1

        for (let index = 1; index < this.points.length; index++) {

            ctx.beginPath();
            ctx.strokeStyle = this.color_points[index].get();
            ctx.moveTo(this.points[index - 1].x, this.points[index - 1].y);


            ctx.lineTo(this.points[index].x, this.points[index].y);

            ctx.stroke();
        }

        for (let i = 0; i < this.color_points.length; i++) {
            this.color_points[i].s-=1;
            this.color_points[i].l+=0.01;
            if (this.color_points[i].l >= 100) {
                this.points.splice(i, 1);
                this.color_points.splice(i, 1);
            }
        }
    }

}