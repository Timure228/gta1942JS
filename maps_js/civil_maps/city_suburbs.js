import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import { check_collision_player } from "/sprite.js";

let player = document.querySelector(".player_civil")
player.style.top = 35 + "px"
player.style.left = 0 + "px"
player.style.rotate = 0 + "deg"

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/city_ambience2.mp3");
city_ambience.volume = 0.3;
city_ambience.loop = true;
city_ambience.play();

const barrier1 = new Sprite("skeleton", 275, -10, 1775, 370)
barrier1.add_sprite()
const barrier2 = new Sprite("skeleton", 0, 400, 1775, 370)
barrier2.add_sprite()
const barrier3 = new Sprite("skeleton", 0, 70, 130, 380)
barrier3.add_sprite()
const barrier4 = new Sprite("skeleton", -130, 0, 130, 1280)
barrier4.add_sprite()
const barrier5 = new Sprite("skeleton", 0, -120, 1300, 170)
barrier5.add_sprite()
barrier1.make_transparent()

// Trigger to the next locatinon
const trigger = new Sprite("loc_trigger", 1550, 0, 170, 1700, null, null, null, null, null, null, "red",
    "http://127.0.0.1:3000/maps/civil_maps/city_private_sector.html")
trigger.add_sprite()



player.addEventListener("keydown", () => {check_collision_player([barrier1, barrier2, barrier3, barrier4, barrier5])
    check_collision_player([trigger], true) // true parameter is for trigger sprites
})
