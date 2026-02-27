import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import { check_collision_player } from "/sprite.js";
import { write_title, scene_transition } from "/cutscene_tools.js";

scene_transition(1030)
write_title("64 days later...  ")

let player = document.querySelector(".player")
player.style.top = 500 + "px"
player.style.left = 720 + "px"
player.style.rotate = 0 + "deg"

// Ambience Audio
let city_ambience = new Audio("/maps/ambience_sounds/windstorm.mp3");
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

const rick = new Sprite("rick", 720, 100, 100, 100, "/sprite_images/characters/rick.png") // no col
rick.add_sprite()

let character_icon = "/dialog_faces/player_face_war_late.png"
let rick_icon = "/dialog_faces/rick/rick_cooked.png"

const dialog = new Dialog("dialog", [
    ["Do you have some cigarettes left?", rick_icon],
    ["It was the last package.", character_icon],
    ["Fuck.", rick_icon],
    ["However man. Can you plea", rick_icon],
    ["Plea what?", character_icon],
    ["Please just admit you finished them all yourself?", rick_icon],
    ["I told you, it was the last package.", character_icon],
    ["You always say that.", rick_icon],
    ["Because it's always true.", character_icon],
    ["Unbelievable.", rick_icon],
    ["You could try surviving a day without smo-", character_icon]
])

const white_screen = new Sprite("white_screen", 0, 0, 2000, 2000, null, 0, 0, 0, 0, 0, "white") // no col

dialog.start_dialog()
document.body.addEventListener("keydown", (e) => { if (e.key == "e") {
    dialog.start_dialog(e)
    if (!document.querySelector(".dialog_window")) {
        // Art Strike sound
        let art_shot = new Audio("/sfx/artillery_shot.mp3")
        art_shot.volume = 0.8
        art_shot.play()
        // Explotion anim
        const art_explotion = new Sprite(
            "art_explotion", 
            800, 
            100, 
            200,
            200, 
            "/sprite_images/art_explotion/art1.png", 
            0,
            true,
            7,
            "/sprite_images/art_explotion/art",
            70
        )
        art_explotion.add_sprite()
        art_explotion.play_anim()
        city_ambience.volume = 0
        // Tinnitus sound
        let tinnitus = new Audio("/sfx/tinnitus.mp3")
        tinnitus.volume = 0.35
        tinnitus.play()

        setTimeout(() => {white_screen.add_sprite()}, 300)
        setTimeout(() => {window.location.href = "http://127.0.0.1:3000/maps/war_maps/trench_5.html"}, 4300)
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
