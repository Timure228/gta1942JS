import Sprite from "/sprite.js";
import NPC from "/npc.js";
import Dialog from "/dialog.js";
import TwoOptionChooseWindow from "/choose_window.js";
import Object from "/object.js";
import { check_collision_player } from "/sprite.js";
import { bullet_collision_npc } from "/npc.js";
import { write_title, scene_transition } from "/cutscene_tools.js";

write_title("Get 100 points at shooting")

let player = document.querySelector(".player")
player.style.top = 400 + "px"
player.style.left = 240 + "px"
player.style.rotate = 0 + "deg"

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/windstorm.mp3");
city_ambience.volume = 0.6;
city_ambience.loop = true;
city_ambience.play();

// Wires
const barbed_wire1 = new Sprite("barbed_wire1", 150, 500, 150, 100, "/sprite_images/barbed_wire.png")
barbed_wire1.add_sprite()
const barbed_wire2 = new Sprite("barbed_wire1", 300, 500, 150, 100, "/sprite_images/barbed_wire.png")
barbed_wire2.add_sprite()
const barbed_wire3 = new Sprite("barbed_wire1", 450, 500, 150, 100, "/sprite_images/barbed_wire.png")
barbed_wire3.add_sprite()
const barbed_wire4 = new Sprite("barbed_wire1", 600, 500, 150, 100, "/sprite_images/barbed_wire.png")
barbed_wire4.add_sprite()
const barbed_wire5 = new Sprite("barbed_wire1", 750, 500, 150, 100, "/sprite_images/barbed_wire.png")
barbed_wire5.add_sprite()
const barbed_wire6 = new Sprite("barbed_wire1", 900, 500, 150, 100, "/sprite_images/barbed_wire.png")
barbed_wire6.add_sprite()
const barbed_wire7 = new Sprite("barbed_wire1", 1050, 500, 150, 100, "/sprite_images/barbed_wire.png")
barbed_wire7.add_sprite()
const barbed_wire8 = new Sprite("barbed_wire1", 1200, 500, 150, 100, "/sprite_images/barbed_wire.png")
barbed_wire8.add_sprite()
const barbed_wire9 = new Sprite("barbed_wire1", 1350, 500, 150, 100, "/sprite_images/barbed_wire.png")
barbed_wire9.add_sprite()

// Additional design
const campfire = new Sprite(
    "campfire",
    1200, 
    450, 
    50, 
    50,
    "/sprite_images/campfire/campfire1.png", 
    0,
    true, 
    2,
    "/sprite_images/campfire/campfire",
    600
)
campfire.add_sprite()
campfire.play_anim()

// Barriers
const barrier = new Sprite("skeleton", 1400, 0, 100, 1200)
barrier.add_sprite()
const barrier1 = new Sprite("skeleton", 0, 0, 140, 1200)
barrier1.add_sprite()
const barrier2 = new Sprite("skeleton", 0, 240, 1400, 120)
barrier2.add_sprite()
barrier.make_transparent()

// class_name, x_left, y_top, width, height, src_, color
const shooting_target = new NPC("shooting_target", 300, 100, 100, 100, "/npc_images/aim_target.png", false)
shooting_target.add_NPC()

player.addEventListener("keydown", () => check_collision_player([
    barbed_wire1,
    barbed_wire2,
    barbed_wire3,
    barbed_wire4,
    barbed_wire5,
    barbed_wire6,
    barbed_wire7,
    barbed_wire8,
    barbed_wire9,
    barrier,
    barrier1,
    barrier2
]))
let hit_count = 1;
setInterval(() => {
    hit_count += bullet_collision_npc([shooting_target])
    document.querySelector(".aim_score").innerHTML = (hit_count - 1)
}, 16);
