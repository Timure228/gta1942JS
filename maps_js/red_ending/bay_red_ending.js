import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import NPC from "/npc.js";
import { check_collision_player } from "/sprite.js";
import { write_title } from "/cutscene_tools.js";

write_title("Port Luna 10:00 AM")
let player = document.querySelector(".player_civil")
player.style.top = 570 + "px"
player.style.left = 1460 + "px"
player.style.rotate = 180 + "deg"

var door_open = new Audio("/sfx/ferry.mp3");
door_open.volume = 0.8;
door_open.play()
setInterval(() => {door_open.play()}, 40000);

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/city_ambience.wav");
city_ambience.volume = 0.45;
city_ambience.loop = true;
city_ambience.play();

var second_ambience = new Audio("/maps/ambience_sounds/feel_free_ambience.mp3");
second_ambience.volume = 0.35;
second_ambience.loop = true;
second_ambience.play();

// class_name, x_left, y_top, width, height, src_, rotation, isanim, n_frames, anim_path, anim_speed, color, trigger_link
const grass = new Sprite("grass", 0, 47, 1600, 100, "/maps/map_img/grass_img.png")
grass.add_sprite()

const sea_s = new Sprite("skeleton", 0, 380, 1600, 200)
sea_s.add_sprite()
const bottom_s = new Sprite("skeleton", 0, 600, 1700, 100)
bottom_s.add_sprite()
const barrier1 = new Sprite("skeleton", -50, 100, 50, 1900)
barrier1.add_sprite()
const barrier2 = new Sprite("skeleton", 1530, 100, 50, 1900)
barrier2.add_sprite()
sea_s.make_transparent()

const ferry = new NPC("ferry", 1550, 0, 650, 500, "/npc_images/ferry.gif", null, -2000, 3)
ferry.add_NPC()
ferry.move()

// Fucking forest
const tree1 = new Sprite("tree1", 50, 430, 90, null, "/sprite_images/tree_images/tree3.png") // No col
tree1.add_sprite()
const tree4 = new Sprite("tree1", 420, 410, 90, null, "/sprite_images/tree_images/tree4.png") // No col
tree4.add_sprite()
const bush1 = new Sprite("bush1", 380, 635, 130, null, "/sprite_images/bushes/bush1.png") // No col
bush1.add_sprite()
const tree9 = new Sprite("tree1", 690, 420, 90, null, "/sprite_images/tree_images/tree1.png") // No col
tree9.add_sprite()
const tree12 = new Sprite("tree5", 890, 240, 140, 480, "/sprite_images/tree_images/tree5.png") // No col
tree12.add_sprite()
const tree13 = new Sprite("tree4", 1400, 455, 90, null, "/sprite_images/tree_images/tree4.png") // No col
tree13.add_sprite()
const bush2 = new Sprite("bush1", 1080, 635, 130, null, "/sprite_images/bushes/bush1.png") // No col
bush2.add_sprite()  

let character_icon = "/dialog_faces/player_released.png"

const monolog = new Dialog("monolog", [
    ["Nice view...", character_icon],
    ["...", character_icon], 
    ["Can't sleep tonight...", character_icon], 
    ["Maybe insomnia?", character_icon],
    ["...", character_icon],
    ["I don't even know...", character_icon],
    ["This feeling...", character_icon],
    ["However, I need to get home.", character_icon]
])

player.addEventListener("keydown", () => {check_collision_player([sea_s, grass, bottom_s, barrier1, barrier2])
    check_collision_player([trigger], true) // true parameter is for trigger sprites
})
document.body.addEventListener("keydown", (e) => { if (e.key == "e") {
    monolog.start_dialog(e)
    if (!document.querySelector(".dialog_window")) {
        window.location.href = "http://127.0.0.1:3000/maps/red_ending/red_ending.html"
    }
}})
