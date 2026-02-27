import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import { check_collision_player } from "/sprite.js";

let player = document.querySelector(".player_civil")
player.style.top = 350 + "px"
player.style.left = 1400 + "px"
player.style.rotate = 180 + "deg"

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/feel_free_ambience.mp3");
city_ambience.volume = 0.45;
city_ambience.loop = true;
city_ambience.play();

// Barriers
const barrier1 = new Sprite("skeleton", 275, -10, 1775, 370)
barrier1.add_sprite()
const barrier2 = new Sprite("skeleton", 0, 400, 1775, 370)
barrier2.add_sprite()
const barrier3 = new Sprite("skeleton", 0, 70, 130, 380)
barrier3.add_sprite()
const barrier4 = new Sprite("skeleton", 1500, 0, 130, 1280)
barrier4.add_sprite()
const barrier5 = new Sprite("skeleton", 0, -150, 1300, 180)
barrier5.add_sprite()
// barrier1.make_transparent()

// Red Flag
const red_flag = new Sprite("red_flag", 370, -45, 150, 300, "/sprite_images/flags/flag_red/flag_red1.png") // no col
red_flag.add_sprite()

// Trigger to the next locatinon
const trigger = new Sprite("loc_trigger", -150, 0, 170, 1700, null, null, null, null, null, null, "red",
    "http://127.0.0.1:3000/maps/red_ending/bay_red_ending.html")
trigger.add_sprite()
trigger.make_transparent()

player.addEventListener("keydown", () => {check_collision_player([barrier1, barrier2, barrier3, barrier4, barrier5])
    check_collision_player([trigger], true) // true parameter is for trigger sprites
})
