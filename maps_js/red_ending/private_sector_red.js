import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import { check_collision_player } from "/sprite.js";

let player = document.querySelector(".player_civil")
player.style.top = 340 + "px"
player.style.left = 1300 + "px"
player.style.rotate = 180 + "deg"

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/feel_free_ambience.mp3");
city_ambience.volume = 0.95;
city_ambience.loop = true;
city_ambience.play();

const barrier2 = new Sprite("skeleton", 0, 420, 1700, 100)
barrier2.add_sprite()
const barrier3 = new Sprite("skeleton", 0, 250, 1700, 100)
barrier3.add_sprite()
const barrier5 = new Sprite("skeleton", 1420, 200, 400, 350)
barrier5.add_sprite()
barrier2.make_transparent()

// Trigger to the next locatinon
const trigger = new Sprite("loc_trigger", -180, 0, 170, 1700, null, null, null, null, null, null, "red",
    "http://127.0.0.1:3000/maps/red_ending/suburbs_red.html")
trigger.add_sprite() 

player.addEventListener("keydown", () => {check_collision_player([barrier2, barrier3, barrier5])
    check_collision_player([trigger], true) // true parameter is for trigger sprites
})
