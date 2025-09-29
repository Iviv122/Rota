import { Vector2 } from "./classes/Vector2.js";
import { Drawer } from "./classes/drawer.js";
import { Rotor } from "./classes/rotor.js";

const cavnas = document.getElementById("canvas")
const ctx = cavnas.getContext("2d")

canvas.width = window.innerWidth / 1.5;
canvas.height = window.innerHeight / 1.5;

// origin, LITERALLY MUST HAVE :D
const p1 = new Rotor(new Vector2(canvas.width / 2, canvas.height / 2), new Vector2(0, 100), 0.015);

let rotors = [];
rotors.push(p1)

const drawer = new Drawer()

const show_lines = document.getElementById("show_lines")
show_lines.checked = true

const speed = document.getElementById("speed")
var speed_update = speed.value;

const field_set = document.getElementById("field_set")

function Draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.strokeStyle = "#000000";
    p1.Update()
    for (let index = 1; index < rotors.length; index++) {
        rotors[index].Update(rotors[index - 1].endPoint);
    }

    if (show_lines.checked) {
        for (let index = 0; index < rotors.length; index++) {
            rotors[index].Draw(ctx);
        }
    }
    drawer.Draw(rotors[rotors.length - 1].endPoint, ctx)

    return setTimeout(() => {
        Draw()
    }, speed_update);
};
function SetSpeed(e) {
    speed_update = e
}
function SetFadeSpeed(e) {
    drawer.SetFadeSpeed(e)
}
function SetDecolorSpeed(e){
    drawer.SetDecolorSpeed(e)
}

document.getElementById('speed').addEventListener('input', (e) => SetSpeed(e.target.value));
document.getElementById('fade_speed').addEventListener('input', (e) => SetFadeSpeed(e.target.value));
document.getElementById('decolor_speed').addEventListener('input', (e) => SetDecolorSpeed(e.target.value));

function AppendRoterSettings(rotor, ind, canremove) {
    const p = document.createElement("p");

    p.style.border = "1px solid black";
    p.style.padding = "5px";
    p.style.display = "block";


    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    const slider_speed = document.createElement("input");
    slider_speed.type = "range";
    slider_speed.min = 0;
    slider_speed.max = 1;
    slider_speed.value = rotor.rotation;
    slider_speed.step = 0.01

    slider_speed.oninput = () => {
        if (checkbox.checked) {
            rotor.rotation = -slider_speed.value;
        } else {
            rotor.rotation = slider_speed.value;
        }
    }
    checkbox.oninput = () => {
        if (checkbox.checked) {
            rotor.rotation = -slider_speed.value;
        } else {
            rotor.rotation = slider_speed.value;
        }
    }


    const slider_length = document.createElement("input");
    slider_length.type = "range";
    slider_length.min = 1;
    slider_length.value = 15;
    slider_length.max = 100;
    slider_length.oninput = () => {
        rotor.SetLength(slider_length.value);
    }

    p.appendChild(slider_speed);
    p.appendChild(document.createElement("br"));
    p.appendChild(slider_length);
    p.appendChild(checkbox);

    field_set.appendChild(p);
}
function AddRotor() {

    const r = new Rotor(rotors[rotors.length - 1].endPoint, new Vector2(0, 10), 0.5);
    AppendRoterSettings(r, rotors.length)
    rotors.push(r)
}

AddRotor()
//AddRotor()
//AddRotor()
//AddRotor()

Draw()