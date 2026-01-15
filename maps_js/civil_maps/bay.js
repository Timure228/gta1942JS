import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import { check_collision_player } from "/sprite.js";
import { write_title } from "/cutscene_tools.js";

write_title("Port Luna 2:00")
let player = document.querySelector(".player_civil")
player.style.top = 520 + "px"
player.style.left = 140 + "px"
player.style.rotate = -90 + "deg"

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/city_ambience.wav");
city_ambience.volume = 0.45;
city_ambience.loop = true;
city_ambience.play();


// class_name, x_left, y_top, width, height, src_, rotation, isanim, n_frames, anim_path, anim_speed, color, trigger_link
const sea_s = new Sprite("skeleton", 0, 340, 1600, 200)
sea_s.add_sprite()


const grass = new Sprite("grass", 0, 647, 1600, 100, "/maps/map_img/grass_img.png")
grass.add_sprite()

const bottom_s = new Sprite("skeleton", 0, 563, 1700, 100)
bottom_s.add_sprite()

const barrier1 = new Sprite("skeleton", -50, 63, 50, 1900)
barrier1.add_sprite()
sea_s.make_transparent()

// Fucking forest
const tree1 = new Sprite("tree1", 50, 410, 90, null, "/sprite_images/tree_images/tree1.png") // No col
tree1.add_sprite()
const tree2 = new Sprite("tree4", 300, 420, 90, null, "/sprite_images/tree_images/tree4.png") // No col
tree2.add_sprite()
const tree3 = new Sprite("tree1", 440, 420, 90, null, "/sprite_images/tree_images/tree1.png") // No col
tree3.add_sprite()
const tree4 = new Sprite("tree1", 490, 410, 90, null, "/sprite_images/tree_images/tree1.png") // No col
tree4.add_sprite()
const tree5 = new Sprite("tree4", 550, 440, 90, null, "/sprite_images/tree_images/tree4.png") // No col
tree5.add_sprite()
const tree6 = new Sprite("tree4", 580, 410, 90, null, "/sprite_images/tree_images/tree4.png") // No col
tree6.add_sprite()
const tree7 = new Sprite("tree4", 630, 470, 90, null, "/sprite_images/tree_images/tree4.png") // No col
tree7.add_sprite()
const tree8 = new Sprite("tree4", 1180, 435, 90, null, "/sprite_images/tree_images/tree4.png") // No col
tree8.add_sprite()
const bush1 = new Sprite("bush1", 380, 635, 130, null, "/sprite_images/bushes/bush1.png") // No col
bush1.add_sprite()
const tree9 = new Sprite("tree1", 690, 420, 90, null, "/sprite_images/tree_images/tree1.png") // No col
tree9.add_sprite()
const tree10 = new Sprite("tree5", 790, 240, 140, 480, "/sprite_images/tree_images/tree5.png") // No col
tree10.add_sprite()
const tree11 = new Sprite("tree5", 840, 220, 140, 480, "/sprite_images/tree_images/tree5.png") // No col
tree11.add_sprite()
const tree12 = new Sprite("tree5", 890, 230, 140, 480, "/sprite_images/tree_images/tree5.png") // No col
tree12.add_sprite()
const tree13 = new Sprite("tree4", 1400, 455, 90, null, "/sprite_images/tree_images/tree4.png") // No col
tree13.add_sprite()
const tree14 = new Sprite("tree4", 990, 405, 90, null, "/sprite_images/tree_images/tree4.png") // No col
tree14.add_sprite()
const bush2 = new Sprite("bush1", 1080, 635, 130, null, "/sprite_images/bushes/bush1.png") // No col
bush2.add_sprite()
const tree16 = new Sprite("tree1", 1290, 420, 90, null, "/sprite_images/tree_images/tree1.png") // No col
tree16.add_sprite()

// Trigger to the next locatinon
const trigger = new Sprite("loc_trigger", 1550, 0, 170, 1700, null, null, null, null, null, null, "red",
    "http://127.0.0.1:3000/maps/civil_maps/city_suburbs.html")
trigger.add_sprite()

let character_icon = "/dialog_faces/player_face_civil.png"

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

player.addEventListener("keydown", () => {check_collision_player([sea_s, grass, bottom_s, barrier1])
    check_collision_player([trigger], true) // true parameter is for trigger sprites
})
document.body.addEventListener("keydown", (e) => { if (e.key == "e") {monolog.start_dialog(e)}})
