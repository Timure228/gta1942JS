import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import Object from "/object.js";
import { check_collision_player } from "/sprite.js";

let player = document.querySelector(".player_civil")
player.style.top = 385 + "px"
player.style.left = 30 + "px"
player.style.rotate = 180 + "deg"

// Ambience Audio
var city_ambience = new Audio("/sfx/door_close.mp3");
city_ambience.volume = 0.8;
city_ambience.play();

const barrier1 = new Sprite("skeleton", 0, 0, 230, 400)
barrier1.add_sprite()

const barrier2 = new Sprite("skeleton", 0, 420, 1800, 50)
barrier2.add_sprite()

const barrier3 = new Sprite("skeleton", 200, 250, 480, 40)
barrier3.add_sprite()

const barrier4 = new Sprite("skeleton", 660, 0, 230, 280)
barrier4.add_sprite()

const barrier5 = new Sprite("skeleton", 860, 0, 1750, 50)
barrier5.add_sprite()

const barrier6 = new Sprite("skeleton", 1050, 0, 500, 500)
barrier6.add_sprite()

const barrier7 = new Sprite("skeleton", 960, 80, 200, 170)
barrier7.add_sprite()

const barrier8 = new Sprite("skeleton", 350, 320, 1300, 200)
barrier8.add_sprite()
barrier1.make_transparent()

const tv = new Object("tv", 900, 120, 170, 180, "green")
tv.add_object()


player.addEventListener("keydown", () => {check_collision_player([barrier1, 
    barrier2, 
    barrier3, 
    barrier4, 
    barrier5, 
    barrier6, 
    barrier7,
    barrier8])
    check_collision_player([tv], false, true)
})    


let character_icon = "/dialog_faces/player_face_civil.png"
const monolog = new Dialog("monolog", [["Time to watch some TV.", character_icon]])
monolog.start_dialog()

document.body.addEventListener("keydown", (e) => { if (e.key == "e") {monolog.start_dialog(e)}})

document.body.addEventListener("keydown", (e) => { if (e.key == "t" && document.querySelector(".key_tip")) {
    window.location.href = "http://127.0.0.1:3000/maps/civil_maps/tv.html"
}})
