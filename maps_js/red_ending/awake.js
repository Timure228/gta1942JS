import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import Object from "/object.js";
import { check_collision_player } from "/sprite.js";

let player = document.querySelector(".player_civil")
player.style.top = 5 + "px"
player.style.left = 1290 + "px"
player.style.rotate = 180 + "deg"

// Ambience 
var city_ambience = new Audio("/maps/ambience_sounds/feel_free_ambience.mp3");
city_ambience.volume = 0.4;
city_ambience.loop = true;
city_ambience.play();


const barrier1 = new Sprite("skeleton", 0, 0, 190, 400)
barrier1.add_sprite()

const barrier2 = new Sprite("skeleton", 0, 420, 1800, 50)
barrier2.add_sprite()

const barrier3 = new Sprite("skeleton", 200, 250, 480, 40)
barrier3.add_sprite()

const barrier4 = new Sprite("skeleton", 660, 0, 230, 280)
barrier4.add_sprite()

const barrier5 = new Sprite("skeleton", 860, 0, 1750, 50)
barrier5.add_sprite()

const barrier7 = new Sprite("skeleton", 960, 80, 200, 170)
barrier7.add_sprite()

const barrier8 = new Sprite("skeleton", 350, 320, 1300, 200)
barrier8.add_sprite()

const barrier9 = new Sprite("skeleton", 0, 0, 50, 3000)
barrier9.add_sprite()

const barrier10 = new Sprite("skeleton", 1500, 0, 150, 1500)
barrier10.add_sprite()

const barrier11 = new Sprite("skeleton", 0, 650, 1500, 150)
barrier11.add_sprite()
barrier1.make_transparent()

const door_trigger = new Object("door_trigger", 0, 415, 150, 80, "green")
door_trigger.add_object()

player.addEventListener("keydown", () => {check_collision_player([barrier1, 
    barrier2, 
    barrier3, 
    barrier4, 
    barrier5, 
    barrier7,
    barrier8,
    barrier9,
    barrier10,
    barrier11])
    check_collision_player([door_trigger], false, true)
})    

let character_icon = "/dialog_faces/player_released.png"
const monolog = new Dialog("monolog", [["So what do I do?", character_icon]])

document.body.addEventListener("keydown", (e) => { if (e.key == "e") {monolog.start_dialog(e)}})

document.body.addEventListener("keydown", (e) => { if (e.key == "t" && document.querySelector(".key_tip")) {
    window.location.href = "http://127.0.0.1:3000/maps/red_ending/city_industrial_morning.html"
}})
