import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import { check_collision_player } from "/sprite.js";
import { write_title, scene_transition } from "/cutscene_tools.js";

// scene_transition(230)

let player = document.querySelector(".player")
player.style.top = 400 + "px"
player.style.left = 720 + "px"
player.style.rotate = -90 + "deg"

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/windstorm.mp3");
city_ambience.volume = 0.6;
city_ambience.loop = true;
city_ambience.play();

// class_name, x_left, y_top, width, height, src_, rotation, isanim, n_frames, anim_path, anim_speed, color, trigger_link
// Wires
const barbed_wire1 = new Sprite("barbed_wire1", 920, 500, 180, 110, "/sprite_images/barbed_wire.png", 110)
barbed_wire1.add_sprite()
const barbed_wire2 = new Sprite("barbed_wire1", 1000, 640, 180, 110, "/sprite_images/barbed_wire.png", 188)
barbed_wire2.add_sprite()
const barbed_wire3 = new Sprite("barbed_wire1", 920, 100, 180, 110, "/sprite_images/barbed_wire.png", 83)
barbed_wire3.add_sprite()
const barbed_wire4 = new Sprite("barbed_wire1", 930, 300, 180, 110, "/sprite_images/barbed_wire.png", 100)
barbed_wire4.add_sprite()

// Barriers
const barrier = new Sprite("skeleton", 840, 0, 100, 1200)
barrier.add_sprite()
const barrier1 = new Sprite("skeleton", 500, 0, 140, 1200)
barrier1.add_sprite()
const barrier2 = new Sprite("skeleton", 450, 0, 600, 120)
barrier2.add_sprite()
const barrier3 = new Sprite("skeleton", 450, 570, 600, 120)
barrier3.add_sprite()
barrier.make_transparent()

// Trees
const tree1 = new Sprite("tree1", 350, 250, 250, 400, "/sprite_images/tree_images/tree_snow1.png") // no col
tree1.add_sprite()
const tree2 = new Sprite("tree1", 70, 50, 250, 400, "/sprite_images/tree_images/tree_snow2.png") // no col
tree2.add_sprite()
const tree3 = new Sprite("tree1", 250, -80, 250, 400, "/sprite_images/tree_images/tree_snow2.png") // no col
tree3.add_sprite()
const tree4 = new Sprite("tree1", 220, 130, 250, 400, "/sprite_images/tree_images/tree_snow2.png") // no col
tree4.add_sprite()
const tree5 = new Sprite("tree1", 445, -100, 150, 350, "/sprite_images/tree_images/tree4.png") // no col
tree5.add_sprite()
const tree6 = new Sprite("tree1", 120, 250, 250, 400, "/sprite_images/tree_images/tree_snow2.png") // no col
tree6.add_sprite()


const rick = new Sprite("rick", 720, 100, 100, 100, "/sprite_images/characters/rick.png") // no col
rick.add_sprite()

let character_icon = "/dialog_faces/player_face_war.png"
let rick_icon = "/dialog_faces/rick/rick.png"

const dialog = new Dialog("dialog", [
    ["So here we are, we need to settle a little bit.", rick_icon],
    ["Yeah. It's a bit cool here.", character_icon],
    ["Yeah. Like in refrigerator. I guess we just add some structure here.", rick_icon],
    ["We have enough of time.", character_icon],
    ["I brought mattresses from the training camp.", rick_icon],
    ["One?", character_icon],
    ["We don't need more, one of us will be at watch this night.", rick_icon],
    ["You're right.", character_icon],
])

dialog.start_dialog()
document.body.addEventListener("keydown", (e) => { if (e.key == "e") {
    dialog.start_dialog(e)
    if (!document.querySelector(".dialog_window")) {
        scene_transition(230, true)
        setTimeout(() => {window.location.href = "http://127.0.0.1:3000/maps/war_maps/trench_2.html"}, 4300)
    }}
})

player.addEventListener("keydown", () => check_collision_player([
    barbed_wire1,
    barbed_wire2,
    barbed_wire3,
    barbed_wire4,
    barrier,
    barrier1,
    barrier2,
    barrier3,
    rick
]))
