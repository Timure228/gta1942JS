import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import { check_collision_player } from "/sprite.js";

let player = document.querySelector(".player_civil")
player.style.top = 520 + "px"
player.style.left = 140 + "px"
player.style.rotate = -90 + "deg"

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/city_industrial.mp3");
city_ambience.volume = 0.5;
city_ambience.loop = true;
city_ambience.play();


// class_name, x_left, y_top, width, height, src_, rotation, isanim, n_frames, anim_path, anim_speed, color, trigger_link
// Tube smoke
const smoke_tube = new Sprite(
    "smoke_indsutrial",
    559, 
    -55, 
    100, 
    160,
    "/sprite_images/sfx/smoke_industrial/smoke1.png", 
    0,
    true, 
    5,
    "/sprite_images/sfx/smoke_industrial/smoke",
    300
)
smoke_tube.add_sprite()
smoke_tube.play_anim()

const smoke_tube1 = new Sprite(
    "smoke_indsutrial1",
    637, 
    30, 
    80, 
    105,
    "/sprite_images/sfx/smoke_industrial/smoke1.png", 
    0,
    true, 
    5,
    "/sprite_images/sfx/smoke_industrial/smoke",
    270
)
smoke_tube1.add_sprite()
smoke_tube1.play_anim()

const smoke_tube2 = new Sprite(
    "smoke_indsutrial2",
    1362, 
    64, 
    45, 
    70,
    "/sprite_images/sfx/smoke_industrial/smoke1.png", 
    0,
    true, 
    5,
    "/sprite_images/sfx/smoke_industrial/smoke",
    200
)
smoke_tube2.add_sprite()
smoke_tube2.play_anim()

const smoke_tube3 = new Sprite(
    "smoke_indsutrial3",
    1138, 
    187, 
    45, 
    100,
    "/sprite_images/sfx/smoke_industrial/smoke1.png", 
    0,
    true, 
    5,
    "/sprite_images/sfx/smoke_industrial/smoke",
    180
)
smoke_tube3.add_sprite()
smoke_tube3.play_anim()

const monolog = new Dialog("monolog", [
    "[coughs]",
    "Can't even breath here.", 
    "It's my home.", 
    "I don't have enought money to live in the center.",
    ])

document.body.addEventListener("keydown", (e) => { if (e.key == "e") {monolog.start_dialog(e)}})
    