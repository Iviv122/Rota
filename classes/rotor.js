import * as THREE from 'three';

export class Rotor {

    origin
    dir 
    endPoint
    rotation
    color 

    material
    geometry
    line

    // Vector3, Vector3, Vector3 ,color (hex)
    constructor(origin,dir,rotation,color) {

        
        this.origin = origin 
        this.dir = dir 
        this.rotation = rotation
        this.color = color 

        
        this.material = new THREE.LineBasicMaterial( { color: color } );
        
        this.endPoint = new THREE.Vector3().addVectors(this.origin, this.dir);
        this.geometry = new THREE.BufferGeometry().setFromPoints([this.origin, this.endPoint]);
        
        this.line = new THREE.Line( this.geometry, this.material ) 
    }

    
    GetLine() {
        return this.line 
    }
    SetOrigin(vec3){
        this.origin = vec3
    }
    Update(){
        this.dir.applyEuler(new THREE.Euler(this.rotation.x,this.rotation.y,this.rotation.z))
        this.endPoint = new THREE.Vector3().addVectors(this.origin, this.dir);
        this.geometry.setFromPoints([this.origin, this.endPoint]);

    }
}