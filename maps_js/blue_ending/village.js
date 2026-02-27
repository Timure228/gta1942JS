import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import Object from "/object.js";
import { check_collision_player } from "/sprite.js";

let player = document.querySelector(".player")
player.style.top = 280 + "px"
player.style.left = 250 + "px"
player.style.rotate = 0 + "deg"

// Ambience Audio
var village_ambience = new Audio("/maps/ambience_sounds/village.mp3");
village_ambience.volume = 0.6;
village_ambience.loop = true;
village_ambience.play();

// Barriers
const barrier1 = new Sprite("skeleton", 0, 310, 1700, 170)
barrier1.add_sprite()
const barrier2 = new Sprite("skeleton", 0, 0, 170, 1700)
barrier2.add_sprite()
const barrier3 = new Sprite("skeleton", 0, 0, 1700, 170)
barrier3.add_sprite()
const barrier4 = new Sprite("skeleton", 1200, 0, 170, 1700)
barrier4.add_sprite()
barrier1.make_transparent()

// Houses
const house1 = new Sprite("house1", 300, 90, 150, 150, "/sprite_images/house_images/house2.png") // no col
house1.add_sprite()
const house2 = new Sprite("house1", 500, 80, 150, 150, "/sprite_images/house_images/house3.png") // no col
house2.add_sprite()
const house3 = new Sprite("house1", 700, 85, 150, 150, "/sprite_images/house_images/house4.png") // no col
house3.add_sprite()
const house4 = new Sprite("house1", 1000, 100, 150, 150, "/sprite_images/house_images/house5.png") // no col
house4.add_sprite()
const house5 = new Sprite("house1", 800, 300, 190, 190, "/sprite_images/house_images/house6.png") // no col
house5.add_sprite()
const house6 = new Sprite("house1", 400, 350, 150, 150, "/sprite_images/house_images/house5.png", 5) // no col
house6.add_sprite()
const house7 = new Sprite("house1", 550, 320, 280, 280, "/sprite_images/house_images/house1.png") // no col
house7.add_sprite()
const house8 = new Sprite("house1", 1020, 420, 160, 160, "/sprite_images/house_images/house2.png", -2) // no col
house8.add_sprite()
const garage = new Sprite("house1", 880, 110, 100, 120, "/sprite_images/garage/garage.png") // no col
garage.add_sprite()

let character_icon = "/dialog_faces/player_face_war_injured.png"

const monolog = new Dialog("monolog", [
    ["A village? I didn't see it on the map.", character_icon],
    ["Maybe I can find some food in these houses.", character_icon],
])

const trigger = new Object(null, 320, 150, 105, 100, "green")
trigger.add_object()

document.body.addEventListener("keydown", (e) => { if (e.key == "e") {
    monolog.start_dialog(e)
}})

document.body.addEventListener("keydown", (e) => { if (e.key == "t" && document.querySelector(".key_tip")) {
    window.location.href = "http://127.0.0.1:3000/maps/blue_ending/wooden_house.html"
}})

player.addEventListener("keydown", () => {check_collision_player([barrier1, barrier2, barrier3, barrier4])
    check_collision_player([trigger], false, true)
})  