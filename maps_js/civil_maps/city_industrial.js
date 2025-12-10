import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import { check_collision_player } from "/sprite.js";

let player = document.querySelector(".player_civil")
player.style.top = 500 + "px"
player.style.left = 0 + "px"
player.style.rotate = 0 + "deg"

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/city_industrial.mp3");
city_ambience.volume = 0.5;
city_ambience.loop = true;
city_ambience.play();


// class_name, x_left, y_top, width, height, src_, rotation, isanim, n_frames, anim_path, anim_speed, color, trigger_link
// Tube smoke
const smoke_tube = new Sprite( // no col
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

const smoke_tube1 = new Sprite( // no col
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

const smoke_tube2 = new Sprite( // no col
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

const smoke_tube3 = new Sprite( // no col
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

let character_icon = "/dialog_faces/player_face_civil.png"

const barrier1 = new Sprite("skeleton", 0, 340, 1700, 170)
barrier1.add_sprite()

const barrier2 = new Sprite("skeleton", 0, 525, 930, 450)
barrier2.add_sprite()

const barrier3 = new Sprite("skeleton", 1535, 500, 95, 450)
barrier3.add_sprite()

const barrier4 = new Sprite("skeleton", 920, 690, 800, 45)
barrier4.add_sprite()


const barrier5 = new Sprite("skeleton", -95, 0, 80, 1700)
barrier5.add_sprite()
barrier1.make_transparent()

const monolog = new Dialog("monolog", [
    ["[coughs]", character_icon],
    ["Can't even breath here.", character_icon], 
    ["My home is nearby.", character_icon], 
    ["I don't have enough money to live in the center.", character_icon],
    ])

const trigger = new Sprite("loc_trigger", 1140, 600, 50, 40, null, null, null, null, null,null, "green",
    "https://www.youtube.com/watch?v=7dtiSR-IMus")
trigger.add_sprite()
// trigger.make_transparent()

document.body.addEventListener("keydown", (e) => { if (e.key == "e") {monolog.start_dialog(e)}})
player.addEventListener("keydown", () => {check_collision_player([barrier1, barrier2, barrier3, barrier4, barrier5])
    check_collision_player([trigger], true) // true parameter is for trigger sprites
})    
