export class Color {

    h;
    s;
    l;

    constructor(h, s, l) {
        this.h = h;
        this.s = s;
        this.l = l;
    }
    get(){
        return `hsl(${this.h}, ${this.s}%, ${this.l}%)`
    }

}