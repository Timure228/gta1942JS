import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import Object from "/object.js";
import { check_collision_player } from "/sprite.js";
import { write_title } from "/cutscene_tools.js";

write_title("Industrial Zone 22:05 AM")

let player = document.querySelector(".player_civil")
player.style.top = 600 + "px"
player.style.left = 1200 + "px"
player.style.rotate = 180 + "deg"

var door_open = new Audio("/sfx/opening_door.mp3");
door_open.volume = 0.3;
door_open.play();

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/feel_free_ambience.mp3");
city_ambience.volume = 0.4;
city_ambience.loop = true;
city_ambience.play();

// class_name, x_left, y_top, width, height, src_, rotation, isanim, n_frames, anim_path, anim_speed, color, trigger_link
const barrier1 = new Sprite("skeleton", 0, 360, 1700, 170)
barrier1.add_sprite()
const barrier2 = new Sprite("skeleton", 0, 525, 930, 450)
barrier2.add_sprite()
const barrier3 = new Sprite("skeleton", 1535, 500, 95, 450)
barrier3.add_sprite()
const barrier4 = new Sprite("skeleton", 920, 690, 800, 45)
barrier4.add_sprite()
const barrier6 = new Sprite("skeleton", 1230, 500, 200, 200)
barrier6.add_sprite()
barrier1.make_transparent()

let character_icon = "/dialog_faces/player_released.png"

const monolog = new Dialog("monolog", [
    ["Where are those cars?", character_icon],
    ])

document.body.addEventListener("keydown", (e) => { if (e.key == "e") {monolog.start_dialog(e)}})

const trigger = new Sprite("loc_trigger", -100, 0, 170, 1700, null, null, null, null, null, null, "red",
    "http://127.0.0.1:3000/maps/red_ending/private_sector_red.html")
trigger.add_sprite() 
trigger.make_transparent()

player.addEventListener("keydown", () => {check_collision_player([barrier1, barrier2, barrier3, barrier4, barrier6])
    check_collision_player([trigger], true)
})    
