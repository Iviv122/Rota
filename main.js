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
function AppendRoterSettings(rotor, ind) {
    const p = document.createElement("p");

    p.style.border = "1px solid black";
    p.style.padding = "5px";
    p.style.display = "block";

    const node = document.createTextNode("Rotor " + ind);

    const breaker = document.createElement("br");
    const slider_speed = document.createElement("input");
    slider_speed.type = "range";
    slider_speed.min = 0;
    slider_speed.value = 0;
    slider_speed.max = 10;

    slider_speed.oninput = () => {
        rotor.rotation = slider_speed.value;
    }

    const slider_length = document.createElement("input");
    slider_length.type = "range";
    slider_length.min = -10;
    slider_length.value = 0;
    slider_length.max = 10;

    slider_speed.oninput = () => {
        rotor.rotation = slider_speed.value;
    }


    const checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    checkbox.onchange = (e) => {
        if (e.value) {
            rotor.rotation = -slider_speed.value;
        } else {
            rotor.rotation = slider_speed.value;
        }
    }

    p.appendChild(node);
    p.appendChild(breaker);
    p.appendChild(slider_speed);
    p.appendChild(checkbox);

    field_set.appendChild(p);
}
function AddRotor() {

    const r = new Rotor(rotors[rotors.length - 1].endPoint, new Vector2(0, 10), 0.15);
    AppendRoterSettings(r, rotors.length)
    rotors.push(r)
}
window.SetSpeed = SetSpeed;

AddRotor()
AddRotor()
AddRotor()
AddRotor()

Draw()