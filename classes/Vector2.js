export class Vector2 {

    x;
    y;

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    
    // takes rads :0
    Rotate(angle){
        
        let ox = this.x;
        let oy = this.y;
        
        this.x = ox*Math.cos(angle) - oy*Math.sin(angle);
        this.y = ox*Math.sin(angle) + oy*Math.cos(angle);
       
    }

    Add(pos){
        return new Vector2(this.x+pos.x,this.y+pos.y)
    }
}
