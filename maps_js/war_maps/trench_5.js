import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import { check_collision_player } from "/sprite.js";
import { write_title, scene_transition } from "/cutscene_tools.js";

// scene_transition(1230, false, "white")

let player = document.querySelector(".player")
player.style.top = 500 + "px"
player.style.left = 720 + "px"
player.style.rotate = -45 + "deg"

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

// Different things
const crate1 = new Sprite("crate", 770, 250, 80, 80, "/sprite_images/crates/wooden_crate_food.png") // no col
crate1.add_sprite()
const crate2 = new Sprite("crate", 760, 330, 80, 80, "/sprite_images/crates/wooden_crate_medical.png") // no col
crate2.add_sprite()
const cigarette_butts1 = new Sprite("cigarette_buts", 700, 200, 70, 70, "/sprite_images/other_stuff/cigarette_butts.png", 7) // no col
cigarette_butts1.add_sprite()
const cigarette_butts2 = new Sprite("cigarette_buts", 790, 440, 40, 40, "/sprite_images/other_stuff/cigarette_butts1.png", 13) // no col
cigarette_butts2.add_sprite()
const shit = new Sprite(
    "shit", 
    490, 
    300, 
    80,
    80, 
    "/sprite_images/other_stuff/shit.png", 
    0,
    true, 
    2, 
    "/sprite_images/other_stuff/shit", 
    800
)
shit.add_sprite()
shit.play_anim()

const fire = new Sprite(
    "fire", 
    745, 
    220, 
    100,
    200, 
    "/sprite_images/fire/fire1.png", 
    0,
    true, 
    3, 
    "/sprite_images/fire/fire", 
    300
)
fire.add_sprite()
fire.play_anim()

const fire1 = new Sprite(
    "fire1", 
    755, 
    130, 
    100,
    200, 
    "/sprite_images/fire/fire1.png", 
    0,
    true, 
    3, 
    "/sprite_images/fire/fire", 
    280
)
fire1.add_sprite()
fire1.play_anim()

const crater = new Sprite("crater", 820, 100, 150, 180, "/sprite_images/other_stuff/crater.png", 13) // no col
crater.add_sprite()

const rick = new Sprite("rick", 690, 80, 140, 120, "/sprite_images/characters/rick_dead.png") // no col
rick.add_sprite()

let rick_icon = "/dialog_faces/Rick/rick_dead.png"
let character_icon = "/dialog_faces/player_face_war_injured.png"
let walkie_talkie = "/dialog_faces/walkie_talkie/walkie_talkie.png"

const dialog = new Dialog("dialog", [
    ["Rick.", character_icon],
    ["Rick!!!", character_icon],
    ["Man are you injured?", character_icon],
    ["...", rick_icon],
    ["Fuck.", character_icon],
    ["Hey, can someone hear me?", walkie_talkie],
    ["Yes I can hear you.", character_icon],
    ["I need help.", character_icon],
    ["General Staff ordered us to retreat. All units should retreat to...", walkie_talkie],
    ["Hey! Do you hear me? Where should we retreat?", character_icon],
    ["A...e...e...f...dc...ov...r", walkie_talkie],
    ["Fucking radio.", character_icon],
    ["Ok, I guess I should go on my own.", character_icon]
])

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

dialog.start_dialog()
document.body.addEventListener("keydown", (e) => { if (e.key == "e") {
    dialog.start_dialog(e)
    if (!document.querySelector(".dialog_window")) {
        setTimeout(() => {window.location.href = "http://127.0.0.1:3000/maps/war_maps/forest1.html"}, 1000)
    }}
})
