import * as THREE from 'three';

export class Drawer {

    points = []

    dir 
    color 

    material
    geometry
    line

    clock = new THREE.Clock()
    // Vector3, Vector3, Vector3 ,color (hex)
    constructor(color) {

        this.points = []
        
        this.color = color 
        
        this.material = new THREE.LineBasicMaterial( { color: color } );
        
        this.geometry = new THREE.BufferGeometry().setFromPoints(this.points);
        
        this.line = new THREE.Line( this.geometry, this.material ) 
    }

    
    GetLine() {
        return this.line 
    }
    Update(vec3){
        this.points.push(vec3)
        this.material.color.setHSL( this.clock.getElapsedTime(), 1, 0.5 );
        this.geometry.dispose()
        this.geometry = new THREE.BufferGeometry().setFromPoints(this.points);
        this.line.geometry = this.geometry;        
    }
}