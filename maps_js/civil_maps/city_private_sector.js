import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import { check_collision_player } from "/sprite.js";

let player = document.querySelector(".player_civil")
player.style.top = 395 + "px"
player.style.left = 0 + "px"
player.style.rotate = 0 + "deg"

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/cricket.mp3");
city_ambience.volume = 0.95;
city_ambience.loop = true;
city_ambience.play();

const barrier1 = new Sprite("skeleton", 430, 220, 100, 1700)
barrier1.add_sprite()

const barrier2 = new Sprite("skeleton", 0, 510, 1700, 100)
barrier2.add_sprite()

const barrier3 = new Sprite("skeleton", 0, 40, 1700, 100)
barrier3.add_sprite()

const barrier4 = new Sprite("skeleton", 520, 220, 690, 250)
barrier4.add_sprite()

const barrier5 = new Sprite("skeleton", 1320, 120, 400, 340)
barrier5.add_sprite()


const barrier6 = new Sprite("skeleton", 0, 120, 260, 310)
barrier6.add_sprite()

// Trigger to the next locatinon
const trigger = new Sprite("loc_trigger", 1550, 0, 170, 1700, null, null, null, null, null, null, "red",
    "http://127.0.0.1:3000/maps/civil_maps/city_suburbs.html")
trigger.add_sprite()

barrier1.make_transparent()

player.addEventListener("keydown", () => {check_collision_player([barrier1, barrier2, barrier3, barrier4, barrier5, barrier6])
    check_collision_player([trigger], true) // true parameter is for trigger sprites
})
