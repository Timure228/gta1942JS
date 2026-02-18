import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import { check_collision_player } from "/sprite.js";
import { write_title, scene_transition } from "/cutscene_tools.js";

let player = document.querySelector(".player")
player.style.top = 335 + "px"
player.style.left = 1480 + "px"
player.style.rotate = 150 + "deg"

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/windstorm.mp3");
city_ambience.volume = 0.6;
city_ambience.loop = true;
city_ambience.play();

// Ambience Audio 2
var war_ambience = new Audio("/maps/ambience_sounds/distant_battle.mp3");
war_ambience.volume = 0.4;
war_ambience.loop = true;
war_ambience.play();

// class_name, x_left, y_top, width, height, src_, rotation, isanim, n_frames, anim_path, anim_speed, color, trigger_link
// Wires
const barbed_wire1 = new Sprite("barbed_wire1", 1050, 50, 130, 80, "/sprite_images/barbed_wire.png", 40)
barbed_wire1.add_sprite()

// Barriers
const barrier = new Sprite("skeleton", 0, 150, 1700, 150)
barrier.add_sprite()
const barrier1 = new Sprite("skeleton", 0, 450, 1700, 150)
barrier1.add_sprite()
const barrier2 = new Sprite("skeleton", 1500, 0, 170, 1700)
barrier2.add_sprite()
barrier.make_transparent()

// Trees
const tree1 = new Sprite("tree1", 350, 50, 200, 250, "/sprite_images/tree_images/tree_snow1.png") // no col
tree1.add_sprite()
const tree2 = new Sprite("tree1", 1100, 400, 200, 250, "/sprite_images/tree_images/tree_snow2.png") // no col
tree2.add_sprite()
const tree3 = new Sprite("tree1", 550, 460, 230, 260, "/sprite_images/tree_images/tree_snow2.png") // no col
tree3.add_sprite()
const tree4 = new Sprite("tree1", 850, 470, 100, 200, "/sprite_images/tree_images/tree2.png") // no col
tree4.add_sprite()
const tree5 = new Sprite("tree1", 280, 460, 90, 180, "/sprite_images/tree_images/tree1.png") // no col
tree5.add_sprite()
const tree6 = new Sprite("tree1", 920, -50, 90, 180, "/sprite_images/tree_images/tree4.png") // no col
tree6.add_sprite()

const bush = new Sprite("bush", 1020, 540, 130, null, "/sprite_images/bushes/bush1.png") // No col
bush.add_sprite()
const bush1 = new Sprite("bush", 405, 610, 130, null, "/sprite_images/bushes/bush1.png") // No col
bush1.add_sprite()


// Trigger to the next locatinon
const trigger = new Sprite("loc_trigger", -130, 0, 130, 1700, null, null, null, null, null, null, "red",
    "http://127.0.0.1:3000/maps/civil_maps/forest2.html")
trigger.add_sprite()


player.addEventListener("keydown", () => {check_collision_player([barrier, barrier1, barrier2])
    check_collision_player([trigger], true) // true parameter is for trigger sprites
})
